import React from "react";
import { Stack, ImageList, ImageListItem } from "@mui/material";

function MuiImagelist() {
  const itemData = [
    {
      img: "https://fishaways.co.za/_next/image?url=%2Fimages%2Fmenu%2Fbetter_for_sharing.png&w=2048&q=75",
      title: "Burger",
    },
    {
      img: "https://fishaways.co.za/_next/image?url=%2Fimages%2Fmenu%2Fbetter_for_sharing.png&w=2048&q=75",
      title: "Burger",
    },
    {
      img: "https://fishaways.co.za/_next/image?url=%2Fimages%2Fmenu%2Fbetter_for_sharing.png&w=2048&q=75",
      title: "Burger",
    },
  ];
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} column={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt="" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

export default MuiImagelist;
