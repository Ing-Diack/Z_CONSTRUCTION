import { Link } from 'react-router-dom';
import logo from './../../images/logo2.png';
import './index.css';

function Header() {

  return (
   <header className="header">
      <Link to="" className='logo'> logo</Link>
      <label htmlFor="" className='icons'>
      <i class="fa fa-bars" aria-hidden="true"></i>
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