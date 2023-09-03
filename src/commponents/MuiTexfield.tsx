import React from "react";
import { Stack, TextField } from "@mui/material";

function MuiTexfield() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" />
      </Stack>
    </Stack>
  );
}

export default MuiTexfield;
