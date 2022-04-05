import {useState, useEffect, useContext} from 'react';
import './navbar2.css';
import Logo from './bloverlogo.svg'
import $ from 'jquery'


function NavBar2() {

 
  

  return (
    <section className="NavBar2">
      <div id='main-nav-2'>
         <img src={Logo} alt='logo' id='nav-2-logo' onClick={() => {window.location = '/'}}/>
         <div id='nav-2-left'>
              <div className='nav-2-left-item'>ABOUT</div>
              <div className='nav-2-left-item'>REAL ESTATE</div>
              <div className='nav-2-left-item'>STONE</div>
              <div className='nav-2-left-item'>INTERIOR</div>
              <div className='nav-2-left-item'>TECHNOLOGY</div>
              <div className='nav-2-left-item' id='menu'>
                  <div id='menu1'>
                      <div className='menu2'></div>
                      <div className='menu2'></div>
                  </div>                 
              </div>
         </div>
      </div>
    </section>
  );
}

export default NavBar2;