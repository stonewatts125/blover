import { useState, useEffect, useLayoutEffect } from 'react';
import './mobile-footer.css';
import FooterLogo from './bloverlogo.svg'


function MobileFooter() {




    return (
        <section className="MobileFooter">
            <div id='m-foot-logo'><img src={FooterLogo} onClick={() => { window.location = '/' }} /></div>
            <div id='mobile-foot-content'>
                <div id='mf-companies'>
                    <div className='ft-ttl'>COMPANIES</div>
                    <div className='ft-items'>
                        <div className='ft-item'>REAL ESTATE</div>
                        <div className='ft-item'>ARCHITECTURE</div>
                        <div className='ft-item'>STONE</div>
                        <div className='ft-item'>INTERIOR</div>
                        <div className='ft-item'>TECHNOLOGY</div>
                    </div>

                </div>
                <div id='mf-group'>
                    <div className='mf-ft-ttl'>GROUP</div>
                    <div className='mf-ft-items'>
                        <div className='mf-ft-item'>ABOUT</div>
                        <div className='mf-ft-item'>HOUSE OF BLOVER</div>
                    </div>

                </div>
                <div id='mf-customer'>
                    <div className='mf-ft-ttl'>CUSTOMER</div>
                    <div className='mf-ft-items'>
                        <div className='mf-ft-item'>CONTACT</div>
                        <div className='mf-ft-item' onClick={() => { window.location = "/login" }}>ACCOUNT</div>
                    </div>
                </div>
            </div>

            {/***************************************************************** */}             
            <div className='mobile-social-media'>
                <div className='mf-social-ttl'>FOLLOW BLOVER</div>
                <div id='mf-social-media'>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-linkedin"></i>
                </div>
            </div>


            {/***************************************************************** */}
            <div className='mf-foot-credit'>
                <div id='mf-credit-left'>
                    <div className='mf-credit-left-item'>SITE MAPS</div>
                    <div className='mf-credit-left-item'>PRIVACY</div>
                    <div className='mf-credit-left-item'>TERMS</div>
                    <div className='mf-credit-left-item'>LEGAL</div>
                    <div className='mf-credit-left-item'>COOKIES</div>
                </div>
                <div id='mf-credit-right'>Copyright © 2026 BLOVER Group. All Rights Reserved</div>
            </div>

        </section>
    );
}

export default MobileFooter;