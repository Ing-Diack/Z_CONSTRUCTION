import React from 'react';
import styled from 'styled-components';
import Accueil from '../../Component/accueil';
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
  return (
    <main>
    <Section>
      <Accueil />
    </Section>
  
    <Footer />
    </main>
  )
}

export default Services