import React from "react";
import { Button } from "@mui/material";

function MuiButton() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
    </div>
  );
}

export default MuiButton;
