import React from 'react'
import logo from "../VoidHacks/Logo.png"
import "./profile.css";
import student from "./Student button.png"
import teacher from "./Teacher button.png"
import admin from "./entenal mentor.png"
import { useNavigate } from 'react-router-dom';
function IndexPage() {
    const go = useNavigate();
  return (
    <div className='body'>
        <main className='main'>
            <div className='logo'>
                <img className='logoimage' src={logo} ></img>
            </div>
            <div className='content content-div'>
                <div onClick={()=>go("/home")} className='box student'>
                    <img className='imageImage' src={student}></img>
                </div>
                <div onClick={()=>go("/home")} className='box teacher'>
                    <img className='imageImage' src={teacher}></img>

                </div>
                <div onClick={()=>go("/home")} className='box admin'>
                    <img className='imageImage' src={admin}></img>
                </div>
            </div>
        </main>
    </div>
  )
}

export default IndexPage