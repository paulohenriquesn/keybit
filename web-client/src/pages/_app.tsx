import { AppProps } from "next/app";
import { ToastContainer } from "react-toast";

import GlobalStyles from "../styles/global";
import "../styles/font.css";

import Hud from "../components/Hud";
import { ConnectionProvider } from "../hooks/connection";
import { RoomProvider } from "../hooks/room";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConnectionProvider>
        <RoomProvider>
          <Hud />
          <Component {...pageProps} />
        </RoomProvider>
      </ConnectionProvider>

      <ToastContainer delay={3000} position="bottom-center" />
      <GlobalStyles />
    </>
  );
}
