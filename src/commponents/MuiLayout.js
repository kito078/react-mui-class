import React from "react";

function MuiLayout() {
  return (
    <Box
      //   component="span"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        height: "100px",
        padding: "16px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      revolution
    </Box>
  );
}

export default MuiLayout;

//Box is a replacement of a div tag
