import React from 'react'

const NavBar = () => {
  return (
    <div className="">
    <nav className='flex justify-between px-10 py-10'>
        <h2 className='text-2xl'>D<span className='text-white'>Z</span></h2>
        <ul className='flex space-x-7'>
            <li >
                <a href="#Aboutus">ABOUT</a>
            </li>
            <li>
                <a href="#articles">ARTICLES</a>
            </li>
        </ul>
        <a href="#Subcription" className='border-2 border-black py-2 px-5'>
            <button type="button">SUBCRIBE</button>
        </a>
        
    </nav>
</div>
  )
}

export default NavBar