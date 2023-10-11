import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Title from '../Title';
import CardAccueilWrapper from '../cardAccueilWrapper';

function CardAccueilRight({title,src1,src2,src3,src4,backgroundColor}) {

  const DivWrapper =styled.div`
    background-color:${backgroundColor};
   
  `
  return (
    <DivWrapper className='col-md-4 col-12 py-5 text-center'>
    
    <Title text={title} color="#000000" size="25px"/>
      <ul className="list-inline mt-3">
        <CardAccueilWrapper src={src1} title="Home" />
        <CardAccueilWrapper src={src2} title="Bridge" />
        <CardAccueilWrapper src={src3} title="Plan" />
        <CardAccueilWrapper src={src4} title="Residential" /> 
      </ul>
    </DivWrapper>
  )
}
CardAccueilRight.propTypes={
  src1: PropTypes.string,
  src2: PropTypes.string,
  src3: PropTypes.string,
  src4: PropTypes.string,
  backgroundColor: PropTypes.string
}

CardAccueilRight.defaultProps={
 src1: "",
  src2: "",
  src3: "",
  src4: "",
  backgroundColor: ""
}

export default CardAccueilRight;