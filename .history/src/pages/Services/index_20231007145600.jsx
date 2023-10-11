import React from 'react';
import styled from 'styled-components';
import CardAccueilLeft from '../../Component/cardAccueilLeft';
import CardAccueilRight from '../../Component/cardAccueilRight';
import Footer from '../../Component/footer';
import backgroundImage from "./../../images/service1.jpg";

function Services() {
const Section = styled.section` 
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 100vw;
`
const CardOfServicesList = styled.div`
  background-Color:rgba(47, 79, 79, 0.774);
` 
  return (
    <main>
    <Section>
    <div className='contaner-fluid'>
    <div className='row'>
      <CardAccueilLeft
        title="Our Construction Services"
        message="Nous proposons une large gamme 
        de services de construction, depuis les 
        petits projets de rénovation jusqu'à la 
        construction complète depuis les fondations."
        btnName="Contactez-nous"
        btnLink="http://"
        />
        <CardOfServicesList className='col-12 col-md-4 py-5'>
            <ul className='list-inline'>
            <li className='list-item-inline'>className=""</li>
            <li className='list-item-inline'>className=""</li>
            <li className='list-item-inline'>className=""</li>
            <li className='list-item-inline'>className=""</li>
            </ul>
        </CardOfServicesList>
    </div>
    </div>
   
    </Section>
  
    <Footer />
    </main>
  )
}

export default Services