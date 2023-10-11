import React from 'react';
import Title from '../Title';

function CardAccueilWrapper({src, title}) {
  return (
    <li className="list-item-inline mb-3">
    <div className=" row align-items-center">
    <div className="col-3">
      <img src={src} alt="home" width={80} height={80} className="rounded-circle" /> 
    </div>
    <div className="col-6"> <Title text={title}  color="#ffffff"  size="20px"/>
      </div>
    </div>
</li>
  )
}

export default CardAccueilWrapper;