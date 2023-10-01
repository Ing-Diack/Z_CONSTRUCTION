import React from 'react';
import styled from 'styled-components';


function Title({text}) {
    const Title = styled.h3`
    font-weight:bold;
    color:black;
    
 

`
  return (
   <Title> {text}</Title>
  )
}

export default Title;