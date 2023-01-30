import React, { useState, useEffect, useCallback } from "react";
import { ScrollView } from "@cantonjs/react-scroll-view";
import "../../styles/components/chat/ChatBox.css";
import Message from "./Message";
import TextBox from "./TextBox";
import Api from "../../utils/Api";
import GlobalStore from "../../utils/GlobalStore";

const ChatBox = () => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [messages, setMessages] = useState([]);
  const pushMessage = (message) => {
    let _messages = messages;
    _messages.push(message);
    setMessages(_messages);
    forceUpdate();
  };

  const [serverMessage, _setServerMessage] = useState("Happy Chatting!");

  const setServerMessage = (message) => {
    try {
      if (message.payload.current_player === GlobalStore.get("client_id")) {
        _setServerMessage("Your turn!");
      } else {
        _setServerMessage("Waiting for opponent");
      }
    } catch (err) {
      console.log(err);
      _setServerMessage("Happy chatting!");
    }
  };

  useEffect(() => {
    Api.registerCallback("chat", pushMessage);
    Api.registerCallback("game_state", setServerMessage);
  }, []);

  return (
    <>
      <div className="ChatBox">
        <Message origin="" payload={serverMessage} />
        <ScrollView onEndReached={console.log} style={{ height: "80vh" }}>
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </ScrollView>
        <TextBox />
      </div>
    </>
  );
};

export default ChatBox;
