import { useState, useEffect, useContext } from 'react';
import './commerce.css';
import spin1 from './spin1.svg'
import spin2 from './spin2.svg'
import spin3 from './spin3.svg'
import { StockContext } from '../stockcontext'

function Commerce() {

   const { contextstock } = useContext(StockContext)
   const [stock, setStock] = contextstock


   return (
      <section className="Commerce">

         <div className="commerce-item share">
            <div className='bottom-bg share-bg'></div>
            <div className='top-overlay'>
               <div className='cmc-title-share'>SHARE</div>
               <div id='share-content'>
                  <div className='spinner'>
                     <img id='spin1' src={spin1}></img>
                     <img id='spin2' src={spin2}></img>
                     <img id='spin3' src={spin3}></img>
                  </div>
                  <div className='share-main-content'>
                     <div id='rts'>REAL TIME STOCK</div>
                     <div id='cmc-stock'>${stock}</div>
                  </div>
               </div>
               <div id='share-btn' onClick={() => { window.location = '/stock'}}>MORE DETAILS</div>
            </div>
         </div>


         <div className="commerce-item finance">
            <div className='bottom-bg ivm-bg'></div>
            <div className='top-overlay'>
               <div className='cmc-title-finance'>FINANCE</div>
               <div id='fnc-content'>
                  See 2025's financial report and investment activities of BLOVER Group.
               </div>
               <div className='fnc-btn btn'>
                  More
               </div>
            </div>
         </div>


         <div className="commerce-item recruitment">
            <div className='bottom-bg rcr-bg'></div>
            <div className='top-overlay'>
               <div className='cmc-title-recrui'>RECRUITMENT</div>
               {(window.innerWidth >= 600) ? 
               <div id='rcr-content'>We are hiring, join BLOVER Inc. or BLOVER Companies to get to work in professional enviroment !<br/>
                  Register to have an oppotunity to experience BLOVER's working enviroment.
               </div>
               :
               <div id='rcr-content'>
                  Job offers or register to have an oppotunity to experience BLOVER's working enviroment.
               </div>
               }
               <div className='rcr-btn btn'>
                  <div id='job'>See jobs offer</div>
                  <div id='register'>Register</div>
               </div>
            </div>

         </div>
      </section>
   );
}

export default Commerce;