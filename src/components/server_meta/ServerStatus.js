import React, { useState, useEffect } from "react";
import "../../styles/components/server_meta/ServerStatus.css";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Api from "../../utils/Api";
import GlobalStore from "../../utils/GlobalStore";

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: "#475a61",
  textAlign: "center",
}));

const ServerStatus = () => {
  const [serverStatus, _setServerStatus] = useState({});

  const setServerStatus = (message) => {
    _setServerStatus(message.payload);
  };

  useEffect(() => {
    Api.registerCallback("game_server_meta", setServerStatus);
  }, []);

  const [gameStatus, _setGameStatus] = useState("");

  const setGameStatus = (message) => {
    console.log(message.payload);
    _setGameStatus(message.payload);
  };

  useEffect(() => {
    Api.registerCallback("game_status_update", setGameStatus);
  }, []);

  return (
    <StyledPaper className="ServerStatus" elevation={3}>
      <div className="ServerStatusRow">
        <p>Server info:</p>
      </div>

      <div className="ServerStatusRow">
        game_executors -&gt; {serverStatus.executors}
      </div>
      <div className="ServerStatusRow">
        active_games -&gt; {serverStatus.active_games}
      </div>
      <div className="ServerStatusRow">
        players_in_queue -&gt; {serverStatus.players_in_queue}
      </div>
      <div className="ServerStatusRow">
        games_in_queue -&gt; {serverStatus.games_in_queue}
      </div>
      <div className="ServerStatusRow">
        players_online -&gt; {serverStatus.players_online}
      </div>
      <div className="ServerStatusRow">
        my id -&gt; {GlobalStore.get("client_id")}
      </div>
      <div className="ServerStatusRow">game status -&gt; {gameStatus}</div>
    </StyledPaper>
  );
};

export default ServerStatus;
