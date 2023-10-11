import React from 'react';
import Button from '../button';
import Title from '../Title';


function Banierre({text,btnText}) {


  return (

    <div className='container'>
    <div className='row py-md-5 py-3 mt-md-0 mt-2 align-items-center '>
    <div className='col-8'>
     <Title text={text} small_size="1.1em"/>
    </div>
    <div className='col-4 d-flex justify-content-end'>
       <Button text={btnText} />
    </div>
    </div>
    </div>
  )
}

export default Banierre;