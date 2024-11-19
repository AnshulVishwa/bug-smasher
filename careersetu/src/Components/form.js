import React, { useState } from 'react'
import './form.css'
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
              <h1>Welcome to Carrer Setu!</h1>
              {/* content page including inputs and button */}
              <div className='content'>
                <div className='inputBox'>
                  <span className="Lsdei">Username : </span>
                  <input type="text" className="UName" placeholder='Enter your username'/><br/>
                </div>
                <div className='passBox'>
                  <span className='Lsdei'>Password : </span>
                  {/* after clicking on the eye section eye becomes eyeslash and the password wil be visible */}
                  <input type={passType} className="Pass" placeholder='Enter your password'/>
                  <div className='eye' >
                    <i class={eye} onClick={
                    ()=>{
                      setpassType((passType == "text") ? "password" : "text")
                      seteye( (passType == "password") ? "fa-solid fa-eye-slash" : "fa-solid fa-eye" )
                    }
                    }></i>
                  </div>
                </div>
                  <button className="combtn">Log In</button><br/>
                  <span className='forgot_password' onMouseOver={(e) => e.target.style.color = "blue"} onMouseOut={(e) => e.target.style.color = "white"}><a href='#'>Forgot Password?</a></span>
              </div>
          </main>
        </div>
    </>
  )
}

export default FormBackend