import React from "react";
import { GptMessages, MyMessages, TypingLoader } from "../../components";

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className=" grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}
          <GptMessages text={"Hola Bienvenido."} />
          <MyMessages text={"Hola Bienvenido."} />

          <TypingLoader className="fade-in" />
        </div>
      </div>
    </div>
  );
};
