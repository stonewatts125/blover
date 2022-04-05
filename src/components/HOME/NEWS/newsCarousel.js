import React,  {useReducer, useState, useEffect}  from 'react';
import $ from 'jquery'
import './newsCarousel.css'
import useData from './getData.js'
import nexts from './next.svg'
import prevs from './prev.svg'
import usePrevious from '../../../hooks/usePrevious';
import 'animate.css';

function NewsCarousel(){


    const [slides , setSlides] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/slides')
        .then(response => response.json())
        .then(data => setSlides(data))
        
    },[])


    const [index , setIndex] = useState(0)
    const prevIndex = usePrevious(index)
    function prev(){
        if(index <= 0){
            setIndex(slides.length-1)
        } else {
            setIndex(index - 1)
        }
    }
    function next(){
        if(index >= (slides.length-1)){
            setIndex(index - index)
        } else {
            setIndex(index + 1)
        }
        
    }
    
    console.log(prevIndex , index)
    
    return (
      <section className='NewsCarousel'>
          <div id='prev'><img src={prevs} className='material-icons' onClick={prev}/></div>
          <div id='carousel-body' className={( prevIndex === (index - 1)) ? 'animate__animated animate__fadeInRight' : 'abc'}>
              {
                  slides.map((slide, i ) => {
                      return (
                        <React.Fragment key={i} >
                        <div className='news-image'></div>
                        <div className='news-info'>
                           <div className='news-title'>{slides[index].title}</div>
                           <div className='news-description'>{slides[index].description}</div>
                           <div className='news-source'>{slides[index].news_source}</div>
                           <div className='read-full'>Read Full Article</div>
                        </div>
                        </React.Fragment>
                      )
                  })

              }             
          </div>
          <div id='next'><img src={nexts} className='material-icons' onClick={next}/></div>

      </section>
    ) 
}




export default NewsCarousel;