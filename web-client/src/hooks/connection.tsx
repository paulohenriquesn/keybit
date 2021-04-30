import React, { useState, createContext, useContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface ConnectionProviderProps {
  children: React.ReactNode;
}

interface ConnectionContextProps {
  socket: Socket;
  setSocket(socket: Socket): void;
  ping: number;
  setPing(ping: number): void;
}

const ConnectionContext = createContext<ConnectionContextProps | null>(null);

export function ConnectionProvider({ children }: ConnectionProviderProps) {
  const [ping, setPing] = useState(0);
  const [socket, setSocket] = useState<Socket>(() => {
    const socketIO = io("http://127.0.0.1:3333/");

    return socketIO;
  });

  useEffect(() => {
    getPing();
    setInterval(() => getPing(), 5000);
  }, [socket]);

  function getPing() {
    socket.emit("latency", Date.now(), (startTime: any) => {
      const latency = Date.now() - startTime;
      setPing(latency);
    });
  }

  return (
    <ConnectionContext.Provider value={{ socket, setSocket, ping, setPing }}>
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnection(): ConnectionContextProps {
  const context = useContext(ConnectionContext);

  if (!context) {
    throw new Error("useConnection must be used within a ConnectionProvider");
  }

  return context;
}
