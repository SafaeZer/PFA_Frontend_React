import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { Login, Register } from "../components/login/index";
import Animlog from "../components/login/animlog";
import './sidebar.scss';
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import Classwork from "./classwork";

function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth < 960) {
      setButton(false)
    }
    else{
      setButton(true)
    }
  };
window.addEventListener('resize', showButton);

return(
  <>
        <IconContext.Provider value={{ color: '#fff' }}>

    <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
    <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div> 
    <ul className='nav-links'>

<li><a href="/" onClick={closeMobileMenu}>Home</a></li>
<li><a href="/classwork" onClick={closeMobileMenu}>Classwork</a></li>
<li><a href="/people" onClick={closeMobileMenu}>People</a></li>

</ul>

<div class="dropdown">
  <button class="dropbtn">Sign in</button>
  <div class="dropdown-content">
    <a href="#">Student</a>
    <a href="#">Teacher</a>
    <a href="#">Admin</a>
  </div>
</div>
    {/*<ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/classes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Classes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/people'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                People
              </Link>
            </li>
</ul>*/}
        </div>
  
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </IconContext.Provider>
        </>
)
}

export default Navbar;