import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT"];

function MuiAutocomplete() {
  const [value, setValue] = useState(""); // Initialize value as an empty string
  const [skill, setSkill] = useState(""); // Initialize value as an empty string

  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  console.log(value);
  console.log(skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />} // Use a proper label
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />} // Use a proper label
        value={skill}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
}

export default MuiAutocomplete;

// you have learnt the group method so u can even implement it here
