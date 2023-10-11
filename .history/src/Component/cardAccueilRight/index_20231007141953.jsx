import React from 'react';
import PropTypes from "prop-types";
import Title from '../Title';
import CardAccueilWrapper from '../cardAccueilWrapper';

function CardAccueilRight({title,src1,src2,src3,src4,backgroundColor}) {
  return (
    <div className='col-md-4 py-5  col-12' style={{backgroundColor:`${backgroundColor}`}}>
    <Title text={title} color="#000000" size="25px" className="mb-5"/>
    <ul className="list-inline">
      <CardAccueilWrapper src={src1} title="Home" />
      <CardAccueilWrapper src={src2} title="Bridge" />
      <CardAccueilWrapper src={src3} title="Plan" />
      <CardAccueilWrapper src={src4} title="Residential" />
    </ul>

  </div>
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