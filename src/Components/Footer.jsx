import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:flex lg:justify-between 2xl:py-10  xl:py-4'>
        <div className='flex justify-center pt-8 gap-5 px-8 '>
        <FaFacebook className='text-[#CBDEEC] size-10 xl:size-12 2xl:size-20'  />
        <FaInstagram className='text-[#CBDEEC]  size-10 xl:size-12 2xl:size-20'/>
        <FaPinterest className='text-[#CBDEEC] size-10 xl:size-12 2xl:size-20'/>

        </div>
        <div >
        <nav className='flex justify-center gap-12 px-10 py-10 xl:pb-2'>
        
        <ul className='flex space-x-7 text-[12px] xl:pb 2xl:text-[32px] xl:text-2xl 2xl:text-4xl '>
            <li className=''>
                <a href="#about">ABOUT</a>
            </li>
            <li>
                <a href="#articles">ARTICLES</a>
            </li>
        </ul>
        <a href="#Subcription" className='border-2 border-black text-sm  px-8 2xl:text-[32px] xl:text-2xl 2xl:py-1'>
            <button type="button">SUBCRIBE</button>
        </a>
        
    </nav>
        </div>
    </div>
  )
}

export default Footer