import bridge from "./../../images/bridge.jpg";
import './index.css';
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
      <div className="col-6 describle">
      <p>
      Z_CONSTRUCTION est une entreprise de bâtiment et de construction.
      Nous sommes situés à sikasso la troisième région et la capitale économique du Mali.
      </p>
      <p>
      Nous construisons des maisons depuis 2010.
      </p>
      <p>
      Z_CONSTRUCTION appartient à ZANGA YACOUBA KONE ingénieur en Génie Civil Structure.
      Nous possédons une vaste expérience dans les secteurs de la construction et de la sécurité.
      </p>
      </div> 
      <div className="col-5 describle">
       <p className="mb-5">
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
    </main>
 
   
  );
}

export default App;
