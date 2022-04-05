import { useState, useEffect, useContext } from 'react';
import './mobile-nav.css';
import Logo from './bloverlogo.svg'
import { StockContext } from '../stockcontext'
import $ from 'jquery'
import {Link} from "react-router-dom"


function MobileNav() {

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
        <section className="MobileNav">
            <div className='mobilenav-main'>
                <div className='mobile-nav-logo pn-item'><img src={Logo} /><a href='/'></a></div>
                <div className='mobile-nav-menu pn-item'><div className='menu1' onClick={openMenu}></div></div>
            </div>
            <div className='mobile-nav-stock' onClick={() => { window.location = '/stock' }}> <div><b>BLVR:</b> ${stock} {(percent > 0) ? '+' + percent : percent}% </div> </div>

        </section>
    );
}

export default MobileNav;