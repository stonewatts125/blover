import { useState, useEffect, useLayoutEffect } from 'react';
import './companies.css';


function Companies() {
      return (
            <section className="Companies">
                  <div className="grid-container">
                        <div className="grid-item item-1 wrap wrap1">
                              <div className='wrapbg re'></div>
                              <div className='wraptop'></div>
                              <div className='company-name of1'>REAL ESTATE</div>
                        </div>
                        <div className="grid-item item-2 wrap wrap1">
                              <div className='wrapbg ar'></div>
                              <div className='wraptop'></div>
                              <div className='company-name'>ARCHITECTURE</div>
                        </div>
                        <div className="grid-item item-3 wrap wrap1">
                              <div className='wrapbg sto'></div>
                              <div className='wraptop'></div>
                              <div className='company-name'>STONE</div>
                        </div>
                        <div className="grid-item item-4 wrap wrap1">
                              <div className='wrapbg int'></div>
                              <div className='wraptop'></div>
                              <div className='company-name'>INTERIOR</div>
                        </div>
                        <div className="grid-item item-5 wrap wrap1">
                              <div className='wrapbg tech'></div>
                              <div className='wraptop'></div>
                              <div className='company-name'>TECHNOLOGY</div>
                        </div>
                        <div className="grid-item item-6 wrap wrap1">
                              <div className='wrapbg hob'></div>
                              <div className='wraptop'></div>
                              <div className='company-name of6'>HOUSE of BLOVER</div>
                        </div>
                  </div>
            </section>
      );
}

export default Companies;