import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "mui/material";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const handleChange = (e) => {
    setChecked(e.target.value);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
}

export default MuiSwitch;
