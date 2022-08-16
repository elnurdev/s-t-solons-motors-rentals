import React from 'react';
import footerStyle from './header-footerStyle.css'
import { Container } from '@mui/system';
import logo from '../img/logo.svg'

function Footer() {
  return (
    <div className='App'>
      <footer className='footer'>
        <div className='container'>
          <div className='mainFooter'>
                <a href='#' className='mainLogo'><img src={logo} alt='Logo' /></a>
                <ul className='navItems'>
                    <li className='navItem'><a href='#' className='navLink'>home</a></li>
                    <li className='navItem'><a href='#' className='navLink'>book online</a></li>
                    <li className='navItem'><a href='#' className='navLink'>gallery</a></li>
                    <li className='navItem'><a href='#' className='navLink'>contacts</a></li>
                    <li className='navItem lastItem'><a href='#' className='navLink'>faq</a></li>
                </ul>
                <a href='#' className='footerNum'>+357 12345678</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
