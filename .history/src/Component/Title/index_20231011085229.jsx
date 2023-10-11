import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Title({text,color,size,fontFamily,fontStyle}) {
    const Title = styled.h3`
    font-weight:bold;
    color:${color};
    font-size:${size};
    font-Family:${fontFamily};
    font-style:${fontStyle};
    @media screen and (max-width: 768px) {
      font-size: calc(100% - 5px);
    
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
  fontStyle:PropTypes.string,
}
Title.defaultProps={
text:""
}


export default Title;