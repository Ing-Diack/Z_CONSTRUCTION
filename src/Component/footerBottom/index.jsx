import React from 'react';
import { Link  } from 'react-router-dom';
import styled from 'styled-components';

function FooterBottom() {

const Section = styled.section`
  background-color: #101040;
  position-bottom:fixed;
  
  `
  return (
  <Section>  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className=" col-6   text-start" style={{
        fontFamily:"fantasy",
        fontSize:"14px",
        color:"#566573",
        fontStyle:"italic",
      }}>
        <i className="fa fa-copyright" aria-hidden="true"></i> Z_CONSTRUCTION
       
      </div>
      <div className="col-6 text-end">
         <Link className="nav-link " to="https://ing-diack.github.io/webSite/" target="_blank"
         style={{
          color:"#566573",
          fontStyle:"italic",
          fontSize:"14px",
         }}
         > 
            Developped By:ABKF_Tech</Link>
      </div>
    </div>
    </div>
    </Section>
   
  )
}

export default FooterBottom;