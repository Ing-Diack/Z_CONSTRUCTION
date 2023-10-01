import React from 'react';
import { FormControl,TextField } from '@mui/material';

function FormSend() {
  return (
    <div>
    <FormControl>
    <div className='row d-flex justify-content-around'>
    <div className='col-6'>
    <TextField id="filled-basic" label="Nom" variant="NOm" />
    </div>
    <div className='col-6'>
    <TextField id="filled-basic" label="Prénom" variant="Prenom" />
    </div>
    </div>
    
  </FormControl>
    </div>
  )
}

export default FormSend;