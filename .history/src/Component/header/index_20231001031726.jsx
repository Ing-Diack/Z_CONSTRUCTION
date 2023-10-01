import { Link } from 'react-router-dom';
import logo from './../../images/logo2.png';
import './index.css';

function Header() {

  return (
   <header className="header">
      <Link to="" className='logo'> logo</Link>
      
      <label  htmlFor='check' className='icons'>
      <i className="fa fa-bars" aria-hidden="true" id='menu-icon'></i>
      <i className="fa fa-times" aria-hidden="true" id='close-icon'></i>
      <input type="checkbox" id="check"/>
      </label>
      
      
      <nav className='nav-bar'>
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Projects</Link>
        <Link to="">Contacts</Link>
      
      </nav>
   </header>
  )
   
}

export default Header;