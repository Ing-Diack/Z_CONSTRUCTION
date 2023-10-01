import React from 'react';
import { FormControl,TextField } from '@mui/material';

function FormSend() {
  return (
 
    <FormControl>
    <div className='row justify-content-between'>
    <div className='col-6'>
    <TextField id="filled-basic" label="Nom" variant="filled" size='small'
    style={{backgroundColor:"#ffffff"}}/>
    </div>
    <div className='col-6'>
    <TextField id="filled-basic" label="Prenom" variant="filled" size="small" 
    style={{backgroundColor:"#ffffff"}}/>
    </div>
    <div className='row'>
      <div className='col-12'>
      <TextField id="filled-basic" label="Prenom" variant="filled" size="small" fullWidth={true}
      style={{backgroundColor:"#ffffff"}}/>
      </div>
    </div>
    

 
    </div>
    
  </FormControl>

  )
}

export default FormSend;