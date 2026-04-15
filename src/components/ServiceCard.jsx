import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { LuFileSpreadsheet } from "react-icons/lu";

const ServiceCard = () => {
    return (
        <div className='bg-[#F5F5F5] h-211 w-screen  '>
            <h1 className='text-center relative top-34 font-bold text-[50px] text-(--blue1)' >Smart Academy offers <br /> services like</h1>
            <div className='flex w-full relative top-34 justify-around p-2'>
                <div className='bg-(--white) mt-15 md:w-70 h-98 flex flex-col ml-1 items-center justify-center rounded-xl text-center '>
                  <div className='lg:w-15 mt-6  w-12 h-12 lg:h-15 rounded-2xl bg-(--blue2) flex justify-center items-center'><GiTeacher size={28} color='white'/></div>
                   <h1 className='font-bold text-(--black)  text-[20px] mb-4 px-6 pt-10 w-45 text-center '>Teachers Prefesional</h1>
                    <p className='text-xs  text-(--black) md:text-lg  pb-4'>Lorem ipsum dolor <br />sit amet <br />consectetur <br />adipisicing elit.</p>
                </div>
                <div className='bg-(--white) ml-3  md:w-70 mt-15 flex flex-col items-center justify-center rounded-xl text-center '> 
                    <div className='lg:w-15 mt-6 lg:h-15 rounded-2xl w-12 h-12 bg-(--pink) flex justify-center items-center'><SiGoogleclassroom size={30} color='white'/></div>
                    <h1 className='font-bold  text-(--black) text-[20px] mb-4 px-6 pt-10 w-45 text-center '>Online Course</h1>
                    <p className='text-xs text-(--black)  md:text-lg pb-4'>Lorem ipsum dolor <br />sit amet <br />consectetur <br />adipisicing elit.</p>
                </div>
                <div className='bg-(--white) ml-3  md:w-70 mt-15 flex flex-col items-center justify-center rounded-xl text-center '> 
                   <div className='lg:w-15  lg:h-15 w-12 mt-6 h-12 rounded-2xl bg-(--blue2) flex justify-center items-center'><TbCertificate size={32} color='white' /></div>
                    <h1 className='font-bold text-(--black)  text-[20px] mb-4 px-6 pt-10 w-45 text-center '>Certificate Course</h1>
                    <p className='text-xs  text-(--black) md:text-lg pb-4'>Lorem ipsum dolor <br />sit amet <br />consectetur <br />adipisicing elit.</p>
                </div>
                <div className='bg-(--white) mr-1 ml-3  md:w-70 mt-15 flex flex-col items-center justify-center rounded-xl text-center '> 
                  <div className=' lg:w-15  text-  lg:h-15 w-12 mt-6 h-12 rounded-2xl bg-(--pink)  flex justify-center items-center'><LuFileSpreadsheet size={32} color='white'/></div>
                    <h1 className='font-bold text-(--black)  text-[20px] mb-4 px-6 pt-10 w-40 text-center '>Better value</h1>
                    <p className='text-xs text-(--black)  md:text-lg pb-4'>Lorem ipsum dolor <br />sit amet <br />consectetur <br />adipisicing elit.</p>
                    </div></div>
                    <button className='bg-(--pink)  relative top-36 rounded-full  text-(--white) w-54 text-[20px] font-semibold p-1 md:p-4 m-10 text-center ml-162'>  Read More</button>
        </div>
    )
}

export default ServiceCard


