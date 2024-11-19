import React, { useState } from 'react'
import './form.css'
import logo from "./Logo.png"
function FormBackend() { 
  // To change the password type 
  let [ passType , setpassType ] = useState("password")
  // to change the eye to slash eye
  let [ eye , seteye ] = useState("fa-solid fa-eye-slash")
  return (
    <>
        {/* Whole body, full page */}
        <div className='formBody'>
          {/* main doc */}
          <main>
              {/* Heading */}
              <div className="imagediv">
                <img className='imageLogo' src={logo}></img>
              </div>
              <div className='title'>
                <h2 className='welcome'>Welcome to Career Setu!</h2>
                {/* content page including inputs and button */}
                <span className='tagline'>content page including inputs and button</span>
              </div>
              <div className='content'>
                <div className='inputBox'>
                  <span className="Lsdei">Username : </span>
                  <input type="text" className="UName" placeholder='Enter Your Username'/><br/>
                </div>
                <div className='passBox'>
                  <span className='Lsdei'>Password : </span>
                  {/* after clicking on the eye section eye becomes eyeslash and the password wil be visible */}
                  <input type={passType} className="Pass" placeholder='Enter Your Password'/>
                  <div className='eye' >
                    <i class={eye} onClick={
                    ()=>{
                      setpassType((passType == "text") ? "password" : "text")
                      seteye( (passType == "password") ? "fa-solid fa-eye-slash" : "fa-solid fa-eye" )
                    }
                    }></i>
                  </div>
                </div>
                  <button className="combtn">Login</button><br/>
                  <span className='forgot_password' onMouseOver={(e) => e.target.style.color = "blue"} onMouseOut={(e) => e.target.style.color = "white"}><a href='#'>Forgot Password?</a></span>
              </div>
          </main>
        </div>
    </>
  )
}

export default FormBackend