import bridge from "./../../images/bridge.jpg";
import './index.css';
import residential from "./../../images/residence2.jpg";
import home from "./../../images/home2.jpg";
import home2 from './../../images/home3.jpg';
import home3 from './../../images/home4.jpg';
import plan from "./../../images/plan.jpeg";
import Banierre from "../../Component/banierre";
import Title from "../../Component/Title";
import Button from "../../Component/button";
import Circle from "../../Component/circle";
import Describle from "../../Component/describle";
import Card from "../../Component/card";
import Faq from "../../Component/Faq";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CardAccueilRight from "../../Component/cardAccueilRight";
import CardAccueilLeft from "../../Component/cardAccueilLeft";
import Footer from "../../Component/footer";


function App() {
  return (
    <main>
    <section className="section1">
    <div className="container-fluid mt-5">
        <div className="row">
      <CardAccueilLeft
      title="Z_CONSTRUCTION"
      message="Une personne qui habite partout, n'habite nul part. faites votre habitat avec nous."
      btnLink="/projets"
      btnName="workflow"
      />
      <CardAccueilRight 
      title="Our Services"
      src1={home}
      src2={bridge}
      src3={residential}
      src4={plan}
      backgroundColor="#dc3545"
      />
      </div>
      
    </div>
  
    </section>
   
    <section>
    <Banierre text="Contactez-nous pour vos projets" btnText="Contact us" btnLink="#contacts"/>
    </section>
    <section>
      <div className="container-fluid py-5" style={{backgroundColor:"#eeeeee"}}>
      <div className="row">
      <div className="col-12 col-md-5">
       <img src={home3} alt="" className="d-block w-100 h-100"/>
      </div>

      <div className="col-12 col-md-6 p-4 offset-md-1 justify-content-center" >  

      <div className="mb-md-5 mb-3 mt-5"> 
        <Title  text="Les projets sont les promesses que l'immagination fait au coeur !" small_size="1.2em" />
      </div>

      <div className="row justify-content-around">
      <div className="col-12 col-md-6">
      
      <Describle
      text="Z_CONSTRUCTION est une entreprise de bâtiment et de construction.
      Nous sommes situés à sikasso la troisième région et la capitale économique du Mali.
      " /> 
      <Describle className="mx-3" text=" Nous construisons des maisons depuis 2010." />
        
      <Describle text="
      Z_CONSTRUCTION appartient à ZANGA YACOUBA KONE ingénieur en Génie Civil Structure.
      Nous possédons une vaste expérience dans les secteurs de la construction et de la sécurité.
      " />
      
      </div> 
      <div className="col-12 col-md-5 mt-4 mt-md-0 text-center ">
      <Describle text=" `` Soyez la prochaine personne à savourer notre savoir faire``" />
      <Link to="/projets">
      <Button text="Visitez la page de nos projets" color="black" size="0.8em"/>
      </Link>
          
      </div>
     
      </div>
      <div className="row mt-5">
      <div className="col-6">
      <Circle text="2 ans experiences" color="black" />
      </div>
      <div className="col-6">
      <Circle text="20 projets complets" color="#9e0817"/>
      </div>
      </div>

      </div>
    
      </div>
      </div>
    </section>
    
    <section className="text-center py-3 py-md-4  mt-3">
    <Title text="Les Derniers Projets" small_size="0.8em" />
    <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
    </section>
    
    <section className="mb-5">
    <div className="container bg-danger">
    <div className="row justify-content-between p-3 p-md-0">
    <div className="col-12 col-md-4 my-2 my-md-0">
      <Card 
      img={home2}
      title="maison1"
      describle="
      voici un projet de construction d'une maison de 4 chambres, un salon,
      une cuisine europeenne bien équipée.
      "
      link="http://"
      />
    </div>
    <div className="col-12 col-md-4 my-2 my-md-0">
      <Card 
      img={home3}
      title="maison2"
      describle="
      voici un projet de construction d'une maison de 4 chambres, un salon,
      une cuisine europeenne bien équipée.
      "
      link="http://"
      />
    </div>
    <div className="col-12 col-md-4 my-2 my-md-0">
      <Card 
      img={home}
      title="maison3"
      describle="
      voici un projet de construction d'une maison de 4 chambres, un salon,
      une cuisine europeenne bien équipée.
      "
      link="http://"
      />
    </div>
    
  
    </div>
    </div>
    </section>
    
    <section>
    <div className="container-fluid">
    <div className="row d-flex align-items-center py-3" style={{backgroundColor:"#101040"}}>
    <div className="col-12 col-md-4 mb-5 mb-md-0">
    <div className="row justify-content-center "> 
      <div className="col-12 col-md-8 py-4 text-center">
          <Title text="Nous avons beaucoup d'expérience, car nous construisons depuis 2010 !" color="white" small_size="1.2em"/>
        </div>
        <div className="col-10 col-md-8 mb-5">
          <Describle text="
        Parcourez l'un de nos projets récemment achevés
        ici sur la Garden Route en effectuant la visite virtuelle.
        " 
        link="http://"
        /> 
        </div>
        <div className="col-8">
          <HashLink to="#iframe">
            <Button text="Faites le tout sur Virtual Tour" color="#dc3545" />
          </HashLink>
              
        </div>
        
    </div>
    
      
    </div>
    <div className="col-12 col-md-8" id="iframe">
    <iframe width="100%" height="500" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src="https://kuula.co/share/collection/7JrKG?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&autop=8&autopalt=1&thumbs=1"></iframe>
    
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-5" style={{backgroundColor:"#eeeeee"}}>
    <div className="container">
    <div className="row">
    <div className="col-12 col-md-5">
        <div className="row justify-content-center "> 
        <div className="col-12 col-md-8 mb-4 text-center">
            <Title text="Construisons vos maisons de rêve ensemble." small_size="1.2em"/>
          </div>
          <div className="col-10 col-md-8 mb-4">
            <Describle text="
            Veuillez parcourir notre liste de 
            quelques questions fréquemment posées 
            sur notre entreprise et le secteur du bâtiment en général.
          " 
          /> 
          </div>
        </div>
    </div>
    <div className="col-12 col-md-7">
        <Faq question="Votre entreprise est-elle réconnue par l'Etat Malien ?" 
        answer="Oui , notre entrepirse est réconnue par l'Etat Maien ."
        />
        <Faq question="Pouvez-vous me faire un dévit complet du coût ?" 
        answer="Oui ................." />
        <Faq question="Pouvez-vous me donner des références, avec des numéros de contact ?" 
        answer="Oui, des réferences peuvent être fournies ." />
        <Faq question="Qu'est-ce qui vous différencie des autres constructeurs ?" 
        answer="Nous terminons nos projets dans les limites 
        du budget et toujours au-delà de la satisfaction de
        nos clients. Pendant que nous travaillons, nous avons 
        toujours des superviseurs qualifiés sur place tout au
        long du processus de construction afin que la qualité
        de notre travail soit garantie." />
        <Faq question="Puis-je choisir mon propre plombier et mon électricien ou les fournirez-vous ?" 
        answer="Nous fournirons, coordonnerons et gérerons tous 
        les entrepreneurs et sous-traitants nécessaires pour 
        terminer le travail. Tous nos entrepreneurs 
        sont certifiés et expérimentés" />
        
    </div>
    </div>
    </div>
    </section>
    
    <section className="" >
      <Footer />
    </section>
    
    
    </main>
 
   
  );
}

export default App;
