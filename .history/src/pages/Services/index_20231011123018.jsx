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
import Button from '../../Component/button';


function Services() {
const backgrondColor={
backgroundColor: "#eeeeee",
paddingTop:"5em"
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
const ListService = styled.li`
  text-decoration:none;
  color:black;
  font-family:Times New Roman;
  padding:2px
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
        btnLink="#contacts"
        />
        <CardOfServicesList className='col-12 col-md-4'>
            <ul className='list-inline mt-5 '>
            <Title text="Ce que nous pouvons faire" color="#000000" size="25px"/>
            <Li className='list-item-inline mt-4'> <Img src={construction} alt="" /> CONSTRUCTION</Li>
            <Li className='list-item-inline'><Img src={formation} alt="" />Formation</Li>
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
        <div className="col-12 col-md-10 offset-md-2" style={backgrondColor}>
        <div className="row d-flex offset-md-1"> 
        <Title text="Construction,Conception,calcul Structure, Devis"/>
        <div className='col-12 col-md-10 mb-3 mt-2'>
            <Describle 
            text="Nous construisons tous types de bâtiments et de structures 
            à usage commercial, particulier. Il peut s'agir d'immeubles de bureaux,
            d'entrepôts ou de magasins/locaux commerciaux et  des maisons de toutes sortes. Nos services de
            de devis, de calcul de Structure, de conception et de construction commerciale comprennent, sans s’y limiter :" />
        </div>
         
             <div className="col-12 col-sm-6 col-md-4">
          <ul className='list-inline'>
            <ListService ><i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>  Préparation du chantier</ListService>
            <ListService ><i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>  Excavation et compactage </ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>   Fondations et semelles </ListService>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
         <ul className='list-inline'>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>   Maçonnerie</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>  Coffrage</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> Imperméabilisation</ListService>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
        <ul className='list-inline'>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> Tous travaux de béton</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> Travaux civils</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> Des structures en acier </ListService>
         
          </ul>
        </div>
        </div>
        <div className="row d-flex offest-md-2 mt-3">
        <div className="col-12 col-md-6 bg-secondary">
        
        </div>
        <div className="col-12 col-md-6 bg-dark p-4 text-center align-items-center">
            <Button text="About us" color="#dc3545" size="15px"  />
        </div>
        </div>
       
        </div>
      </div>
      <div className="row py-4 mt-5">
      <div className="col-12 col-md-10" style={backgrondColor}>
      <div className="row d-flex offset-md-1"> 
        <Title text="Formation et conseils"/>
        <div className='col-12 col-md-10 mb-3 mt-2'>
            <Describle 
            text="Nous avons des ingénieurs expérimentés dans notre entreprise, ils sont à la disposition
            de tout le monde( entrepriese, pariticulier) qui veut faire des formations sur l'une des notions
            de Génie civils ou sur l'un des logiciels . sans s’y limiter :" />
        </div>
         
             <div className="col-12 col-sm-6 col-md-4">
          <ul className='list-inline'>
            <ListService ><i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>  Robot</ListService>
            <ListService ><i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>  Autocad  </ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>   Archicad </ListService>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
         <ul className='list-inline'>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>   Revit</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i>  covadis</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> Etabs</ListService>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
        <ul className='list-inline'>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> scetiop</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> Travaux civils</ListService>
            <ListService> <i className="fa fa-check mx-2" aria-hidden="true" style={{color:"#dc3545"}}></i> Des structures en acier </ListService>
         
          </ul>
        </div>
        </div>
        <div className="row d-flex offest-md-2 mt-3">
        <div className="col-12 col-md-6 bg-secondary p-4 text-center align-items-center">
            <Button text="contactez-nous" color="#dc3545" size="15px"/>
        </div>
        <div className="col-12 col-md-6 bg-dark p-4 text-center align-items-center">
            <Button text="Nos projets" color="#dc3545" size="15px"/>
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