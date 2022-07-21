import React from 'react'
import "./Slider.css"
import "./card.css"

import 'react-responsive-carousel/lib/styles/carousel.min.css'
////import {Carousel} from 'react-responsive-carousel'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faHeart} from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel'
import list from './data'
import "./Slider.css"
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import list2 from './data1'
const Cardcarousel = () => {
  return (
    <div>
        <div className="fourth_box">
    <h2 className='left1'>Top experiences in Tripadvisor </h2>
   
   <div className="boxbest">
   <Carousel cols={4} rows={1} gap={5} loop
    >
{list.map((item) => {
 return(
  <Carousel.Item>
    {/* <div className="flexit" key={item.id}>
   <div className='container'>
   <img className="imagefix" src={item.img} alt="abc" />
   <p className="top-left">🤍</p>
     
   </div>
  
      <h3>{item.title}</h3>
      <p className="ptagfix"> {item.price}</p>
      <div className="carrousel-reviews">
         
              <p>{item.amount}</p>
            </div>
    </div> */}
     <section  className="flexit"  key={item.id} class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src={item.img} alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={farHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/">{item.title}</a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>Tours et plateformes d'observation, Monuments & Points d'intérêt</p>
        </div>
        </section>
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

export default Cardcarousel