import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../Title';

function CardAccueilLeft({title,message,btnName,btnLink}) {
  const DivWrapper =styled.div`
   background-color:rgba(47, 79, 79, 0.774);
  `

  return (
    <DivWrapper className='col-12 col-md-8 py-5 service-left '>
    <div className='row d-bloc justify-content-center'>
    <div className="col-12 mt-5 text-center align-items-center">
        <Title text={title} color="#ffffff" size="3em"/>
      </div>
      <div className="col-12 mt-3 text-center">
          <p className='subText-Z-Const'>
          {message}
          </p>
      </div> 
      <div className="col-12 mt-5 text-center">
        <Link to={btnLink}  className="btn btn-danger p-3">{btnName} </Link> 
         </div>
</div>
</DivWrapper>
  )
}

export default CardAccueilLeft;