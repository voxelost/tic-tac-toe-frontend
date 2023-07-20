import "../styles/components/App.css";

import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import ChatBox from "./chat/ChatBox";
import TicTacToeGame from "./game/TicTacToeGame";
import ServerStatus from "./server_meta/ServerStatus";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  // padding: theme.spacing(3),
  textAlign: "center",
  color: "#fff",
  minWidth: "100%",
  display: "flex",
}));

function App() {
  return (
    <div className="App">
      <Box className="MainContainer">
        <Grid container>
          <Grid className="MainColumn" container xs={3}>
            <Item>
              <ServerStatus />
            </Item>
          </Grid>
          <Grid className="MainColumn" container xs={6}>
            <Item>
              <TicTacToeGame />
            </Item>
          </Grid>
          <Grid className="MainColumn" container xs={3}>
            <Item>
              <ChatBox />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
