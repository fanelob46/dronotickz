import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex pt-8 gap-5 px-8'>
        <FaFacebook className='text-[#CBDEEC] size-10' />
        <FaInstagram className='text-[#CBDEEC]  size-10'/>
        <FaPinterest className='text-[#CBDEEC] size-10'/>

        </div>
        <div >
        <nav className='flex gap-12 px-10 py-10'>
        
        <ul className='flex space-x-7 text-[24px]'>
            <li className=''>
                <a href="#Aboutus">ABOUT</a>
            </li>
            <li>
                <a href="#articles">ARTICLES</a>
            </li>
        </ul>
        <a href="#Subcription" className='border-2 border-black  py-1 px-8'>
            <button type="button">SUBCRIBE</button>
        </a>
        
    </nav>
        </div>
    </div>
  )
}

export default Footer