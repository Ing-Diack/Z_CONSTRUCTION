import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import FormSend from '../formControl';

function Footer() {
  return (
    <div className="container-fluid" id='contacts'> 
    <div className="row justify-content-between">
     <div className="col-12 col-md-6 py-5 text-center " style={{backgroundColor:"#dc3545"}}>
       <div className="row d-block justify-content-center">
       <div className="col-12 mb-5">
       <Title text="CONTACTEZ-NOUS" /> <i className="fa fa-users" aria-hidden="true"></i>
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
         <div className="col-6" >
         <Title text="Trouvez nous sur nos réseaux sociaux" color="#ffffff" size="20px" small_size="0.8em"/>
         </div>
         <div className="col-6">
           <ul className="list-inline">
                   <li className="list-inline-item mx-2">
                     <Link to="https://www.facebook.com/zangayacouba.kone.5?mibextid=ZbWKwL"> 
                     <i className="fa fa-facebook-official fa-md-2x"  aria-hidden="true"></i></Link>
                   </li> 
                   <li className="list-inline-item mx-2">
                     <Link to="https://instagram.com/zangayacoubakone?igshid=NGVhN2U2NjQ0Yg==" target='__blank'> 
                     <i className="fa fa-instagram fa-md-2x" aria-hidden="true"></i></Link>
                   </li> 
                   <li className="list-inline-item mx-2">
                     <Link to=""><i className="fa fa-twitter-square fa-md-2x" aria-hidden="true"></i></Link>
                   </li> 
                   <li className="list-inline-item mx-2">
                     <Link to=""> <i className="fa fa-whatsapp fa-md-2x" aria-hidden="true"></i></Link>
                   </li> 
                   <li className="list-inline-item mx-2">
                     <Link to="https://www.linkedin.com/in/zanga-yacouba-koné-0a5978180">
                     <i className="fa fa-linkedin-square fa-md-2x" aria-hidden="true"></i></Link>
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
               <i className="fa fa-phone-square mx-3" aria-hidden="true"></i>Phone:
                     +223 71 58 73 75
               </li>
               <li className="list-item-inline py-4">  
                   <i className="fa fa-envelope mx-3" aria-hidden="true"></i>E-mail:
                     zangayacoubakone@gmail.com
               </li>
               
             </ul>
         </div>
       </div>
     </div>
    </div>
   </div>
  )
}

export default Footer