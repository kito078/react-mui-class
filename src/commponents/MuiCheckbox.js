import React from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";

function MuiCheckbox() {
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox />}
        />
      </Box>
    </Box>
  );
}

export default MuiCheckbox;
