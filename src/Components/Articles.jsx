import React from 'react'
import drone1 from '../Images/drone1.jpg'
import drone2 from '../Images/drone2.jpg'
import drone3 from '../Images/drone3.jpg'
import drone4 from '../Images/drone4.jpg'

const Articles = () => {
  return (
    <div  className="bg-[#f8f8f8]  py-10  xl:py-40 2xl:py-56" id="articles">
        <div className='text-center '>
            <h1 className='text-[32px] uppercase'>Latest Articles</h1>
            <div className='py-10'>
                <div className='h-[3px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
        </div>
        
      <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:space-x-10 2xl:px-10 '>
        <div className='size-[300px]  bg-[#f8f8f8]  shadow-lg  2xl:size-[600px] kobus:size-[450px] pc:h-[460px] pc:w-[400px] '>
            <img src={drone1} alt="" />
            <div className='card-content'>
            <div className='py-5 2xl:py-10 kobus:py-6'>
                <div className='h-[5px] w-[60px] bg-black m-auto '>
                 
                 </div>
                </div>
                <div className='text-center 2xl:text-3xl pc:'>
                    <p> How  to automate
                    surveillance drones </p>
                </div>

            </div>

        </div>
        <div className='size-[300px] 2xl:size-[600px] kobus:size-[450px] pc:h-[460px] pc:w-[400px]  bg-[#f8f8f8] m-10 shadow-lg'>
            <img src={drone2} alt="" />
            <div className='card-content'>
                <div className='py-5 2xl:py-10 kobus:py-6'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
                
                <div className='text-center 2xl:text-3xl'>
                    <p> Robotics and Artificial Intelligence </p>
                </div>

            </div>

        </div>
        <div className='size-[300px] bg-[#f8f8f8] m-10 shadow-lg 2xl:size-[600px] kobus:size-[450px] pc:h-[460px] pc:w-[400px] '>
            <img src={drone3} alt="" />
            <div className='card-content'>
            <div className='py-5 2xl:py-10 kobus:py-6'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
                <div className='text-center 2xl:text-3xl 2xl:px-5'>
                    <p className=''> Improving Lives through Robotic Prosthetics </p>
                </div>

            </div>

        </div>
        <div className='size-[300px]  bg-[#f8f8f8] m-10 shadow-lg 2xl:size-[600px] kobus:size-[450px] kobus:gap-2 pc:h-[460px] pc:w-[400px] pc:space-x-3'>
            <img src={drone4} alt="" />
            <div className='card-content'>
            <div className='py-5 2xl:py-10 kobus:py-6'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
                <div className='text-center 2xl:text-3xl'>
                    <p className=''> Power of Robotics in Agriculture </p>
                </div>

            </div>

        </div>
       
        

      </div>



    </div>
  )
}

export default Articles