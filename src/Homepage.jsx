import "./Homepage.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
////import {Carousel} from 'react-responsive-carousel'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass ,faUser,faHeart,fasearch, faSearch,faHand} from '@fortawesome/free-solid-svg-icons'

import Carousel from 'react-grid-carousel'

const Homepage = () => {
  
    
  return (
   <div >
   
<div className="blue">
    <h1 className="hi">Hi, How Can We Help You ?</h1>
   <div className="flex1">
   <input type="text" name=""  className="input1"  placeholder="Search by keyword" id="" />
      <div className="glass">

 
<FontAwesomeIcon className="magnify"icon={faMagnifyingGlass} /></div>
   </div>
</div>
<div className="darkblue">
    <img  className="rocket" src="https://static.naukimg.com/s/4/110/i/rocket.png" alt="" />

    <h1 className="hi2">QUICK SOLUTION</h1>
    <h3 className="h1ptag">as per the recent search trend</h3>
    <div className="flex2">
<div className="flex3">
    <div className="q">Q</div>
        <div className="quick1">How can I delete Naukri account</div>
    
    
    </div> 
    <div className="flex3" > <div className="q">Q</div>
        <div  className="text quick1">How can I update/edit my Profile</div></div>
           {/* <div>I do now want any current employer to have access to my profile.How can i block a recruiter?</div> */}
    <div className="flex3"> <div className="q">Q</div>
        <div  className="quick1">Do i need to apply to a job or get an interview call?Recruiter asking me to pay to schedule interview for job</div></div>
        <div className="flex3"> <div className="q">Q</div>
        <div className="quick1">How can i delete someelse account</div></div>
        {/* <div>How can I update/edit my Profile</div>
        <div>Do i need to apply to a job or get an interview call?Recruiter asking me to pay to schedule interview for job</div> */}
    </div>
</div>

<br />
<br /><br />
<div className="browsebox">
    <h1 className="browseh1">BROWSE BY TOPIC</h1>
    <div className="flexit">
        <div>
            {/* <FontAwesomeIcon className="one" icon={faUser}/> */}
            <img className="imgicon" src="https://static.naukimg.com/s/4/110/i/1552719610_icon-6.png" alt="" />
            <h1 className="iconh1">Create Naukri Profile</h1>
        </div>
        <div>
            {/* <FontAwesomeIcon className="one" icon={faSearch}/> */}
            <img  className="imgicon" src="https://static.naukimg.com/s/4/110/i/1552719696_icon-2.png" alt="" />
            <h1 className="iconh1">Create Naukri Profile</h1>
        </div>
        <div>
            {/* <FontAwesomeIcon className="one" icon={faHand}/> */}
            <img  className="imgicon" src="https://static.naukimg.com/s/4/110/i/1552719713_icon-5.png" alt="" />
            <h1 className="iconh1">Create Naukri Profile</h1>
        </div>
        <div>
            {/* <FontAwesomeIcon className="one" icon={faUser}/> */}
            <img  className="imgicon" src="https://static.naukimg.com/s/4/110/i/1552719733_icon-4.png" alt="" />
            <h1 className="iconh1">Create Naukri Profile</h1>
        </div>
        <div>
            {/* <FontAwesomeIcon className="one" icon={faUser}/> */}
            <img  className="imgicon" src="https://static.naukimg.com/s/4/110/i/1552719780_icon-1.png" alt="" />
            <h1 className="iconh1">Create Naukri Profile</h1>
        </div>
        <div>
            {/* <FontAwesomeIcon className="one" icon={faUser}/> */}

            <img  className="imgicon" src="https://static.naukimg.com/s/4/110/i/1552719808_icon-8.png" alt="" />
            <h1 className="iconh1">Create Naukri Profile</h1>
        </div>
    
    </div>
</div>

<br />
<br /> <br /> <br />
<div className="fourth_box">
   <h1 className="hi1">Our Blogs</h1>
   <h1 className="h1ptag" >Maximizing Your career Potential</h1>
   <div className="boxbest">
   <Carousel cols={3} rows={1} gap={10} loop
    >

    
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
     <section  className="flexit"  class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src="https://static.naukimg.com/s/4/110/i/1552719014_interview-skills.jpg" alt="" />
            <div className="like-logo ">
           
              <i class="fa fa-heart" aria-hidden="true"></i>
           
            </div>
    
            
          </div>
          <a  href="/"><p  className="interview">Interview Advice</p></a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, repudiandae. Perspiciatis quaerat, deleniti deserunt consectetur magni ea at doloremque dolorem quis ipsa eligendi fuga quae sed modi eum alias ipsum.
            </p>
          </div>
         
          <div className="carrousel-reviews">
         
       
       </div>
        </div>
        </section>
  </Carousel.Item>

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
     <section  className="flexit"  class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src="https://static.naukimg.com/s/4/110/i/1552718943_business-analyst.jpeg" alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={faHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/"><p className="interview">Interview Address</p></a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, repudiandae. Perspiciatis quaerat, deleniti deserunt consectetur magni ea at doloremque dolorem quis ipsa eligendi fuga quae sed modi eum alias ipsum.
            </p>
          </div>
         
          <div className="carrousel-reviews">
         
       
       </div>
        </div>
        </section>
  </Carousel.Item>

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
     <section  className="flexit"  class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src="https://static.naukimg.com/s/4/110/i/1552719134_cv-resume-difference.jpg" alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={faHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/"><p className="interview">Interview Address</p></a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, repudiandae. Perspiciatis quaerat, deleniti deserunt consectetur magni ea at doloremque dolorem quis ipsa eligendi fuga quae sed modi eum alias ipsum.
            </p>
          </div>
         
          <div className="carrousel-reviews">
         
       
       </div>
        </div>
        </section>
  </Carousel.Item>

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
     <section  className="flexit"  class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src="https://static.naukimg.com/s/4/110/i/1552719088_how-to-neotiate-salary.jpeg" alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={faHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/"><p className="interview">Interview Address</p></a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, repudiandae. Perspiciatis quaerat, deleniti deserunt consectetur magni ea at doloremque dolorem quis ipsa eligendi fuga quae sed modi eum alias ipsum.
            </p>
          </div>
         
          <div className="carrousel-reviews">
         
       
       </div>
        </div>
        </section>
  </Carousel.Item>

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
     <section  className="flexit"  class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src="" alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={faHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/"><p className="interview">Interview Address</p></a>
         
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, repudiandae. Perspiciatis quaerat, deleniti deserunt consectetur magni ea at doloremque dolorem quis ipsa eligendi fuga quae sed modi eum alias ipsum.
            </p>
          </div>
         
          <div className="carrousel-reviews">
         
       
       </div>
        </div>
        </section>
  </Carousel.Item>

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
     <section  className="flexit"  class="carousel">
        <div class="card">
          <div className='container'>
            <img className="imagefix" src="" alt="" />
            <div className="like-logo ">
           {/* <span className='heart'> 🤍</span> */}
              {/* <i class="fa-regular fa-heart"></i> */}
              <FontAwesomeIcon  className="heart"icon={faHeart} />
              <i class="fa fa-heart" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
              {/* <FontAwesomeIcon icon={faHeart}/> */}
              {/* <FontAwesomeIcon  icon="fa-thin fa-heart" /> */}
              {/* <FontAwesomeIcon  class="fa">&#xf08a;</FontAwesomeIcon> */}
            </div>
    
            
          </div>
          <a href="/"><p className="interview">Interview Address</p></a>
          <div class="ranking">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p className='pricetag'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, repudiandae. Perspiciatis quaerat, deleniti deserunt consectetur magni ea at doloremque dolorem quis ipsa eligendi fuga quae sed modi eum alias ipsum.
            </p>
          </div>
         
          <div className="carrousel-reviews">
         
       
       </div>
        </div>
        </section>
  </Carousel.Item>


{/* ... */}
</Carousel>
   </div>
</div>


<div className="lastbox">
    <div >
      <div className="box23">
      <h1 className="left12">  ✉ Naukri FastForward Services</h1>
        <p className="pwhite">Toll Free Number: 1800-102-5557 , 1800-572-5557
            <br />
           Work Timings: 9.30 AM to 6.30 PM
           <br />
           Working Days: (Monday to Saturday)</p>
        <div>
        <p className="p2">Email Id: service@naukri.com
      <br />
International Clients: +91 120 4021100 (9.30 AM to 6.00 PM IST)</p>
        </div>
      </div>
    </div>
    
    <div className="whiteform">
        <h1 className="report">Report a Problem/Need Assistance</h1>
        <form action="" className="formit">
            <input className="input2" type="text" name="" id=""  placeholder="Enter Your Name"/>
          <br />
          <br />
           <div className="displayflex">
          <div>
          <input type="text" name=""  className="input3" id="" placeholder="Enter Your UserName/Email" />
        
          </div>
          <div>
          <input type="text" name="" className="nput3 input4" id="" placeholder="Enter Your Contact Number" />
        
          </div>
           </div>
      
        <input type="text" name="" className="input2" id="" placeholder="Select Area of Concern" />
        <br />
           <input type="text"  className="input2 " name="" id="" placeholder="Enter Your Feedback" />
           <br />
           <input type="submit" className="btnblue" name="Submit" id="" />

        </form>
    </div>
</div>
   </div>


////slider 2
  )
}

export default Homepage