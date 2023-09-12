import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";

function MuiRating() {
  const [value, setValue] = useState(3);

  console.log(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Stack>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
}

export default MuiRating;
