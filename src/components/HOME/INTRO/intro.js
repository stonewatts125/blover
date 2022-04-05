import {useState, useEffect, useLayoutEffect} from 'react';
import './intro.css';


function Intro() {
  return (
    <section className="Intro">
       <div id='intro-content'>
           <div id='h3'>A Luxury Multinational Corporation</div>
           <div className='line1'>Blover Group formed and developed based on inheritance and stability.</div>
           <div className='line2'>We always try to make the projects and products made by the group reach to perfection.</div>
           <div id='fom'>FIND OUT MORE</div>
       </div>
    </section>
  );
}

export default Intro;