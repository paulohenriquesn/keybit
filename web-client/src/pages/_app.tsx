import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

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

      <Toaster position="bottom-center" reverseOrder={false} />
      <GlobalStyles />
    </>
  );
}
