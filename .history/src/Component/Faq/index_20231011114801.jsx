import React from 'react';
import styled from 'styled-components';
import Describle from '../describle';
import { Accordion, AccordionSummary,AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq({question,answer}) {

const TypographyStyle=styled(Typography)`
  font-size:1.2em
`
  return (
    <div className='mb-2 py-2'>
      <Accordion>
        <AccordionSummary 
        id="panel1-header"
        aria-controls="panel1-header"
        expandIcon={<ExpandMoreIcon  
        style={{color:"#dc3545"}}
        />}
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