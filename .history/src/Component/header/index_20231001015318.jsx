import { Link } from 'react-router-dom';
import logo from './../../images/logo2.png';

function Header() {

  return (
   <header className="header">
      <Link to="" className='logo'> logo</Link>
      
      <nav className='navbar'>
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Projects</Link>
        <Link to="">Contacts</Link>
      
      </nav>
   </header>
  )
   
}

export default Header;