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
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      />
    </Stack>
  );
}

export default MuiAutocomplete;

// import React, { useState } from "react";
// import { Stack, Autocomplete, TextField } from "@mui/material";

// const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT"];

// function MuiAutocomplete() {
//   const [value, setValue] = useState(null);

//   console.log(value);

//   return (
//     <Stack spacing={2} width="250px">
//       <Autocomplete
//         options={skills}
//         renderInput={(params) => <TextField {...params} label="skills" />}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </Stack>
//   );
// }

// export default MuiAutocomplete;
