import React from 'react';
import styled from 'styled-components';


function Circle({text,color}) {
    const CircleWrapper = styled.h5`
    font-weight:bold;
    color:white;
    padding:30px;
    background-color:${color};
    border-radius:50%;
    text-align:center;
    @media screen and (max-width: 768px) {
    font-size:1.2em;
    padding:10px;
    }

`
  return (
   <CircleWrapper> {text}</CircleWrapper>
  )
}

export default Circle;