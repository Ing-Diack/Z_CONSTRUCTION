import React from 'react';
import styled from 'styled-components';


function Circle({text,color}) {
    const circle = styled.h5`
    font-weight:bold;
    color:white;
    padding:20px;
    background-color:${color};
    border-radius:50%;
    text-align:center

`
  return (
   <circle> {text}</circle>
  )
}

export default Circle;