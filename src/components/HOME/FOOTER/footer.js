import { useState, useEffect, useLayoutEffect } from 'react';
import './footer.css';
import FooterLogo from './bloverlogo.svg'
import { useForm } from "react-hook-form";
import useParams from "react-router-dom";

function Footer() {

   const { register, handleSubmit, formState: { errors } } = useForm()
   function onSubmit(data) {
      console.log(data)
   }


   return (
      <section className="Footer">
         <div id='foot-logo'><img src={FooterLogo} onClick={() => { window.location = '/' }} /></div>
         <div id='foot-content'>
            {/******************LEFT SIDE***************/}
            <div id='leftside'>
               <div id='companies'>
                  <div className='ft-ttl'>COMPANIES</div>
                  <div className='ft-items'>
                     <div className='ft-item'>REAL ESTATE</div>
                     <div className='ft-item'>ARCHITECTURE</div>
                     <div className='ft-item'>STONE</div>
                     <div className='ft-item'>INTERIOR</div>
                     <div className='ft-item'>TECHNOLOGY</div>
                  </div>

               </div>
               <div id='group'>
                  <div className='ft-ttl'>GROUP</div>
                  <div className='ft-items'>
                     <div className='ft-item'>ABOUT</div>
                     <div className='ft-item'>HOUSE OF BLOVER</div>
                  </div>

               </div>
               <div id='customer'>
                  <div className='ft-ttl'>CUSTOMER</div>
                  <div className='ft-items'>
                     <div className='ft-item'>CONTACT</div>
                     <div className='ft-item' onClick={() => { window.location = "/login" }}>ACCOUNT</div>
                  </div>

               </div>
            </div>
            {/******************RIGHT SIDE***************/}
            <div id='rightside'>
               <div id='newsletter'>
                  <div className='newsletter-ttl'>SUBSCRIBE TO OUR NEWSLETTERS</div>
                  <div id='email'>
                     <input id='input-email' type='text' placeholder='Enter your email'
                        {...register('email', { required: '*This field is required', pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: '*Invalid email' } })}
                     />
                     <div id='send-email' onClick={handleSubmit(onSubmit)}>SEND</div>
                  </div>
                  {errors.email && <p className='error'>{errors.email.message}</p>}
               </div>
               <div className='social-ttl'>FOLLOW BLOVER</div>
               <div id='social-media'>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-youtube"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-linkedin"></i>
               </div>
            </div>
         </div>

         <div className='foot-credit'>
            <div id='credit-left'>
               <div className='credit-left-item'>SITE MAPS</div>
               <div className='credit-left-item'>PRIVACY</div>
               <div className='credit-left-item'>TERMS</div>
               <div className='credit-left-item'>LEGAL</div>
               <div className='credit-left-item'>COOKIES</div>
            </div>
            <div id='credit-right'><div>Copyright © 2026 BLOVER Group. All Rights Reserved</div></div>
         </div>

      </section>
   );
}

export default Footer;