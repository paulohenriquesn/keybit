import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import * as S from "../styles/home";
import { useRoom } from "../hooks/room";

export default function Home() {
  const [nickname, setNickname] = useState("");
  const { joinRoom,joinRandomRoom } = useRoom();

  function handleCreateRoom(e: any) {
    e.preventDefault();

      joinRoom({
        nickname: nickname || "anônimo",
        roomId: uuidv4(),
      });
  }

  function handleConnectRandomRoom() {
    joinRandomRoom({
      nickname: nickname || "anônimo",
    });
  }

  return (
    <>
      <S.Container onSubmit={handleCreateRoom}>
        <h1>keybit</h1>

        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="digite seu nickname"
        />
        <button type="submit">criar nova sala</button>
        <button type="button" onClick={handleConnectRandomRoom}>encontrar partida</button>
      </S.Container>
    </>
  );
}
