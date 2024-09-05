import React from 'react'
import drone1 from '../Images/drone1.jpg'
import drone2 from '../Images/drone2.jpg'
import drone3 from '../Images/drone3.jpg'
import drone4 from '../Images/drone4.jpg'

const Articles = () => {
  return (
    <div className="bg-[#f8f8f8] py-40 h-[100vh]  " id="articles ">
        <div className='text-center '>
            <h1 className='text-[32px] uppercase'>Latest Articles</h1>
            <div className='py-10'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
        </div>
        
      <div className='grid grid-cols-4 px-9 pt-14'>
        <div className='w-[400px] bg-[#f8f8f8] m-10 shadow-lg'>
            <img src={drone1} alt="" />
            <div className='card-content'>
            <div className='py-10'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
                <div className='text-center'>
                    <p> How  to automate
                    surveillance drones </p>
                </div>

            </div>

        </div>
        <div className='w-[400px] h-[500px] bg-[#f8f8f8] m-10 shadow-lg'>
            <img src={drone2} alt="" />
            <div className='card-content'>
                <div className='py-10'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
                
                <div className='text-center'>
                    <p> Robotics and Artificial Intelligence </p>
                </div>

            </div>

        </div>
        <div className='w-[400px] bg-[#f8f8f8] m-10 shadow-lg'>
            <img src={drone3} alt="" />
            <div className='card-content'>
            <div className='py-10'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
                <div className='text-center'>
                    <p className='text-[16px]'> Improving Lives through Robotic Prosthetics </p>
                </div>

            </div>

        </div>
        <div className='w-[400px] bg-[#f8f8f8] m-10 shadow-lg'>
            <img src={drone4} alt="" />
            <div className='card-content'>
            <div className='py-10'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                 </div>
                </div>
                <div className='text-center '>
                    <p className='text-[16px] font-light'> Power of Robotics in Agriculture </p>
                </div>

            </div>

        </div>
       
        

      </div>



    </div>
  )
}

export default Articles