import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import home from './../../images/home1.jpg'
import bridge from "./../../images/bridge.jpg";
import plan from "./../../images/plan.jpg";
import residential from "./../../images/residence2.jpg";
import Describle from '../describle';
import CardAccueilWrapper from '../cardAccueilWrapper';

function Accueil({title,message,btnName,btnLink,}) {
  return (

    <div className='container-fluid mt-5'>
    <div className='row'>
    <div className='col-12 col-md-8 py-5 service-left'>
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
            <Link to=""className="btn btn-danger p-3">wien </Link> 
             </div>
    </div>
    </div>
    
    <div className='col-md-4 py-5  col-12 service-right'>
      <Title text="Our Services" color="#000000" size="25px" className="mb-3"/>
      <ul className="list-inline">
        <CardAccueilWrapper src={home} title="Home" />
        <CardAccueilWrapper src={bridge} title="Bridge" />
        <CardAccueilWrapper src={plan} title="Plan" />
        <CardAccueilWrapper src={residential} title="Residential" />
      </ul>

    </div>
    
    </div>
    
    </div>

    
  )
}

export default Accueil