import React, { use, useRef, useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
  import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [menu, setmenu] = useState(false)
  const [navbar, setnavbar] = useState(true)
   const logo = useRef(null)
   const menu1 = useRef(null)
   const menu2 = useRef(null)
   const menu3 = useRef(null)
   const button = useRef(null)


   const tl=gsap.timeline()
  useGSAP(()=>{
    tl.from(menu1.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.2
   }),
    tl.from(menu2.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1
   }),
    tl.from(menu3.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1
   }),
   tl.from(logo.current,{
    y:-30,
    opacity:0,
    duration:1,
     delay:0.1
   }),tl.from(button.current,{
    
    opacity:0,
    duration:1,
     delay:0.1
   })
    
  })
 
  return (
   <div className='w-100vw'> 
   {navbar&& <div  className=' text-(--white) grid grid-cols-[1fr_1fr_300px] auto-cols-max items-center  justify-around pt-10'>
    <div className='text-[24px]  border hidden  lg:block font-medium w-95.25   '>
  <a className=' mousedown 'ref={menu1} href="#about">Home</a>  
  <a className=' mousedown menu2'ref={menu2} href="">About</a>  
  <a className=' mousedown menu3'ref={menu3} href="">Course</a>  
       </div>
       <div onClick={()=>{setmenu(true);setnavbar(false)}} className='relative mousedown lg:hidden bottom-1  pl-10 sm:pl-18'><FiAlignJustify size={40} /></div>
       <div>
         <h1 className='font-bold text-center border lg:mr-20 mx-4  text-2xl sm:text-[28px] ' ref={logo}>Smart Academy</h1> 
       </div>
       <div className='flex border justify-center '>
          <button ref={button} className='bg-(--pink) md:p-2  border  lg:w-50 w-36 sm:w-40 lg:text-[20px]  text-base sm:text-[18px] font-medium h-12 sm:h-14 button rounded-full'>Explore Course</button>
       </div>
       
    </div>}
    
    <div >
        {menu&& <div className='w-screen min-h-screen bg-gray-100'>
           <div onClick={()=>{setmenu(false);setnavbar(true)}} className='pt-8  pl-8 mousedown text-end'><RxCross1 size={50} /></div>
          <div className=' text-(--black) w-full h-screen flex flex-col justify-center items-center  '>
           <a className='text-6xl border-b-2 border-t-2 border-(--black) min-w-screen text-center p-2 mousedown m-2 font-semibold text-(--pink)' href="">Home</a>  
           <a className='text-6xl border-b-2 border-(--black) min-w-screen text-center p-2 m-2 mousedown font-semibold text-(--pink)' href="">About</a>  
           <a className='text-6xl border-b-2 border-(--black) min-w-screen text-center p-2 m-2 mousedown font-semibold text-(--pink)' href="">Course</a> </div></div>}</div>
    
    </div>
  )
}

export default Navbar
