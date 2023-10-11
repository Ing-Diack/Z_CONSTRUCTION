import React from 'react';
import styled from 'styled-components';
import CardAccueilLeft from '../../Component/cardAccueilLeft';
import Describle from '../../Component/describle';
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
import Banierre from '../../Component/banierre';


function Services() {
const backgrondColor={
backgroundColor: "#eeeeee"
}

const Section = styled.section` 
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 100vw;
  margin-top:40px;
`
const CardOfServicesList = styled.div`
  background-Color:rgba(47, 79, 79, 0.9);
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
    <section>
    <Banierre text="Prenez contact avec Z_CONSTRUCTION" btnText="contactez-nous"  />
    </section>
    <section>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-2 py-5" style={backgrondColor}>
        <div className="row d-flex offset-md-1">
        <div className='col-12 col-md-10'>
         <Title text="Construction,Conception,calcul Structure, Devis"/>
            <Describle 
            text="Nous construisons tous types de bâtiments et de structures 
            à usage commercial. Il peut s'agir d'immeubles de bureaux,
            d'entrepôts ou de magasins/locaux commerciaux. Nos services de
            construction commerciale comprennent, sans s’y limiter :" />
        </div>
         
             <div className="col-3">
          <ul>
            <li>liste </li>
            <li>liste </li>
            <li>liste </li>
            <li>liste </li>
          </ul>
        </div>
        <div className="col-3">
         <ul>
            <li>liste </li>
            <li>liste </li>
            <li>liste </li>
            <li>liste </li>
          </ul>
        </div>
        <div className="col-3">
        <ul>
            <li>liste </li>
            <li>liste </li>
            <li>liste </li>
            <li>liste </li>
          </ul>
        </div>
        </div>
       
        </div>
      </div>
    </div>
    </section>
    <section>
    <Footer />
    </section>
    
    </main>
  )
}

export default Services