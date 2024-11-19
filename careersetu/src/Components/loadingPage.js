import React, { useEffect } from 'react'
import logo from "./Logo.png"
import "./load.css"
import { Link, useNavigate } from 'react-router-dom'
function LoadingPage() {
    const navigate = useNavigate();
    setTimeout( ()=>{
        navigate("/home")
    } , 2000 )
  return (
    <main>
        <img className='imageLoad' src={logo}/>
    </main>
  )
}

export default LoadingPage