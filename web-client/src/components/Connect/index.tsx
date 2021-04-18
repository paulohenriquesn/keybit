import { useState } from "react";
import { useRouter } from "next/router";

import { useRoom } from "../../hooks/room";
import * as S from "./styles";

export default function Connect() {
  const [nickname, setNickname] = useState("");

  const { joinRoom } = useRoom();

  const router = useRouter();
  const { id } = router.query;

  function handleJoinRoom(e: any) {
    e.preventDefault();

    if (Array.isArray(id)) {
      joinRoom({
        roomId: id[0],
        nickname: nickname || "anônimo",
      });
      return;
    }

    joinRoom({
      roomId: id,
      nickname: nickname || "anônimo",
    });
  }

  return (
    <>
      <S.Container onSubmit={handleJoinRoom}>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="digite seu nickname"
        />
        <button type="submit">entrar na sala</button>
      </S.Container>
    </>
  );
}
