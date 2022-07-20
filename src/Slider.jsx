import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
 // eslint-disable-next-line
import list from './data'
import "./Slider.css"
const Slider = () => {
  return (
    <div className="fourth_box">
    <h2 className="quick">BESTSELLERS</h2>
   <div className="boxbest">
   <Carousel cols={4} rows={1} gap={5} loop
    >
{list.map((item) => {
 return(
  <Carousel.Item>
    <div className="flexit" key={item.id}>
      <img className="imagefix" src={item.img} alt="abc" />
      <h3>{item.title}</h3>
      <p className="ptagfix">₹ {item.price}</p>
    
    </div>
  </Carousel.Item>
      )
}
)}
{/* ... */}
</Carousel>
   </div>
</div>
  )
}

export default Slider