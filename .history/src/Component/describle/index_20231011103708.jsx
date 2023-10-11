import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Describle({text,color,size,text_align}) {
    const Description = styled.p`
    color:${color};
    letter-spacing:0.1em;
    font-style:italic;
    font-size:${size};
    width:100%;
    font-family:"Times New Roman,sans-serif";
    text-align: justify;
    @media screen and (max-width: 768px) {
      text-align: normal;
      letter-spacing:normal;
      text_align: ${text_align};
      
    }
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
  text_align:PropTypes.string,
}
Describle.defaultProps={
  color:"#566573",
  size:"0.9em",
  text:"bonjour",
  text_align:"normal"
  
}
export default Describle;