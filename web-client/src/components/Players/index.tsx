import { RiShieldUserFill } from "react-icons/ri";
import ProgressBar from "@ramonak/react-progress-bar";

import { useRoom } from "../../hooks/room";
import * as S from "./styles";
import handleHp from "../../utils/hp-color";

export default function Players() {
  const { room } = useRoom();

  return (
    <>
      <S.Container>
        <div style={{ padding: 20 }} className="section header">
          <h3>Players [{room && Object.values(room.players).length}]</h3>
        </div>

        <div className="section list">
          {room &&
            Object.values(room.players).map((player) => (
              <div className="player">
                <div className="player-info">
                  <h3>
                    {player.username}{" "}
                    {player.isAdmin && <RiShieldUserFill color="#FF8A00" />}
                  </h3>

                  <h4>{player.wins} wins</h4>
                </div>
                <ProgressBar
                  height="10"
                  labelSize="8px"
                  bgColor={handleHp(player.hp)}
                  baseBgColor="#232a35"
                  completed={player.hp}
                />
              </div>
            ))}
        </div>
      </S.Container>
    </>
  );
}
