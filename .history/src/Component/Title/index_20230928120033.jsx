import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Title({text,color}) {
    const Title = styled.h3`
    font-weight:bold;
    color:${color};
    
 

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
color:'black'
}


export default Title;