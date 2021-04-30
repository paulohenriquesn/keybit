import { addSeconds, differenceInSeconds, format, startOfDay } from "date-fns";
import { useEffect, useState, useRef } from "react";
import { GiDeathSkull } from "react-icons/gi";

import { useRoom } from "../../hooks/room";
import alphabet from "../../utils/alphabet";
import handleHp from "../../utils/hp-color";
import * as S from "./styles";

export default function Match() {
  const [key, setKey] = useState("");

  const { attackEnemy, me, room } = useRoom();

  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef) {
      showKey();
      containerRef.current?.focus();
    }
  }, [containerRef]);

  function showKey() {
    const newKey = alphabet[Math.floor(Math.random() * 26)];

    setKey(newKey);
  }

  function handleKey(e: any) {
    if (e.key.toLowerCase() === key) {
      attackEnemy();
      showKey();
      counterRef?.current?.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.2)" }],
        {
          duration: 150,
        }
      );
    } else {
      //resetCombo();
    }
  }

  function handleTime() {
    if (room && me) {
      const diff = differenceInSeconds(me?.deathIn, room.startedIn);
      const add = addSeconds(startOfDay(new Date()), diff);

      return format(add, "mm:ss");
    }

    return "";
  }

  return (
    <>
      {me?.isAlive ? (
        <S.Container
          hp={handleHp(me.hp)}
          ref={containerRef}
          tabIndex={1}
          onKeyDown={handleKey}
        >
          <div id="counter" ref={counterRef}>
            {key}
          </div>

          <div className="bottom">
            <div className="attribute">
              <span>vida</span>

              <div className="value">{me.hp}</div>
            </div>
            <div className="attribute">
              <span>combo</span>

              <div className="value combo">{me.combo}</div>
            </div>
          </div>
        </S.Container>
      ) : (
        <S.Container hp="#721BE1">
          <GiDeathSkull color="#721BE1" size={80} />
          <h2>Você foi eliminado</h2>
          <h4>{handleTime()}</h4>
        </S.Container>
      )}
    </>
  );
}
