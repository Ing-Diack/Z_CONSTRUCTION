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
import FormSend from "../../Component/formControl";
import { Link } from "react-router-dom";



function App() {
  return (
    <main>
    <section className='section1'>
    <div className='container'>
    <div className='row'>
    <div className='col-12 col-md-8 py-5 service-left'>
      <div className=" text-center align-items-center">
        <span className="vertical-line"></span>
        <span className="text-z-construction align-items-center">Z_CONSTRUCTION </span>
      </div>
      <div className="mt-3 text-center">
        <span className="subText-Z-Const"> Celui qui habite partout, n'habite nulle part.  <br/> Faites votre habitat avec nous</span>
      </div>
      <div className="mt-5 text-center">
      <button className="btn btn-danger p-3"> VIEW OUR WORKS </button>
      
      </div>
    </div>
    <div className='col-md-4 py-5 col-12 service-right'>
      <Title text="Our Services" color="#000000" size="25px" className="mb-3"/>
      <ul className="list-inline">
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={home} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-3"> <Title text="Home"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={bridge} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-3"> <Title text="Bridge"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={residential} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-3"> <Title text="Residentials"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
        <li className="list-item-inline mb-3">
            <div className=" row align-items-center">
            <div className="col-3">
              <img src={plan} alt="home" width={80} height={80} className="rounded-circle" /> 
            </div>
            <div className="col-6"> <Title text="Building plans"  color="#ffffff"  size="20px"/>
              </div>
            </div>
        </li>
      </ul>

    </div>
    
    </div>
    
    </div>
    </section>
    <section>
    <Banierre text="Contactez-nous pour vos projets" btnText="Contact us"/>
    </section>
    <section>
      <div className="container-fluid py-5" style={{backgroundColor:"#eeeeee"}}>
      <div className="row">
      <div className="col-12 col-md-5 ">
       <img src={home3} alt="" className="d-block w-100 h-100"/>
      </div>

      <div className="col-12 col-md-6 offset-md-1 justify-content-center" >  

      <div className="text-center mb-5"> 
        <Title  text="Les projets sont les promesses que l'immagination fait au coeur !" />
      </div>

      <div className="row justify-content-around">
      <div className="col-6 describle">
      
      <Describle text="
      Z_CONSTRUCTION est une entreprise de bâtiment et de construction.
      Nous sommes situés à sikasso la troisième région et la capitale économique du Mali.
      " /> 
      <Describle text=" Nous construisons des maisons depuis 2010." />
        
      <Describle text="
      Z_CONSTRUCTION appartient à ZANGA YACOUBA KONE ingénieur en Génie Civil Structure.
      Nous possédons une vaste expérience dans les secteurs de la construction et de la sécurité.
      " />
      
      </div> 
      <div className="col-5 describle">
      <Describle text=" `` Soyez la prochaine personne à savourer notre savoir faire``" />
          <Button text="Visitez la page de nos projets" color="black" />
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
    
    <section className="text-center py-5">
    <Title text="Les Derniers Projets" />
    </section>
    
    <section className="mb-5">
    <div className="container">
    <div className="row justify-content-evenly">
    <div className="col-4">
      <Card 
      img={home2}
      title="maison1"
      describle="
      voici un projet de construction d'une maison de 4 chambres, un salon,
      une cuisine europeenne bien équipée.
      
      "
      />
    </div>
    <div className="col-4">
      <Card 
      img={home3}
      title="maison1"
      describle="
      voici un projet de construction d'une maison de 4 chambres, un salon,
      une cuisine europeenne bien équipée.
      "
      link="http://"
      />
    </div>
    <div className="col-4">
      <Card 
      img={home}
      title="maison1"
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
    <div className="col-4">
    <div className="row justify-content-center "> 
      <div className="col-8 mb-5">
          <Title text="Nous beaucoup d'expérience, car nous construisons depuis 2010 !" color="white"/>
        </div>
        <div className="col-8 mb-5">
          <Describle text="
        Parcourez l'un de nos projets récemment achevés
        ici sur la Garden Route en effectuant la visite virtuelle.
        " 
        link="http://"
        /> 
        </div>
        <div className="col-8">
              <Button text="Faites le tout sur Virtual Tour" color="#dc3545" />
        </div>
        
    </div>
    
      
    </div>
    <div className="col-8">
    <iframe width="100%" height="500" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src="https://kuula.co/share/collection/7JrKG?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&autop=8&autopalt=1&thumbs=1"></iframe>
    
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-5" style={{backgroundColor:"#eeeeee"}}>
    <div className="container py-5">
    <div className="row">
    <div className="col-5">
        <div className="row justify-content-center "> 
        <div className="col-8 mb-4">
            <Title text="Nous beaucoup d'expérience, car nous construisons depuis 2010 !"/>
          </div>
          <div className="col-8 mb-4">
            <Describle text="
            Veuillez parcourir notre liste de 
            quelques questions fréquemment posées 
            sur notre entreprise et le secteur du bâtiment en général.
          " 
          link="http://"
          /> 
          </div>
          <div className="col-8">
                <Button text="Nous contactez" color="#dc3545" />
          </div>
          
        </div>
    </div>
    <div className="col-7">
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
      <div className="container-fluid"> 
       <div className="row">
        <div className="col-12 col-md-6 py-5 text-center " style={{backgroundColor:"#dc3545"}}>
          <div className="row justify-content-center">
          <div className="col-12 mb-5">
          <Title text="CONTACTEZ NOUS" /> <i class="fa fa-users" aria-hidden="true"></i>
          </div>
            <div className="col-12">
              <FormSend />
          </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row justify-content-center">
            <div className="col-12">
            <div className="row justify-content-between bg-danger  py-4 align-items-center">
            <div className="col-6 text-center" >
            <Title text="Trouvez nous sur nos réseaux sociaux" color="#ffffff" size="20px"/>
            </div>
            <div className="col-6">
              <ul className="list-inline">
                      <li className="list-inline-item mx-2">
                        <Link to="">  <i className="fa fa-facebook-official fa-2x"  aria-hidden="true"></i></Link>
                      </li> 
                      <li className="list-inline-item mx-2">
                        <Link to="">  <i class="fa fa-instagram fa-2x" aria-hidden="true"></i></Link>
                      </li> 
                      <li className="list-inline-item mx-2">
                        <Link to=""><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></Link>
                      </li> 
                      <li className="list-inline-item mx-2">
                        <Link to=""> <i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></Link>
                      </li> 
                      <li className="list-inline-item mx-2">
                        <Link to=""> <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></Link>
                      </li> 
                     
              </ul>        
            </div>
              
            </div>
            </div>
            <div className="col-12 py-5">
                <ul className="list-inline">
                  <li className="list-item-inline py-4">  
                        <i className="fa fa-map-marker mx-3" aria-hidden="true"></i>Address:
                        wayerma II Zonde, Sikasso, Mali
                  </li>
                  <li className="list-item-inline py-4">  
                  <i class="fa fa-phone-square mx-3" aria-hidden="true"></i>Phone:
                        +223 71 58 73 75
                  </li>
                  <li className="list-item-inline py-4">  
                      <i class="fa fa-envelope mx-3" aria-hidden="true"></i>E-mail:
                        zangayacoubakone@gmail.com
                  </li>
                  
                </ul>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
    <section className="py-2 bg-dark">
      <div className="container">
      <div className="row justify-content-between align-content-center">
        <div className=" col-6 " style={{
          fontFamily:"fantasy",
          fontSize:"12px",
          color:"#566573"
          fontStyle:"italic",
        }}>
          <i class="fa fa-copyright" aria-hidden="true"></i> Z_CONSTRUCTION
         
        </div>
        <div className="col-6 text-end">
           <Link className="nav-link" to="https://ing-diack.github.io/webSite/" target="_blank"> 
              Developped By:ABKF_Tech</Link>
        </div>
      </div>
      </div>
    </section>
    </main>
 
   
  );
}

export default App;
