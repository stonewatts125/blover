import { useState, useEffect, useLayoutEffect } from 'react';
import './news.css';
import NewsCarousel from './newsCarousel';


function News() {

   return (
      <section className="News">
         <div className='news-bottom'>
            <div className='circle'>
               <div className=' circle1'></div>
            </div>
            <div className='circle'>
               <div className='circle2'></div>
            </div>
         </div>
         <div className='news-top'>
            <div id='news-title'><p>NEWS</p></div>
            <NewsCarousel />

         </div>

      </section>
   );
}

export default News;