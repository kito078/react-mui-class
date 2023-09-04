import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

function MuiTexfield() {
  const [value, setValue] = useState("");
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
        <TextField
          label="Form Input"
          size="small"
          required
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextField
          label="Passowrd"
          type="password"
          helperText="Do not share your passwoerd with anyone"
          disabled
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTexfield;
