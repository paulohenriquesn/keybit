import { useEffect, useState, useRef } from "react";
import { format } from "date-fns";
import { toast } from "react-toast";
import { useRouter } from "next/router";

import { useRoom } from "../../hooks/room";
import * as S from "./styles";
import copy from "copy-to-clipboard";

export default function Chat() {
  const [message, setMessage] = useState("");

  const { sendMessage, messages, me } = useRoom();
  const router = useRouter();
  const chatRef = useRef(null);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    chatRef?.current?.scroll({
      // @ts-ignore: Unreachable code error
      top: chatRef?.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function handleSendMessage(e: any) {
    e.preventDefault();

    if (message === "") return;

    sendMessage(message);
    setMessage("");
  }

  function handleInvite() {
    copy(`http://keybit.wemakean.com${router.asPath}`);

    toast("🥳 link copiado com sucesso", {
      backgroundColor: "#0f1317",
      color: "#DDE2E8",
    });
  }

  return (
    <>
      <S.Container>
        {me?.isAdmin && (
          <div className="invite">
            <button onClick={handleInvite}>copiar url de convite</button>
          </div>
        )}

        <div className="section header">
          <h3>Chat</h3>
        </div>

        <div ref={chatRef} className="section chat">
          {messages.map((msg, key) => (
            <S.Message key={key} isMe={msg.isMe}>
              <span>[{format(msg.date, "HH:mm")}]</span>
              <b>{msg.player.username}:</b>
              {msg.message}
            </S.Message>
          ))}
        </div>

        <form onSubmit={handleSendMessage}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="digite alguma mensagem"
            maxLength={50}
          />
        </form>
      </S.Container>
    </>
  );
}
