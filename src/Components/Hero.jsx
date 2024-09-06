import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className='bg-hero bg-center  bg-cover h-[50vh] md:h-[100vh] '>
        <NavBar/>
     <div className="text-center  xl:pt-64 pt-24 md:pt-48 2xl:pt-[550px] kobus:pt-72">

        <div className="md:space-y-10">
        <div >
     <h1 className=' text-3xl md:text-6xl 2xl:text-[112px]'>DRONOTICZ</h1>
     </div>
    
     <div className=" text-md font-light py-3 md:text-3xl 2xl:text-[40px]">
     THE ERA OF DRONES
     </div>
     <div className="pt-3">
                    <div className="h-[3px] w-[50px] bg-black m-auto 2xl:w-[150px] 2xl:h-[5px]"></div>
                    </div>
        </div>
        
    </div>
    </div>
  )
}

export default Hero