import React from 'react'
import './HomeInt.css'
import certificate from "./VoidHacks/certificate.jpg"
import sgpa from "./VoidHacks/cgpa.jpg"
import assign from "./VoidHacks/assign.jpg"
import logo from "./VoidHacks/Logo.png"
import home from "./VoidHacks/Logo.png"

function HomePage() {
  return (
    <>
      <nav className="top1">
        <div className="nav-sub1">
            <img src={logo} className="Logo" />
        </div>
        <div className='home-content'>
              <div className='certificate-div'>
                <div className="nav-sub2">
                    <img src={certificate} alt='certificate image' />
                </div>
              </div>
              <div className='assignment-div'>
                <div className="nav-sub4">
                    <img src={assign} alt="assignment image" />
                </div>
              </div>
              <div className='sgpa-div'>
                <div className="nav-sub3">
                    <img src={sgpa} alt="sgpa image" />
                </div>
              </div>
              <div className='next-div'>
                <div className="nav-sub3">
                    <img src={sgpa} alt="sgpa image" />
                </div>
              </div>
              <div className='next-to-next-div'>
                <div className="nav-sub3">
                    <i className='fa fa-home' />
                </div>
              </div>
            </div>
    </nav>
    </>
  )
}

export default HomePage