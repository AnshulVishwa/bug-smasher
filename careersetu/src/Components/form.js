import React, { useState } from 'react'
import './form.css'
function FormBackend() { 
  let [ passType , setpassType ] = useState("text")
  return (
    <>
        <div className='formBody'>
          <main>
              <h1>Welcome to Carrer Setu!</h1>
              <div className='content'>
                <div className='inputBox'>
                  <span className="Lsdei">Username : </span>
                  <input type="text" className="UName" placeholder='Enter your username'/><br/>
                </div>
                <div className='passBox'>
                  <span className='Lsdei'>Password : </span>
                  <input type={passType} onClick={()=>setpassType((passType == "text") ? "password" : "text")} className="Pass" placeholder='Enter your password'/>
                  <div className='eye'>
                    <i class="fa-solid fa-eye-slash"></i>
                  </div>
                </div>
                  <button className="combtn">Log In</button><br/>
                  <span className='forgot_password'><a href='#'>Forgot Password?</a></span>
              </div>
          </main>
        </div>
    </>
  )
}

export default FormBackend