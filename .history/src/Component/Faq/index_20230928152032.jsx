import React from 'react';
import Describle from '../describle';
import { Accordion, AccordionSummary,AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq({question,answer}) {
  return (
    <div className='mb-2'>
      <Accordion>
        <AccordionSummary 
        id="panel1-header"
        aria-controls="panel1-header"
        expandIcon={<ExpandMoreIcon/>}
        >
        <Typography> {question} </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography >
          <Describle text={answer} />
        </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
   )
}

export default Faq;