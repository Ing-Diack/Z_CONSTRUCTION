import React from 'react';
import { FormControl,TextField } from '@mui/material';

function FormSend() {
  return (
    <div>
    <FormControl>
    <div className='row d-flex justify-content-around'>
    <div className='col-6'>
    <TextField id="filled-basic" label="Nom" variant="filled"
    style={{backgroundColor:"#ffffff"}}/>
    </div>
    <div className='col-6'>
    <TextField id="filled-basic" label="Prenom" variant="filled" 
    style={{backgroundColor:"#ffffff"}}/>
    </div>
    </div>
    <div className='row'>
    <div className='col-12'>
    <TextField id="filled-basic" label="E-mail" variant="filled" 
    style={{backgroundColor:"#ffffff"}}/>
    </div>
    </div>
    
  </FormControl>
    </div>
  )
}

export default FormSend;