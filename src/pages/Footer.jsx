import React from 'react'
import { FaBehance } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-(--blue2) w-full  lg:h-160 p-10  py-40 text-white '>
      <div  className=' lg:flex'>
        <div className='w-20vw lg:w-2/4  flex-col justify-center'>
         <div className='text-[40px] font-bold p-4'><h1>Smart Academy</h1></div>
         <div className=' md:text-xl md:text-lg p-4 lg:w-100  pb-14'>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Aut ullam placeat minus ad tempora perspiciatis ab  ipsamperspiciatis ab ipsam cum!</div>
         <div className='flex gap-8 relative left-4'>
             <FaBehance  size={30}/>
             <FaBasketball size={30} />
             <IoLogoFacebook   size={30}/>
             <RiInstagramFill   size={30}/>
         </div>
       </div>
      <div className='w-20vw lg:w-1/4 flex flex-col p-4 mt-4 '>
      <h1 className='font-medium text-3xl p-8 pl-4 lg:pl-8'>Quik Links</h1>
      <h2 className='text-xl p-4   md:p-4 lg:p-4 xl:pl-9  md:pl-10 '>Course</h2>
      <h2 className='text-xl p-4   md:p-4  lg:p-4 xl:pl-9 md:pl-10 '>Our Service</h2>
      <h2 className='text-xl p-4   md:p-4 lg:p-4 xl:pl-9 md:pl-10 '>Contact Us</h2>
      <h2 className='text-xl p-4   md:p-4 lg:p-4 xl:pl-9 md:pl-10 '>Blog</h2>
      </div>
      <div className='1/4'>
      <h1 className='font-medium text-3xl p-8'>Course</h1>
      <h2 className='text-xl p-4 md:p-4 lg:p-4 xl:pl-9 md:pl-12 pl-9'>Music Course</h2>
      <h2 className='text-xl p-4 md:p-4 lg:p-4 xl:pl-9 md:pl-12 pl-9'>Art And Carft Course</h2>
      <h2 className='text-xl p-4 md:p-4 lg:p-4 xl:pl-9 md:pl-12 pl-9'> Arobic Course</h2>
      <h2 className='text-xl p-4 md:p-4 lg:p-4 xl:pl-9 md:pl-12 pl-9'>Science Course</h2>
      </div>
      </div>
    </div>
  )
}

export default Footer
