import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Describle from '../describle';
import { HashLink } from 'react-router-hash-link';

function CardAccueilLeft({title,message,btnName,btnLink}) {
  const DivWrapper =styled.div`
   background-color:rgba(47, 79, 79, 0.9);
  
  `
  const LinkStyle=styled(HashLink)`
    text-decoration:none;
    font-family:Times new roman,sans-serif;
    background-color:#dc3545;
    border-radius:5px;
    letter-spacing:0.3em;
    padding:15px;
    font-weight:600;
    color:#ffffff;
    @media screen and (max-width: 768px){
      font-size:1.2em;
      letter-spacing:0.1em;
    }
    &:hover{
      background-color:#ffffff;
      color:#dc3545;
    }
    
  `

  return (
    <DivWrapper className='col-12 col-md-8 py-5'>
    <div className='row d-bloc justify-content-center'>
    <div className="col-12 mt-5 text-center align-items-center">
        <Title text={title} color="#ffffff" size="3em" small_size="2.2em"/>
      </div>
      <div className="col-10 col-md-6 mt-5">
          <Describle text={message} color="#ffffff" size="1em" text_align="center"/>
      </div> 
      <div className="col-12 mt-5 text-center">
        <LinkStyle to={btnLink}>{btnName} </LinkStyle> 
         </div>
</div>
</DivWrapper>
  )
}

export default CardAccueilLeft;