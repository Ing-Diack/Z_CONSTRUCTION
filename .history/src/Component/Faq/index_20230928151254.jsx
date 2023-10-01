import React from 'react';
import { Accordion, AccordionSummary,AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq() {
  return (
    <div>
      <Accordion>
        <AccordionSummary 
        id="panel1-header"
        aria-controls="panel1-header"
        expandIcon={<ExpandMoreIcon/>}
        >
        <Typography> Votre entreprise est-elle reconnue par l'Etat Malien ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography 
          variant='h6'
        >
          Oui Z_CONSTRUCTION est réconnue par l'Etat Malien.
        </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
   )
}

export default Faq;