import { useRoom } from "../../hooks/room";
import * as S from "./styles";

export default function Tutorial() {
  const { me, startMatch } = useRoom();

  return (
    <>
      <S.Container>
        <div className="section">
          <h2>tutorial</h2>
        </div>

        <div className="section tutorial">
          <span>em breve</span>
        </div>

        {me?.isAdmin && (
          <button id="start" onClick={startMatch}>
            começar partida
          </button>
        )}
      </S.Container>
    </>
  );
}
