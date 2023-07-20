import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Api from "../../utils/Api";

const TextBox = () => {
  const [chatText, setChatText] = useState("");

  const _setChatText = (event) => {
    const _value = event.target.value;
    return setChatText(_value);
  };

  const sendMessage = () => {
    if (chatText.length < 1) {
      return;
    }

    Api.sendChatMessage(chatText);
    setChatText("");
  };

  return (
    <div className="TextBox">
      <TextField
        className="TextBoxTextField"
        variant="outlined"
        sx={{ input: { color: "white" } }}
        value={chatText}
        onChange={_setChatText}
        onKeyDown={(k) => {
          if (k.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <IconButton
        className="TextBoxButton"
        variant="contained"
        onClick={sendMessage}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default TextBox;
