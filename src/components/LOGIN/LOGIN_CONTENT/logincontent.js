import React, {useState, useEffect, useLayoutEffect} from 'react';
import './logincontent.css';
import { useForm } from "react-hook-form";
import useParams from "react-router-dom";
import $ from 'jquery'

function LoginContent(){
    const [show,setShow]=useState(false)
    const Show = () =>{
        setShow(true)
        $('#password').attr("type","text")
    }
    const Hide = () =>{
        setShow(false)
        $('#password').attr("type","password")
    }

    // form handle 
    const {register, handleSubmit, formState: {errors}, watch} = useForm()
    function onSubmit(data){
        console.log(data)
    }


      return (
          <div className='LoginContent'>
              <div id='empty'></div>
              <div id='login-body'>
                 <div id='login-form'>
                     <h2>LOG IN TO BLOVER</h2>
                     <div id='usn-fnc'><input id='username' type='text' placeholder='Enter your email or username'
                     {...register('username', { required: true})}
                     />
                     </div>
                     {errors.password && <div className='login-error'>*This field is required</div>}
                     <div id='pw-fnc'>
                         <input id='password' type='password' placeholder='Enter your password'
                         {...register('password', { required: true})}
                         />
                         
                         <div className='show-hide'>{
                          (show == false) ? <i className="material-icons" onClick={Show}>visibility_off</i> : <i className="material-icons" onClick={Hide}>visibility_on</i>
                         } 
                         </div>                         
                     </div>
                     {errors.password && <div className='login-error'>*This field is required</div>}
                     <div className='submit' onClick={handleSubmit(onSubmit)}>SUBMIT</div>
                     <div id='ask-line'>DON'T HAVE AN ACCOUNT ?</div>
                     <div className='register' onClick={() => {window.location = './signup'}}>REGISTER</div>
                 </div>

              </div>

          </div>
      )
}
export default LoginContent;