import React from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT"];

function MuiAutocomplete() {
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
      />
    </Stack>
  );
}

export default MuiAutocomplete;
