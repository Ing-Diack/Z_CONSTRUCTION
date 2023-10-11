import React from 'react';
import Button from '../button';
import Title from '../Title';
import { HashLink } from 'react-router-hash-link';

function Banierre({text,btnText,btnLink}) {


  return (

    <div className='container'>
    <div className='row py-md-5 py-3 mt-md-0 mt-2 align-items-center '>
    <div className='col-8'>
     <Title text={text} small_size="0.8em"/>
    </div>
    <div className='col-4 d-flex justify-content-end'>
    <HashLink to={btnLink}>
      <Button text={btnText} />
    </HashLink>
     
    </div>
    </div>
    </div>
  )
}

export default Banierre;