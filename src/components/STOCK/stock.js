import { useState, useLayoutEffect, useReducer } from 'react';
import './stock.css';
import $ from 'jquery'
import NavBar2 from '../HOME/NAV BAR/navbar2'
import usePrevious from '../../hooks/usePrevious'
import Footer from '../HOME/FOOTER/footer'
import 'animate.css';
import MobileNav from '../HOME/NAV BAR/mobile-nav';

function Stock() {

    var h = (new Date()).getHours();
    var mm = (new Date()).getMinutes();
    var m;
    if ((mm.toString()).length < 2) {
        m = '0' + mm
    } else {
        m = mm
    }

    var initial = 5 + ((new Date()).getDay()).toString() + 125

    const [stock, setStock] = useState(initial)
    const oldstock = usePrevious(stock)
    var amount = Math.ceil(Math.random() * 500)
    const [percent, setPercent] = useState(1)
    useLayoutEffect(() => {
        function Stock() {
            setStock(51205 + amount)
        }
        setTimeout(Stock, 60000)
        setPercent(Math.round((((stock - oldstock) * 100) / oldstock) * 100) / 100)

        return clearTimeout(Stock, 60000)

    }, [stock])

    
    

    /**********************************************************************/
    const [active, setActive] = useState(0)

    /*if (active == 0) {
        $('#chart').addClass('active')
    } else {
        $('#chart').removeClass('active')
    }
    if (active == 1) {
        $('#stat').addClass('active')
    } else {
        $('#stat').removeClass('active')
    }
    if (active == 2) {
        $('#history').addClass('active')
    } else {
        $('#history').removeClass('active')
    }*/

    /***********************************************************/
    const width = window.innerWidth

    return (
        <section className="Stock">
            {width <= 600 ? <MobileNav/> : <NavBar2/>}
            <div className='stock-title animate__animated animate__fadeInUp'>BLOVER STOCK EXCHANGE</div>
            {/******************PAGE 1******************/}
            <div className='page1 realtime animate__animated animate__zoomIn'>
                <div className='page1-title'>REAL TIME STOCK</div>
                <div className='rts-s'>${stock} <p>{(percent > 0) ? '+' + percent : percent}%</p></div>
                <div className='real-time'>{(new Date()).toDateString()} - {h}:{m} - (UTC +7)</div>
                <div className='op-cl'>
                    <div>Last close : ${5 + ((new Date()).getDay() - 1).toString() + (new Date()).getMonth().toString() + (new Date()).getDate().toString()}</div>
                    <div>Today open : ${5 + ((new Date()).getDay()).toString() + ((new Date()).getMonth() + 2).toString() + ((new Date()).getDate() - 1).toString()}</div>
                </div>
            </div>

            {/******************PAGE 2******************/}
            <div className='page2 tabs'>
                <div id='navigation'>
                    <div className={(active == 0) ? 'active' : 'navigation-item'} id='chart' onClick={() => { setActive(0) }}>CHART</div>
                    <div className={(active == 1) ? 'active' : 'navigation-item'} id='stat' onClick={() => { setActive(1) }}>STATISTICS</div>
                    <div className={(active == 2) ? 'active' : 'navigation-item'} id='history' onClick={() => { setActive(2) }}>HISTORY</div>
                </div>
                <div id='page2-content'>
                    {
                        (active == 0) &&
                        <div className='tab chart'>CHART</div>
                    }
                    {
                        (active == 1) &&
                        <div className='tab statistics'>STATISTICS</div>
                    }
                    {
                        (active == 2) &&
                        <div className='tab history'>HISTORY</div>
                    }

                </div>
            </div>
            <div className='st-ft'>
                <Footer />
            </div>


        </section>
    );
}

export default Stock;