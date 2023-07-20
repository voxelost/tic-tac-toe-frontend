import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Api from "../../utils/Api";

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: "#475a61",
  textAlign: "center",
}));

const GridSquare = ({ col, row }) => {
  const putChar = () => {
    Api.ticTacToeGameApi.putChar(row, col);
  };

  const [boardChar, _setBoardChar] = useState(" ");

  const setBoardChar = (message) => {
    _setBoardChar(message.payload.board.Chars[col][row]);
  };

  useEffect(() => {
    Api.registerCallback("game_state", setBoardChar);
  }, []);

  return (
    <StyledPaper
      className="GridSquare"
      elevation={0}
      variant="outlined"
      square
      onClick={putChar}
    >
      {
        {
          X: <CloseIcon className="SVGIcon" />,
          O: <PanoramaFishEyeIcon className="SVGIcon" />,
        }[boardChar]
      }
    </StyledPaper>
  );
};

export default GridSquare;
