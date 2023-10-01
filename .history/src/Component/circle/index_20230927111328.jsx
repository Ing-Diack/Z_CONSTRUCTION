import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

function Circle({text, color}) {
    
    const circle =styled.h4`
        padding:20px;
        color:${color},
        border-radius:50%
    `

  return (
    <circle>{text}</circle>)
  
}

Circle.propTypes ={
    text:PropTypes.string,
    color:PropTypes.string
}
Circle.defaultProps={
    color:"black"
}

export default Circle