import React from 'react';
import { FormControl,TextField } from '@mui/material';

function FormSend() {
  return (
 
    <FormControl>
    <TextField id="filled-basic" label="Nom" variant="filled" size='small' fullWidth="50px"
    style={{backgroundColor:"#ffffff"}}/>
  </FormControl>

  )
}

export default FormSend;