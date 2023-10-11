import { Link } from 'react-router-dom';
import logo from './../../images/logo2.png';
import './index.css';

function Header() {

  return (
   <header className="header">
      <Link to="" className='logo'> 
        <img src={logo} alt="logo"/>
      </Link>
         <input type="checkbox" id="check"/>
      <label  htmlFor='check' className='icons'>
      <i className="fa fa-bars" aria-hidden="true" id='menu-icon'></i>
      <i className="fa fa-times" aria-hidden="true" id='close-icon'></i>
      </label>
      
      
      <nav className='nav-bar'>
        <Link className='active' to="">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      
      </nav>
   </header>
  )
   
}

export default Header;