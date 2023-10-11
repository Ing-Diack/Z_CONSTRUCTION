import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import Title from '../Title';

function CardAccueilLeft({title,message,btnName,btnLink}) {
  return (
    <div className='col-12 col-md-8 py-5 service-left '>
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
</div>
  )
}

export default CardAccueilLeft;