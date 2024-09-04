import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className='bg-hero bg-center bg-cover h-[100vh] bg-fixed'>
        <NavBar/>
     <div className="text-center pt-80 ">

        <div className="home-text">
        <div>
     <h1 className='text-[112px]'>DRONOTICZ</h1>
     </div>
    
     <div className="text-[32px]">
     ThE ERA OF DRONES
     </div>
     <div className="pt-5">
                    <div className="h-[5px] w-[60px] bg-black m-auto"></div>
                    </div>
        </div>
        
    </div>
    </div>
  )
}

export default Hero