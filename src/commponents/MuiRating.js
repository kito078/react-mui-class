import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";

function MuiRating() {
  const [value, setValue] = useState(null);

  console.log(value);

  const handleChange = () => {
    setValue(value);
  };
  return (
    <Stack>
      <Rating value={value} onChange={handleChange} />
    </Stack>
  );
}

export default MuiRating;
