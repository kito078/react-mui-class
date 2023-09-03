import React from "react";
import { Stack, TextField } from "@mui/material";

function MuiTexfield() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" size="small" required />
        <TextField
          label="Passowrd"
          type="password"
          helperText="Do not share your passwoerd with anyone"
          disabled
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
    </Stack>
  );
}

export default MuiTexfield;
