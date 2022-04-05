import { useState, useEffect, useContext } from 'react';
import './navbar.css';
import Logo from './bloverlogo.svg'
import { StockContext } from '../stockcontext'
import $ from 'jquery'


function NavBar() {

  const { contextstock, contextoldstock, contextpercent, contextmenu } = useContext(StockContext)
  const oldstock = contextoldstock
  const [stock, setStock] = contextstock
  const [percent, setPercent] = contextpercent

  const [menu, setMenu] = contextmenu

  function openMenu() {

    $(".Menu").addClass('.fadeIn')
    setMenu(true)
  }

  return (
    <section className="NavBar">
      <div id='main-nav'>
        <img src={Logo} alt='logo' id='nav-logo' onClick={() => { window.location = '/' }} />
        <div id='nav-left'>
          <div className='nav-left-item'>ABOUT</div>
          <div className='nav-left-item'>REAL ESTATE</div>
          <div className='nav-left-item'>STONE</div>
          <div className='nav-left-item'>INTERIOR</div>
          <div className='nav-left-item'>TECHNOLOGY</div>
          <div className='nav-left-item' id='menu'>
            <div id='menu1' onClick={openMenu}>
              <div className='menu2'></div>
              <div className='menu2'></div>
            </div>
          </div>
        </div>
      </div>
      <div id='nav-stock' onClick={() => { window.location = '/stock' }}> <div><b>BLVR:</b> ${stock} {(percent > 0) ? '+' + percent : percent}% </div> </div>
    </section>
  );
}

export default NavBar;