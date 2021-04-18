import { useRoom } from "../../hooks/room";
import * as S from "./styles";

export default function Counter() {
  const { counter } = useRoom();

  return (
    <>
      <S.Container>
        <h2>a partida vai começar em</h2>

        <div id="counter">{counter}</div>
      </S.Container>
    </>
  );
}
