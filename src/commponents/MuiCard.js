import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function MuiCard() {
  return (
    <Box width="300px">
      <Card>
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
