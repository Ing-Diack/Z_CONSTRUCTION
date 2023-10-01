import bridge from "./../../images/bridge.jpg";
import residential from "./../../images/residence2.jpg";
import home from "./../../images/home2.jpg";
import home1 from './../../images/home1.jpg';
import home2 from './../../images/home3.jpg';
import home3 from './../../images/home4.jpg';
import plan from "./../../images/plan.jpeg";
import Banierre from "../../Component/banierre";
import Title from "../../Component/Title";
import Button from "../../Component/button";
import Circle from "../../Component/circle";


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
      <h4> Our services</h4>
      <ul className="list-inline">
      <li className="list-item-inline mb-3"> <img src={home} alt="home" width={80} height={80} className="rounded-circle" /> 
         <span className="mx-1 fw-bold fs-4">  Home</span>
      </li>
      <li className="list-item-inline mb-3"> <img src={bridge} alt="home" width={80} height={80} className="rounded-circle" /> 
         <span className="mx-1 fw-bold fs-4">Bridge</span>
      </li>
      <li className="list-item-inline mb-3"> <img src={residential} alt="home" width={80} height={80} className="rounded-circle" /> 
      <span className="mx-1 fw-bold fs-4">Residentials</span>
      </li>
      <li className="list-item-inline "> <img src={plan} alt="home" width={80} height={80} className="rounded-circle" /> 
      <span className="mx-1 fw-bold fs-4">Building Plans</span>
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
      <div className="col-6">
      <p style={{
        color:"#566573",
        letterSpacing:"0.1em",
        fontStyle:"italic",
        fontSize:"0.9em",
        fontFamily:"fantasy",
       textAlign:"justify"
      }}>
      Z_CONSTRUCTION est une entreprise dans le domaine de Genie Civil. <br/>
      ELle a été crée en 2020 par  ZANGA YACOUBA KONE ingénieur en Génie Civil spécialité Structures .
      cette entreprise travaille dans tous les domaines de genie civil.
      elle est consacrée sur la construction des maisons des particuliers, les residences, des ponts,
      barrages.
      </p>
      </div> 
      <div className="col-5">
       <p style={{
        color:"#566573",
        letterSpacing:"0.1em",
        fontStyle:"italic",
        fontSize:"0.9em",
        fontFamily:"inherit",
       textAlign:"justify"
       }}>
        `` Soyez la prochaine personne à savourer notre savoir faire``
       </p>
          <Button text="Visitez la page de nos projets" color="black" />
      </div>
     
      </div>
      <div className="row mt-5">
      <div className="col-6">
      <Circle text="2 ans experiences" color="black" />
      </div>
      <div className="col-6">
      <Circle text="20 projets complets" color="red"/>
      </div>
      </div>

      </div>
    
      </div>
      </div>
    </section>
    </main>
 
   
  );
}

export default App;
