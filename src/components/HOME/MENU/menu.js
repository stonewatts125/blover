import React, { useContext, useLayoutEffect } from 'react';
import $ from 'jquery'
import './menu.css'
import { StockContext } from '../stockcontext'


function Menu() {

  const { contextmenu } = useContext(StockContext)
  const [menu, setMenu] = contextmenu

  function closeMenu() {
    $('.Menu').addClass('fadeOut')

    setTimeout(function () {
      setMenu(false)
    }, 600)

  }

  return (

    <section className='Menu'>
      <div id='bg-menu'></div>
      <div id='top-menu'>
        <div id='close'><span class="material-icons" onClick={closeMenu}>close</span></div>
        <div id='menu-content'>
          <div className='mc-item' onClick={() => { window.location = "/search" }}>SEARCH</div>
          <div className='mc-item' onClick={() => { window.location = "/login" }}>LOG IN</div>
          <div className='mc-item' onClick={() => { window.location = "/signup" }}>SIGN UP</div>
        </div>
      </div>

    </section>
  )
}

export default Menu


