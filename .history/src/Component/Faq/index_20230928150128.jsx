import React from 'react';
import { Accordion, AccordionSummary,AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq({question, answer,headNumber}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary 
        id="panel1-header"
        arial-content="panel1-header"
        expandIcon={<ExpandMoreIcon/>}
        >
        <Typography> Votre entreprise est-elle reconnue par l'Etat Malien ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          Oui Z_CONSTRUCTION est réconnue par l'Etat Malien.
        </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
   )
}

export default Faq;