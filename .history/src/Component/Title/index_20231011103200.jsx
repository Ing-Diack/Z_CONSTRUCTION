import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Title({text,color,size, small_size,fontFamily, text_align}) {
    const Title = styled.h3`
    font-weight:bold;
    color:${color};
    font-size:${size};
    font-Family:${fontFamily};
    @media screen and (max-width: 768px) {
      font-size: ${small_size};
      text-align:${text_align};
    
    }
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
  text_align:PropTypes.string,
}
Title.defaultProps={
text:"",
text_align:"normal"
}


export default Title;