import React from "react";
import { Stack, Button } from "@mui/material";

function MuiButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" href="https://google.com">
        Text
      </Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
    </Stack>
  );
}

export default MuiButton;
