import React from 'react'
import ayank from '../img/ayank.jpeg'

const About = () => {
    return (
       <div className="relative w-full h-screen flex justify-center items-center">
         {/* <div className="absolute z-20 bg-white w-3/6 py-2 px-3">
          <p className="text-xl text-center"></p>
         </div> */}
         <img src={ayank} alt="istri" className='w-full h-screen object-cover absolute left-0 right-0 top-0 blur-sm'/>
       </div>
    )
}

export default About
