import { Button, ButtonGroup, Grid } from "@mui/material";
import React from "react";
import "../../styles/components/game/TicTacToeGame.css";
import Api from "../../utils/Api";
import GridSquare from "./GridSquare";
import styled from "@emotion/styled";

const ColorButton = styled(Button)(() => ({
  color: "black",
  backgroundColor: "#475a61",
  "&:hover": {
    backgroundColor: "#36454a",
  },
}));

const TicTacToeGame = () => {
  return (
    <>
      <Grid container xs={{ display: "flex" }}>
        <Grid className="GameContainer" container item xs={12}>
          {[...Array(3).keys()].map((row_no) => (
            <Grid className="BoardPart" key={row_no}>
              {[...Array(3).keys()].map((col_no) => (
                <GridSquare
                  key={`${col_no}${row_no}`}
                  row={col_no}
                  col={row_no}
                />
              ))}
            </Grid>
          ))}

          <Grid xs={12}>
            <ButtonGroup aria-label="button group">
              <ColorButton
                variant="contained"
                onClick={Api.gameServerApi.registerForClientQueue}
              >
                Search for game
              </ColorButton>
              <ColorButton
                variant="contained"
                onClick={Api.gameServerApi.unregisterFromClientQueue}
              >
                Cancel game search
              </ColorButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TicTacToeGame;
