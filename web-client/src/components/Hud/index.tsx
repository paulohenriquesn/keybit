import { FaGithub } from "react-icons/fa";
import Head from "next/head";

import { useConnection } from "../../hooks/connection";

import * as S from "./styles";

export default function Hud() {
  const { ping } = useConnection();

  function getColor(ping: number) {
    if (ping >= 0 && ping <= 50) {
      return "green";
    }

    if (ping >= 51 && ping <= 120) {
      return "yellow";
    }

    return "red";
  }

  return (
    <>
      <Head>
        <title>keybit</title>
      </Head>
      <S.Ping color={getColor(ping)} id="ping">
        <div></div> {ping}
      </S.Ping>

      <S.Social>
        <a target="_blank" href="https://github.com/trindadematheus/keybit">
          <FaGithub color="white" size={26} />
        </a>
      </S.Social>
    </>
  );
}
