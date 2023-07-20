import "../../styles/components/chat/ChatBox.css";
import React from "react";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: "#475a61",
  textAlign: "center",
}));

const Message = ({ id, payload, time, origin }) => {
  const avatar = createAvatar(botttsNeutral, { seed: origin.id });

  return (
    <StyledPaper variant="outlined" className="Message">
      <Box>
        <Grid container sx={{ flexShrink: 1 }}>
          <Grid container xs={3}>
            <Avatar
              alt={origin.id}
              src={avatar.toDataUriSync()}
              className="MessageAvatar"
            />
          </Grid>
          <Grid container xs={9}>
            <div className="TextContainer">
              <div>{payload}</div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </StyledPaper>
  );
};

export default Message;
