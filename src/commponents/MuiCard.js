import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://fishaways.co.za/_next/image?url=%2Fimages%2Fmenu%2Fbetter_for_sharing.png&w=2048&q=75"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            facere dolore est quia dolorum ipsum accusantium voluptatibus libero
            excepturi labore!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"> Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
