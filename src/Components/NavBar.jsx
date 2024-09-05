import React from 'react'

const NavBar = () => {
  return (
    <div className="">
    <nav className='flex justify-between px-10 py-10'>
        <h2 className='text-[32px]'>D<span className='text-white'>Z</span></h2>
        <ul className='flex space-x-7 text-[16px] pt-5'>
            <li >
                <a href="#Aboutus">ABOUT</a>
            </li>
            <li>
                <a href="#articles">ARTICLES</a>
            </li>
        </ul>
        <a href="#Subcription" >
            <button type="button" className='border-2 border-black py-1 px-7'>SUBCRIBE</button>
        </a>
        
    </nav>
</div>
  )
}

export default NavBar