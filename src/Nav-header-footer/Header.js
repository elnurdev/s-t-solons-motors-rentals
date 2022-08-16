import React from 'react';
import headerStyle from './header-footerStyle.css'
import { Container } from '@mui/system';
import logo from '../img/logo.svg'

function Header() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='container'>
          <div className='mainHeader'>
                <a href='#' className='mainLogo'><img src={logo} alt='Logo' /></a>
                <ul className='navItems'>
                    <li className='navItem active'><a href='#' className='navLink'>home</a></li>
                    <li className='navItem'><a href='#' className='navLink'>book online</a></li>
                    <li className='navItem'><a href='#' className='navLink'>gallery</a></li>
                    <li className='navItem'><a href='#' className='navLink'>contacts</a></li>
                    <li className='navItem lastItem'><a href='#' className='navLink'>faq</a></li>
                </ul>
                <a href='#' className='headerNum'>+357 12345678</a>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
