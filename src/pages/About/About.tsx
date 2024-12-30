import "./About.css"
import Founders from "./Founders/Founders"
import Main from './Main/Main'
import WhatDrivesUs from "./WhatDrivesUs/WhatDrivesUs"

const About = () => {
  return (
    <div className='about-wrapper'>
        <Main/>
        <WhatDrivesUs/>
        <Founders/>
    </div>
  )
}

export default About