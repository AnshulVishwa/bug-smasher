import React from 'react'

function FormBackend() { 
  return (
    <>
        <div>
            <h1>Hello GUyz</h1>
            <div>
                <span>Username :</span><input type="text" className="UName" placeholder='Enter your username'/><br/>
                <span>Password :</span><input type="text" className="Pass" placeholder='Enter your password'/><br/>
                <button className="combtn">Log In</button>
            </div>
        </div>
    </>
  )
}

export default FormBackend