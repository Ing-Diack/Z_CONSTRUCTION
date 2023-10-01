import React from 'react';
import styled from 'styled-components';

function Describle({text}) {
    const Title  = styled.p`
    color:#566573;
    letter-spacing:0.1em;
    font-style:italic;
    font-size:0.9em;
    font-family:"fantasy";
    text-align: justify;
    
    `
  return (
    <Title> {text} </Title>
  )
}

export default Describle;