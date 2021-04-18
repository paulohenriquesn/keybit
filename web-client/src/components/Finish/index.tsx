import { addSeconds, differenceInSeconds, startOfDay, format } from "date-fns";
import { GiTrophy } from "react-icons/gi";
import { Player } from "../../@types/entities";

import { useRoom } from "../../hooks/room";
import * as S from "./styles";

export default function Finish() {
  const { winner, room } = useRoom();

  function handleTime(deathIn: number) {
    if (room) {
      const diff = differenceInSeconds(deathIn, room.startedIn);
      const add = addSeconds(startOfDay(new Date()), diff);

      return format(add, "mm:ss");
    }

    return "";
  }

  function sortList() {
    if (room) {
      const sorted = Object.values(room.players).sort(
        (a, b) => a.deathIn - b.deathIn
      );

      return sorted;
    }

    return [];
  }

  return (
    <>
      <S.Container>
        <div className="winner">
          <GiTrophy color="#721BE1" size={60} />
          <h1>{winner}</h1>
          <span>vencedor</span>
        </div>

        <div className="section rank">
          {room &&
            sortList().map((player: Player, key: number) => (
              <div key={key} className="player">
                <h3>
                  [{key}] {player.username}
                </h3>
                <h3>{handleTime(player.deathIn)}</h3>
              </div>
            ))}
        </div>

        <div className="back">
          <span>voltando para o inicio em 10s</span>
        </div>
      </S.Container>
    </>
  );
}
