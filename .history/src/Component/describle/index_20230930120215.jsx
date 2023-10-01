import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Describle({text,color,size}) {
    const DescribleWrapper  = styled.p`
    color:${color};
    letter-spacing:0.1em;
    font-style:italic;
    font-size:${size};
    font-family:"fantasy";
    text-align: justify;
    
    `
  return (
    <DescribleWrapper> {text} </DescribleWrapper>
  )
}
Describle.prototype={
  text:PropTypes.string,
  color:PropTypes.string,
  size:PropTypes.string,
}
Describle.defaultProps={
  color:"#566573",
  size:"0.9em",
}
export default Describle;