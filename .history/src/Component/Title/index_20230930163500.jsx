import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Title({text,color,size,fontFamily,fontStyle}) {
    const Title = styled.span`
    font-weight:bold;
    color:${color};
    font-size:${size};
    font-Family:${fontFamily};
    font-style:${fontStyle}
    
 

`
  return (
   <Title> {text}</Title>
  )
}
Title.propTypes={
  text:PropTypes.string,
  color:PropTypes.string,
  size:PropTypes.string,
  fontFamily:PropTypes.string,
  fontStyle:PropTypes.string,
}
Title.defaultProps={
color:'black',
size:"normal",
fontFamily:"sans-serif",
fontStyle:"normal",
}


export default Title;