import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

function MuiSelect() {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Box width="450px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem> {/* Fixed the typo here */}
      </TextField>
    </Box>
  );
}

export default MuiSelect;

// import React, { useState } from "react";
// import { Box, TextField, MenuItem } from "@mui/material";

// function MuiSelect() {
//   const [country, setCountry] = useState("");

//   const handleChange = (e) => {
//     setCountry(e.target.value);
//   };

//   return (
//     <Box width="250px">
//       <TextField
//         label="Select Country"
//         select
//         value={country}
//         onChange={handleChange}
//       >
//         <MenuItem value="IN">India</MenuItem>
//         <MenuItem value="US">USA</MenuItem>
//         <MenuItem value="AU">Austraia</MenuItem>
//       </TextField>
//     </Box>
//   );
// }

// export default MuiSelect;
