import { useState, useEffect, useLayoutEffect } from 'react';
import './about.css';
import $ from 'jquery'
import 'animate.css';
function About() {

  const [position, setPosition] = useState(0)
  useLayoutEffect(() => {
    function handleScroll() {
      setPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [position]);





  return (
    <section className="About">
      <div id='figure1'></div>
      <div id='figure2'></div>
      <div id='overlay-pharse'>
        <div id='title'>
          <div id='vertical-line' className={(position > 1200) ? 'animate__animated animate__fadeInDown' : 'hide'}></div>
          <div id='ttl' className={(position > 1200) ? 'animate__animated animate__fadeInRight' : 'hide'}>BLOVER</div>
        </div>
        <div id='main-pharse' className={(position > 1300) ? 'animate__animated animate__fadeInUp' : 'hide'}>
          At BLOVER, our main priority is perfection.
          We have a vision of Luxury that is modern, dynamic, creative, inspiring the entire worldworld and creating desire, emotion and dreams.
          With a mission to change the world, our services, projects and creations are always one-of-a-kind.
          By trying to do our best, we have a very long-term stability and sustainability and that is the foundation of BLOVER’s future.
        </div>
        <div id='signature' className={(position > 1400) ? 'animate__animated animate__fadeInRight' : 'hide'}>
          <i><b>Stone Watts</b> - CEO of BLOVER</i>
        </div>
        <div id='underline' className={(position > 1400) ? 'animate__animated animate__fadeInLeft' : 'hide'}></div>
        <div id='fom-button' className={(position > 1400) ? 'animate__animated animate__fadeIn' : 'hide'}>SEE MORE</div>
      </div>
    </section>
  );
}

export default About;