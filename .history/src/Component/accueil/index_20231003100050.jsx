import React from 'react';
import Title from '../Title';
import home from "./../../images/";
import Describle from '../describle';

function Accueil({backgroundImage,}) {
  return (
    <section className='section1'>
    <div className='container-fluid mt-5'>
    <div className='row'>
    <div className='col-12 col-md-8 py-5 service-left'>
      <div className="mt-5 text-center align-items-center">
        <Title text="Z_CONSTRUCTION" color="#ffffff" size="3em"/>
      </div>
      <div className="mt-3 text-center">
      </div>
      <div className="mt-5 text-center">
      <button className="btn btn-danger p-3"> VIEW OUR WORKS </button>
        <Describle text="boinjour" />
      </div>
    </div>
    <div className='col-md-4 py-5  col-12 service-right'>
      <Title text="Our Services" color="#000000" size="25px" className="mb-3"/>
      <ul className="list-inline">
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={home} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-6"> <Title text="Home"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={bridge} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-6"> <Title text="Bridge"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={residential} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-6"> <Title text="Residentials"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={plan} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-6 "> <Title text="Building plans"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
      </ul>

    </div>
    
    </div>
    
    </div>
    </section>
    
  )
}

export default Accueil