import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logosvg from '../../Images/Logo.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>

      <header className=' fixed-header '>
        <div className='d-flex  justify-content-between align-items-center'>
          <div className='brandName'>
            <img src={logosvg} alt="logosvg" />
          </div>
          <nav className='navbar '>
            <ul className='navbar-List d-flex justify-content-between align-items-center m-0 '>
              <li><a>About</a></li>
              <li><a>Services</a></li>
              <li><a>Products</a></li>
              <li><a>Career</a></li>
              <li><a>Contact</a></li>
              <li><a><FontAwesomeIcon icon={faBars} /></a></li>
            </ul>
          </nav>
        </div>
      </header>





    </>
  );
}

export default Header;
