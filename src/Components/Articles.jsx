import React from 'react'
import drone1 from '../Images/drone1.jpg'
import drone2 from '../Images/drone2.jpg'
import drone3 from '../Images/drone3.jpg'
import drone4 from '../Images/drone4.jpg'

const Articles = () => {
  return (
    <div className="bg-[#f8f8f8] pt-[50px] h-[80vh]" id="articles ">
        
      <div className='grid grid-cols-4 px-9 pt-14'>
        <div className='w-[400px] bg-[#f8f8f8] m-10'>
            <img src={drone1} alt="" />
            <div className='card-content'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                </div>
                <div>
                    <p> How to automate surveilance drones </p>
                </div>

            </div>

        </div>
        <div className='w-[400px] bg-[#f8f8f8] m-10'>
            <img src={drone2} alt="" />
            <div className='card-content'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                </div>
                <div>
                    <p> How to automate surveilance drones </p>
                </div>

            </div>

        </div>
        <div className='w-[400px] bg-[#f8f8f8] m-10'>
            <img src={drone3} alt="" />
            <div className='card-content'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                </div>
                <div>
                    <p> How to automate surveilance drones </p>
                </div>

            </div>

        </div>
        <div className='w-[400px] bg-[#f8f8f8] m-10'>
            <img src={drone4} alt="" />
            <div className='card-content'>
                <div className='h-[5px] w-[60px] bg-black m-auto'>
                 
                </div>
                <div>
                    <p> How to automate surveilance drones </p>
                </div>

            </div>

        </div>
       
        

      </div>



    </div>
  )
}

export default Articles