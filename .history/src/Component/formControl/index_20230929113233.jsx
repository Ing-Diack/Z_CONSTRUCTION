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
   <div> 
   <TextField id="filled-basic" label="Prenom"  size="small" 
    style={{backgroundColor:"#ffffff"}}/>
   </div>
 
    </div>
    
  </FormControl>

  )
}

export default FormSend;