import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Describle({text,color,size,fontFamily,font,fontStyle}) {

   const DescribleWrapper = styled.h3`
    font-weight:bold;
    color:${color};
    font-size:${size};
    font-Family:${fontFamily};
    font-style:${fontStyle};
    @media screen and (max-width: 768px) {
      font-size: 1.1em;
    
    }
`
  return (
    <DescribleWrapper> {text} </DescribleWrapper>
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