import * as S from "../../styles/match";
import { useRoom } from "../../hooks/room";

import Chat from "../../components/Chat";
import Connect from "../../components/Connect";
import Match from "../../components/Match";
import Counter from "../../components/Counter";
import Finish from "../../components/Finish";
import Players from "../../components/Players";
import Tutorial from "../../components/Tutorial";

export default function Home() {
  const { room } = useRoom();

  return (
    <>
      <S.Container>
        {room && <Chat />}
        {(() => {
          switch (room?.status) {
            case "WAITING":
              return <Tutorial />;
            case "STARTING":
              return <Counter />;
            case "INGAME":
              return <Match />;
            case "FINISH":
              return <Finish />;
            default:
              return <Connect />;
          }
        })()}
        {room && <Players />}
      </S.Container>
    </>
  );
}
