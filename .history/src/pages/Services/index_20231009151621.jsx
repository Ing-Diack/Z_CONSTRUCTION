import React from 'react';
import styled from 'styled-components';
import CardAccueilLeft from '../../Component/cardAccueilLeft';
import Title from '../../Component/Title';
import Footer from '../../Component/footer';
import backgroundImage from "./../../images/service1.jpg";

function Services() {
const Section = styled.section`
  position:absolute;

  margin-top:40px;
  
`
const CardOfServicesList = styled.div`
  background-Color:rgba(47, 79, 79, 0.774);
` 
const Li = styled.li`
    font-size:1.1em;
    font-weight:600;
    color:#ffffff;
    border:2px solid #dc3545;
    border-radius:20px;
    padding:5px;
    margin-top:15px;
    width:100%;
    width:250px;
    background-color:blue;

`
  return (
    <main>
    <Section>
    <div className='contaner-fluid'>
    <div className='row '>
      <CardAccueilLeft
        title="Our Construction Services"
        message="Nous proposons une large gamme 
        de services de construction, depuis les 
        petits projets de rénovation jusqu'à la 
        construction complète depuis les fondations."
        btnName="Contactez-nous"
        btnLink="http://"
        />
      
    </div>
    </div>
   
    </Section>
  
    <Footer />
    </main>
  )
}

export default Services