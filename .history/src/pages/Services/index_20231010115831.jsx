import React from 'react';
import styled from 'styled-components';
import CardAccueilLeft from '../../Component/cardAccueilLeft';
import Title from '../../Component/Title';
import Footer from '../../Component/footer';
import backgroundImage from "./../../images/service1.jpg";
import construction from "./../../images/construction.png";
import conception from "./../../images/conception.png";
import conseil from "./../../images/conseil.png";
import formation from "./../../images/formation.png";
import devis from "./../../images/devis.png";
import calculStructure from "./../../images/calculStructure.png";
import gestionProjet from "./../../images/gestionProjet.png";


function Services() {
const Section = styled.section` 
  position:absolute;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 100vw;
  margin-top:40px;
`
const CardOfServicesList = styled.div`
  background-Color:rgba(47, 79, 79, 0.774);
` 
const Li = styled.li`
    font-size:1.1em;
    font-weight:600;
    color:rgba(255, 255,255);
    margin:auto;
    margin-top:15px;
    width:100%;
    width:300px;
`
const Img = styled.img`
  width:50px;
  height:50px;
  margin-right:10px;
  color:black;
  
`
  return (
    <main>
    <Section>
    <div className='container-fluid'>
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
        <CardOfServicesList className='col-12 col-md-4 py-5'>
            <ul className='list-inline mt-5 '>
            <Title text="Ce que nous pouvons faire" color="#000000" size="25px"/>
            <Li className='list-item-inline mt-4'>
            <Img src={construction} alt="" />
            CONSTRUCTION
            </Li>
            <Li className='list-item-inline'>
            <Img src={formation} alt="" />
            Formation
            </Li>
            <Li className='list-item-inline'>  <Img src={conseil} alt="" /> Conseils </Li>
            <Li className='list-item-inline'> <Img src={conception} alt="" /> Conception </Li>
            <Li className='list-item-inline'> <Img src={calculStructure} alt="" />  Calcul de Structure </Li>
            <Li className='list-item-inline'> <Img src={gestionProjet} alt="" /> Gestion de Projet </Li>
            <Li className='list-item-inline'> <Img src={devis} alt="" /> Devis </Li>
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