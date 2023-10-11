import React from 'react';
import Title from '../Title';
import CardAccueilWrapper from '../cardAccueilWrapper';

function CardAccueilRight({src1,src2,src3,src4}) {
  return (
    <div className='col-md-4 py-5  col-12 service-right'>
    <Title text="Our Services" color="#000000" size="25px" className="mb-3"/>
    <ul className="list-inline">
      <CardAccueilWrapper src={src1} title="Home" />
      <CardAccueilWrapper src={src2} title="Bridge" />
      <CardAccueilWrapper src={src3} title="Plan" />
      <CardAccueilWrapper src={src4} title="Residential" />
    </ul>

  </div>
  )
}

export default CardAccueilRight;