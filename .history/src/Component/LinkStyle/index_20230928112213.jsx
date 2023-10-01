import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LinkStyle({ text, color}) {

    const LinkStyle = styled(Link)`
        
            padding:5px 10px;
            border:1px solid black;
            border-radius:3px;
            background-color:white;
            font-size:0.8em;
            font-family:Arial,Helvetica,sans-serif;
            color:black;
            text-decoration:none;
            &:hover{
                background-color:#dc3545;
                color:white;
                border:1px solid #dc3545;
            }

        `
  return (
    <div>LinkStyle</div>
  )
}

export default LinkStyle