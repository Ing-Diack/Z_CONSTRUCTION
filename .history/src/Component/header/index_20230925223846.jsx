import { Link } from 'react-router-dom';
import logo from './../../images/logo2.png';

function Header() {

  return (
    <header>
 
     <nav className='navbar navbar-expand-md mb-2 navbar-light shadow bg-body  ' >
 
         <div className="container">
             <Link to="/" className="navbar-brand text-uppercase fw-bold"   >
               <span>
                <img src={logo} alt="" width={150} height={50}/>
                </span>
             </Link>
               <i  type='button' data-bs-toggle='collapse' 
             data-bs-target= "#navbarNav"  aria-controls='navbarNav' aria-expanded='false'
             aria-label= "Toggle Navigation" className=" navbar-toggler fa fab fa-bars fa-1x text-light bg-secondary "></i>
             <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
               <ul className="navbar-nav">
               <li className="nav-item m-md-2">
                   <Link to='/' className="nav-link">Home</Link>
                 </li>
                 <li className="nav-item m-md-2">
                 <Link to='#section2' className='nav-link  '> About ?</Link>
                </li>
                <li className="nav-item m-md-2">
                <Link to="#section4" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item m-md-2">
                <Link to='#section5' className="nav-link">Contacts</Link>
                </li>
                <li className="nav-item m-md-2"> 
                 <Link  to="" className='nav-link'>
                   Login <i className="fa fab fa-user" ></i> 
                    </Link> 

                 
                </li>
              </ul>
            </div>
        </div>

    </nav>
  
   </header>
  )
   
}

export default Header;