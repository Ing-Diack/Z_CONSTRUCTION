import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Describle({text,color,size}) {
    const Description = styled.p`
    color:${color};
    letter-spacing:0.1em;
    font-style:italic;
    font-size:${size};
    font-family:"Times New Roman,sans-serif";
    text-align: justify;
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
  text:"bonjour"
}
export default Describle;