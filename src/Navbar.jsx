import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'



import "./Navbar.css"

const  Navbar = () => {
  return (
    <div className='main'>
   

        <div id="navbar">
        <div id="top-nav-container">
            <div className="logo">
                <img className="logo-img1" src="https://static.naukimg.com/s/4/110/i/logo.png" alt="trip advisor logo: owl eyes and beak" />
             <div className='top1'>RECRUITER</div>
             <div  className='top1'>JOB SEEKER</div>
            </div>

            <ul className="nav-link-container">
                <li className="top-nav-link">
                  
                </li>
                <li className="top-nav-link">
                    <a href="/">
                  
                        <span>Reach Our</span>
                        <br />
                        <span>Experts</span>
                    </a>
                </li>
                
                
                <li className="top-nav-link sign">
                    <button href="" className="btn11">
                     Buy Our services
                    </button>
                </li>
            </ul>
        </div>
        
             
             



    </div>
   


    </div>
   
  



  )
}

export default Navbar