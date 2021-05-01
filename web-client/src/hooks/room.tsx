import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toast";
import { useRouter } from "next/router";

import { useConnection } from "./connection";
import { Player, Room, Message } from "../@types/entities";

interface RoomProviderProps {
  children: React.ReactNode;
}

interface JoinRandomRoom {
  nickname: string;
}

interface JoinRoom {
  nickname: string;
  roomId: string;
}

interface RoomContextProps {
  me: Player | null;
  room: Room | null;
  messages: Message[];
  counter: number;
  winner: string;
  joinRoom(data: JoinRoom): void;
  joinRandomRoom(data: JoinRandomRoom): void;
  sendMessage(message: string): void;
  startMatch(): void;
  attackEnemy(): void;
  resetCombo(): void;
}

const RoomContext = createContext<RoomContextProps | null>(null);

export function RoomProvider({ children }: RoomProviderProps) {
  const [room, setRoom] = useState<Room | null>(null);
  const [messages, setMessages] = useState<Message[] | []>([]);
  const [me, setMe] = useState<Player | null>(null);
  const [counter, setCounter] = useState(5);
  const [winner, setWinner] = useState("");

  const { socket } = useConnection();
  const router = useRouter();

  useEffect(() => {
    events();
  }, []);

  useEffect(() => {
    socket.on("new-message", (data: Message) => {
      setMessages([
        ...messages,
        {
          player: data.player,
          message: data.message,
          isMe: false,
          date: new Date(),
        },
      ]);
    });

  }, [me, messages])

  function events() {
    socket.on("createdRoom", (data: any) => {
      setRoom(data.room);
      setMe(data.player);

      router.push(`/match/${data.room.id}`);
      toast("🎉sala criada com sucesso", {
        backgroundColor: "#0f1317",
        color: "#DDE2E8",
      });
    });

    socket.on('joinedRandomRoom', (data: any) => {
      router.push(`/match/${data.room.id}`);
      toast("🥳 Sala encontrada", {
        backgroundColor: "#0f1317",
        color: "#DDE2E8",
      });
    })

    socket.on("joined", (data: any) => {
      setRoom(data.room);
      setMe(data.player);
      toast("🥳 você entrou na sala", {
        backgroundColor: "#0f1317",
        color: "#DDE2E8",
      });
    });

    socket.on("new-player", (data: Room) => {
      setRoom(data);
      toast("💥 um player se conectou a sala", {
        backgroundColor: "#0f1317",
        color: "#DDE2E8",
      });
    });

    socket.on("player-disconnected", (data: Room) => {
      setRoom(data);

      if (!me) return;

      setMe(data.players[me.id]);
      toast("🏃‍♂️ um player saiu", {
        backgroundColor: "#0f1317",
        color: "#DDE2E8",
      });

      if (data.players[me.id].isAdmin) {
        toast("🔰 você agora é o administrador da sala", {
          backgroundColor: "#0f1317",
          color: "#DDE2E8",
        });
      }
    });


    socket.on("UPDATE-ROOM", (updatedRoom: Room) => {
      setCounter(5);
      setRoom(updatedRoom);

      if (!me) return;

      setMe(updatedRoom.players[me.id]);
    });

    socket.on("RES-UPDATE-COUNTER", (counter: number) => {
      setCounter(counter);
    });

    socket.on("WINNER", (data: any) => {
      setRoom(data.room);
      setWinner(data.winner);
    });
  }

  function joinRoom(data: JoinRoom) {
    socket.emit("joinRoom", {
      nickname: data.nickname,
      roomId: data.roomId,
    });
  }

  function sendMessage(message: string) {
    if (me) {
      setMessages([
        ...messages,
        {
          player: me,
          message: message,
          isMe: true,
          date: new Date(),
        },
      ]);

      socket.emit("onUserMessage", {
        message,
        roomId: room?.id,
        player: me,
      });
    }
  }

  function startMatch() {
    socket.emit("ReqStartMatch", {
      roomId: room?.id,
    });
  }

  function attackEnemy() {
    socket.emit("ReqAttackEnemy", {
      roomId: room?.id,
      target: me?.isAdmin ? "P2" : "P1",
    });
  }

  function resetCombo() {
    socket.emit("REQ-RESET-COMBO", {
      roomId: room?.id,
      target: me?.isAdmin ? "P1" : "P2",
    });
  }

  function joinRandomRoom(data: JoinRandomRoom) {
    socket.emit("joinRandomRoom", {
      nickname: data.nickname,
    });
  }

  return (
    <RoomContext.Provider
      value={{
        me,
        joinRoom,
        joinRandomRoom,
        room,
        sendMessage,
        messages,
        startMatch,
        counter,
        attackEnemy,
        resetCombo,
        winner,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export function useRoom(): RoomContextProps {
  const context = useContext(RoomContext);

  if (!context) {
    throw new Error("useRoom must be used within a RoomProvider");
  }

  return context;
}

