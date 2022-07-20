import React from 'react'
import "./ThingsToDO.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import {Carousel} from 'react-responsive-carousel'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPencil,faHeart,faBell } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel'
// import list from './data'
import "./Slider.css"
import list2 from './data1'
const ThingsToDo = () => {
  return (
    <div className='main'>
   

        <div id="navbar">
        <div id="top-nav-container">
            <div class="logo">
                <img class="logo-img" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="trip advisor logo: owl eyes and beak" />
                
            </div>

            <ul class="nav-link-container">
                <li class="top-nav-link">
                  
                </li>
                <li class="top-nav-link">
                    <a href="/">
                        <span>

 
 <FontAwesomeIcon icon={faPencil} /></span>
                        <span>Review</span>
                    </a>
                </li>
                <li class="top-nav-link">
                    <a href="/">
                        <span>
                        <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span>Trips</span>
                    </a>
                </li>
                <li class="top-nav-link">
                    <a href='/'>
                        <span> <FontAwesomeIcon icon={faBell} /></span>
                        <span>Alerts</span>
                    </a>
                </li>
                <li class="top-nav-link" className="sign">
                    <button href="" class="btn11">
                        Sign In
                    </button>
                </li>
            </ul>
        </div>
        {/* <div id="bottom-nav-container">
            <ul class="nav-link-container">
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Hotels</span>
                        <span> <FontAwesomeIcon icon={faBed} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Vacation Rentals</span>
                        <span> <FontAwesomeIcon icon={faKey} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Things to Do</span>
                        <span> <FontAwesomeIcon icon={faList} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Restaurants</span>
                        <span> <FontAwesomeIcon icon={faSpoon} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>Travel Forums</span>
                        <span> <FontAwesomeIcon icon={faMessage} /></span>
                    </a>
                </li>
                <li class="bottom-nav-link">
                    <a href="/">
                        <span className='up'>More</span>
                        <span> <FontAwesomeIcon icon={faCircleDot} /></span>
                    </a>
                </li>
            </ul>

        </div> */}


<div className='lowrBox'>
{/* filtr */}
<div className='hoverBox'>
    {/* <h3>MAKEUP</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">MAKEUP 
</button>
<div class="dropdown-content">
<a href="###">LIPS</a>
<a href="###">FACE</a>
<a href="###">EYE</a>
</div> </div> </div> 
    {/* <h3>BRUSHES</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">BRUSHES 
</button>
<div class="dropdown-content">
<a href="###">FACE BRUSHES</a>
<a href="###">EYE BRUSHES</a>
</div> </div> </div>
    {/* <h3>SKINCARE</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">SKINCARE 
</button>
<div class="dropdown-content">
<a href="###"> MOISTURIZERS</a>
<a href="###">SUNSCREEN</a>
<a href="###">SETTING MISTS</a>
<a href="###">COFFEE CULTURE RANGE</a>
<a href="###">SHEET MASK COMBO</a>
<a href="###">CITRUS GOT REAL RANGE</a>
<a href="###">AQUAHOLIC RANGE</a>
<a href="###">MASKS</a>
</div> </div> </div>
    {/* <h3>TRENDING</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">TRENDING 
</button>
<div class="dropdown-content">
<a href="###">SUGER MARCH STATION</a>
<a href="###">MAKEUP KITS</a>
<a href="###">BESTSELLERS</a>
<a href="###">SUGAR SETS</a>
<a href="###">VELUE SETS</a>
</div> </div> </div>
    {/* <h3>BLOG</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
<button class="dropbtn">BLOG 
</button>
<div class="dropdown-content">
<a href="###">FEATURED</a>
<a href="###">MACKUP</a>
<a href="###">SKINCARE</a>
</div> </div> </div>
    {/* <h3>OFFERS</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
                              {/* orignal link usewd */}
<button class="dropbtn"><a href="/"> OFFERS </a>    
</button>
</div> </div>
    {/* <h3>STORES</h3> */}
    <div className="topnav" id="myTopnav"><div class="dropdown">
                                 {/* orignal link usewd */}
<button class="dropbtn"><a href="/"> STORES </a>    
</button>
</div> </div>
</div>
        </div>
 
    </div>
    <div className='flex1'>
   <p className='p1'>Asia {">"}India {">"}Telangana {">"}Hyderabad{">"} DistrictHyderabad {">"}Places to visit in Hyderabad</p>
        <p>Top Things to Do in Hyderabad, Telangana</p>
   </div>
       <div className='flex1'>
       <h1 >Places to Visit in Hyderabad</h1>
       <button className='btn11'>Join</button>
       </div>

{/* slider1 */}

<div className="fourth_box">
    <h2 className='leftrech1'>Top destinations for beach lovers </h2>
    <p className='leftrec'>Recommended based on your activity</p>
   <div className="boxbest">
   <Carousel cols={4} rows={1} gap={5} loop
    >
{list2.map((item) => {
 return(
  <Carousel.Item>
    <div className="flexit" key={item.id}>
  
  <div className='container'>
  <img className="imagefix" src={item.img} alt="abc" />
  
     

  
  <h3 className='bottom-right'>{item.title}</h3>
  </div>
      
    </div>
  </Carousel.Item>
      )
}
)}
{/* ... */}
</Carousel>
   </div>
</div>


    </div>
   
  



  )
}

export default ThingsToDo