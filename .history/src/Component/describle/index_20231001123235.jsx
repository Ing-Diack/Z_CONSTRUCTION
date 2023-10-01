import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Describle({text,color,size}) {
    const title =styled.h3`
    color:${color};
    letter-spacing:0.1em;
    font-style:italic;
    font-size:${size};
    font-family:"fantasy";
    text-align: justify;
    `
    const Description = styled.h3`
    font-weight:bold;
    color:${color};
    letter-spacing:0.1em;
    font-style:italic;
    font-size:${size};
    font-family:"Times New Roman,sans-serif";
    }
`
    
  return (
    <Description> {text} </Description>
  )
}
Describle.propTypes={
  text:PropTypes.string,
  color:PropTypes.string,
  size:PropTypes.string,
}
Describle.defaultProps={
  color:"#566573",
  size:"0.9em",
}
export default Describle;