import React from 'react'

const Substriction = () => {
  return (
    <div className='bg-[#f8f8f8] text-center py-10'>
        <h3 className='text-[32px] py-3'>SUBCRIBE</h3>
    <h5 className='font-semibold pb-3'>Sign-up to our newsletter</h5>
    <input type="email" placeholder="Your Email" name="email"
    className='bg-white h-[50px] border-2 border-[#f8f8f8] p-3 w-2/5 py-8'
    />
    
    <div className="py-4">
    <button className="border-2 border-black px-9 py-1">Submit</button>
    </div>
    </div>
  )
}

export default Substriction