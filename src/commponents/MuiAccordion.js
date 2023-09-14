import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

function MuiAccordion() {
    const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <Accordion expanded = {expanded === 'panel1'}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography> Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo
            magnam laborum ea dolores, quae amet saepe veniam laboriosam fugiat!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded = {expanded === 'panel2'}>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography> Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo
            magnam laborum ea dolores, quae amet saepe veniam laboriosam fugiat!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded = {expanded === 'panel2'}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography> Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo
            magnam laborum ea dolores, quae amet saepe veniam laboriosam fugiat!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    +
  );
}

export default MuiAccordion;
