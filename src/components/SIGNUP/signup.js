import React, { useState, useRef, useContext } from 'react'
import Footer from '../HOME/FOOTER/footer'
import NavBar2 from '../HOME/NAV BAR/navbar2'
import Menu from '../HOME/MENU/menu'
import './signup.css'
import { useForm } from "react-hook-form";
import $ from 'jquery'
import Background from '../HOME/BACKGROUND/background'
import MobileNav from '../HOME/NAV BAR/mobile-nav'

function SignUp() {
    const [show, setShow] = useState(false)
    const Show = () => {
        setShow(true)
        $('#pwd').attr("type", "text")
    }
    const Hide = () => {
        setShow(false)
        $('#pwd').attr("type", "password")
    }
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    function onSubmit(data) {
        data.id = 'BLVRU$R' + Math.ceil((Math.random() * 100000)).toString() + (new Date().getFullYear()).toString() + (new Date().getMonth()).toString() + (new Date().getDate()).toString() + (new Date().getHours()).toString() + (new Date().getMinutes()).toString() + (new Date().getSeconds()).toString()
        console.log(JSON.stringify(data))
    }


    /*****************PASSWORD CÒNFIRMATION**************** */
    const password = useRef('');
    password.current = watch("password", "");
    /***************************************************** */

    const width = window.innerWidth
    return (
        <section className='Signup'>
            <Background />
            {(width <= 600) ? <MobileNav/> :<NavBar2 />}
            <div className='signup-body'>

                <div className='signup-form'>
                    <div className='signup-ttl'>SIGN UP TO BLOVER</div>
                    <div className='input-area'>
                        <div className='signup-input'>
                            <input type='text' placeholder='First Name'
                                style={{ textTransform: 'capitalize' }}
                                {...register('firstName', { required: true })}
                            />
                        </div>

                        {errors.firstName && <p className='err'>*This field is required</p>}

                        <div className='signup-input'>
                            <input type='text' placeholder='Last Name'
                                style={{ textTransform: 'capitalize' }}
                                {...register('lastName', { required: true })}
                            />
                        </div>

                        {errors.lastName && <p className='err'>*This field is required</p>}

                        <div className='signup-input'>
                            <input type='text' placeholder='Username'
                                {...register('userName', { required: true })}
                            />
                        </div>

                        {errors.userName && <p className='err'>*This field is required</p>}

                        <div className='signup-input'>
                            <input type='text' placeholder='Email'
                                {...register('email', { required: '*This field is required', pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: '*Invalid email' } })}
                            />
                        </div>

                        {errors.email && <p className='err'>{errors.email.message}</p>}

                        <div className='signup-input pw-fc'>
                            <input id='pwd' type='password' placeholder='Enter your password'
                                {...register('password', { required: '*This field is required', minLength: { value: 8, message: '*Password length at least 8 character' } })}
                            />

                            <div className='show-hide'>{
                                (show == false) ? <i className="material-icons" onClick={Show}>visibility_off</i> : <i className="material-icons" onClick={Hide}>visibility_on</i>
                            }
                            </div>
                        </div>

                        {errors.password && <p className='err'>{errors.password.message}</p>}

                        <div className='signup-input cfmpwd'>
                            <input type='password' placeholder='Confirm password'
                                {...register('passconfirm', { required: '*This field is required', validate: value => value === password.current || "*Password doesn't match" })}
                            />
                        </div>

                        {errors.passconfirm && <p className='err'>{errors.passconfirm.message}</p>}

                        <div id='agreewterm'>
                            <label className="container">
                                <input type="checkbox"
                                    {...register('deal', { required: true })}
                                />
                                <span className="checkmark"></span> <p>I agree with Privacy and Policy</p>
                            </label>
                        </div>

                        {errors.deal && <p className='err'>*This is required</p>}

                        <div id='submit-signup' onClick={handleSubmit(onSubmit)}>SUBMIT</div>

                    </div>

                </div>
            </div>
            <Footer />
        </section>
    )
}

export default SignUp