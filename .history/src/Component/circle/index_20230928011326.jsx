import React from 'react';
import styled from 'styled-components';


function Circle({text,color}) {
    const Title = styled.h5`
    font-weight:bold;
    color:white;
    padding:30px;
    background-color:${color};
    border-radius:50%;
    text-align:center

`
  return (
   <Title> {text}</Title>
  )
}

export default Circle;