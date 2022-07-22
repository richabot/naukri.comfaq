import React, { useState } from 'react'
// eslint-disable-next-line
//import Page2 from './Page2';
import { Link, useNavigate } from "react-router-dom";
const Page1 = () => {

    const [text, setText] = useState('');
    let navigate = useNavigate();
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(event.target.value)
          setText(event.target.value)
          navigate('/page2');
      <Link to={"/page2"}></Link>
        }
    }
  return (
    <div>
        <input type=""  placeholder='Write here' onKeyDown={handleKeyDown}
        defaultValue={text} />
    </div>
  )
}

export default Page1