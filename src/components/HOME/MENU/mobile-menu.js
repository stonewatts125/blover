import { useContext } from 'react'
import $ from 'jquery'
import './mobile-menu.css'
import { StockContext } from '../stockcontext'

function MobileMenu() {

    const { contextmenu } = useContext(StockContext)
    const [menu, setMenu] = contextmenu

    function closeMenu() {
        $('.MobileMenu').addClass('fadeOut')

        setTimeout(function () {
            setMenu(false)
        }, 600)

    }

    return (

        <section className='MobileMenu'>
            <div id='top-Mmenu'>
                <div id='close'><span class="material-icons" onClick={closeMenu}>close</span></div>
                <div id='Mmenu-content'>
                    <div className='Mmc-item' onClick={() => { window.location = "" }}>REAL ESTATE</div>
                    <div className='Mmc-item' onClick={() => { window.location = "" }}>ARCHITECTURE</div>
                    <div className='Mmc-item' onClick={() => { window.location = "" }}>STONE</div>
                    <div className='Mmc-item' onClick={() => { window.location = "" }}>INTERIOR</div>
                    <div className='Mmc-item' onClick={() => { window.location = "" }}>TECHNOLOGY</div>
                    <div className='Mmc-item' onClick={() => { window.location = "" }}>HOB</div>
                    <div className='Mmc-item' onClick={() => { window.location = "/search" }}>SEARCH</div>
                    <div className='Mmc-item' onClick={() => { window.location = "/login" }}>LOG IN</div>
                    <div className='Mmc-item' onClick={() => { window.location = "/signup" }}>SIGN UP</div>
                </div>
            </div>

        </section>



    )

}
export default MobileMenu