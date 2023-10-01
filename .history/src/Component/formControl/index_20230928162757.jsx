import React from 'react';
import { FormControl, InputLabel,Input } from '@mui/material';

function FormSend() {
  return (
    <div>
    <FormControl>
    <InputLabel htmlFor="my-input">Email address</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" 
    style={{backgroundColor:"#ffffff",
           padding:"10px"
    
    }}
    />
  </FormControl>
    </div>
  )
}

export default FormSend;