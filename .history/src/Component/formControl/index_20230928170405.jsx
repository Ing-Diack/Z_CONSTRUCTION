import React from 'react';
import { FormControl,TextField } from '@mui/material';

function FormSend() {
  return (
    <div>
    <FormControl>
    <div className='row d-flex justify-content-around'>
    <div className='col-6'>
    <TextField id="filled-basic" label="Nom" variant="filled" size='small'
    style={{backgroundColor:"#ffffff"}}/>
    </div>
    <div className='col-6'>
    <TextField id="filled-basic" label="Prenom" variant="filled" size="small" 
    style={{backgroundColor:"#ffffff"}}/>
    </div>
   <div className='col-12'></div>
 
    </div>
    
  </FormControl>
    </div>
  )
}

export default FormSend;