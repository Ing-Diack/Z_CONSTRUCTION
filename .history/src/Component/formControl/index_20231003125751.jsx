import React from 'react';
import { FormControl,TextField, Button } from '@mui/material';
import { TextareaAutosize  } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import {  buttonClasses } from '@mui/base/Button';
import Stack from '@mui/material/Stack';


function FormSend() {

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };
    

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  
  const CustomButton = styled(Button)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonClasses.focusVisible} {
      box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
    `,
  );



  return (
 
    <FormControl>
    <div className='row justify-content-between mb-4'>
    <div className='col-12 col-md-6 mb-md-0 mb-4'>
    <TextField id="filled-basic" label="Nom" variant="filled" size='small'
    style={{backgroundColor:"#ffffff"}}
    className='col-12 col-md-12'
    />
    </div>
    <div className='col-12 col-md-6'>
    <TextField id="filled-basic" label="Prenom" variant="filled" size="small" 
    style={{backgroundColor:"#ffffff"}}
    className='col-12 col-md-12'
    />
    </div>
    </div>
 <div className='row '>
 <div className='col-12 mb-4'>
 <TextField id="filled-basic" label="E-mail" variant="filled" size="small" fullWidth={true}  placeholder="axemple@gmail.com"
 style={{backgroundColor:"#ffffff"}}/>
 </div>
 <div className='col-12'>
 <StyledTextarea
 className='col-12'
 aria-label="minimum height"
 minRows={2}
 fullWidth={true}
 placeholder="Message"
/>
 </div>
 <div className="row col-12 justify-content-end bg-dark">

    <Stack spacing={2} direction="row">
    <CustomButton>Envoyer</CustomButton>
  </Stack>
 </div>
</div>

    
  </FormControl>

  )
}

export default FormSend;