import { Link } from 'react-router-dom';
import logo from './../../images/logo2.png';
import './index.css';

function Header() {

  return (
   <header className="header">
      <Link to="" className='logo'> logo</Link>
         <input type="checkbox" id="check"/>
      <label  htmlFor='check' className='icons'>
      <i className="fa fa-bars" aria-hidden="true" id='menu-icon'></i>
      <i className="fa fa-times" aria-hidden="true" id='close-icon'></i>
      </label>
      
      
      <nav className='nav-bar'>
        <Link to=""style="--i:1">Home</Link>
        <Link to=""style="--i:2">About</Link>
        <Link to=""style="--i:3">Projects</Link>
        <Link to=""style="--i:4">Contacts</Link>
      
      </nav>
   </header>
  )
   
}

export default Header;