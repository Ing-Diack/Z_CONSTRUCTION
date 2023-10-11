import React from 'react';
import styled from 'styled-components';
import Accueil from '../../Component/accueil';
import Footer from '../../Component/footer';
import backgroundImage from "./../../images/service3.jpg";

function Services() {
const Section = styled.Section`
  background-image: url(${backgroundImage})
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