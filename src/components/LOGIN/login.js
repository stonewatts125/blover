import React, { useState, useEffect, useLayoutEffect } from 'react';
import './login.css';
import { useForm } from "react-hook-form";
import useParams from "react-router-dom";
import Footer from '../HOME/FOOTER/footer';
import LoginContent from './LOGIN_CONTENT/logincontent';
import NavBar2 from '../HOME/NAV BAR/navbar2';
import Background from '../HOME/BACKGROUND/background'
import MobileNav from '../HOME/NAV BAR/mobile-nav';


function Login() {

    const width = window.innerWidth
    return (
        <div className='Login'>
            <div id='login-top'>
                {width <= 600 ? <MobileNav /> : <NavBar2 />}
                <LoginContent />
                <Footer />
                <Background />
            </div>
            <div id='login-bottom'>

            </div>


        </div>
    )
}
export default Login;