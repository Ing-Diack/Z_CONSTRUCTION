import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Title({text,color,size}) {
    const Title = styled.h3`
    font-weight:bold;
    color:${color};
    font-size:${size};
    
 

`
  return (
   <Title> {text}</Title>
  )
}
Title.propTypes={
  text:PropTypes.string,
  color:PropTypes.string
}
Title.defaultProps={
color:'black',
size:"normal"
}


export default Title;