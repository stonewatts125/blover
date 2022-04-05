import React, {useState, useEffect, useContext} from 'react';
import './HOME.css';
import NavBar from './NAV BAR/navbar.js';
import Background from './BACKGROUND/background.js'
import Intro from './INTRO/intro';
import Companies from './COMPANIES/companies';
import Commerce from './COMMERCE/commerce';
import About from './ABOUT/about';
import News from './NEWS/news';
import Footer from './FOOTER/footer';
import Menu from './MENU/menu';
import {StockContext} from './stockcontext'
import MobileNav from './NAV BAR/mobile-nav';
import MobileMenu from './MENU/mobile-menu';
import MobileFooter from './FOOTER/mobile-footer';
function Home() {

  const {contextmenu} = useContext(StockContext)
  const [menu, setMenu] = contextmenu
  const width = window.innerWidth
  return (
    <div className="Home">
       {(menu && width>600 ) && <Menu/>} 
       {(menu && width<=600 )&& <MobileMenu/>} 
       {width <= 600 ? <MobileNav/> : <NavBar/>}
       
       <Intro/>
       <Background/>
       <Companies/>
       <About/>
       <Commerce/>
       <News/>
       {(width <= 600) ? <MobileFooter/> : <Footer/> }
       
    </div>
  );
}

export default Home;