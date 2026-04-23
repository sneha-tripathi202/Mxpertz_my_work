import React, { use, useRef, useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
  import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from "react-router-dom";
const Navbar = ({id1,id2,id3}) => {
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
    y:0,
    opacity:0,
    duration:1,
     delay:0.2
   }),
    tl.from(menu2.current,{
    y:1,
    opacity:0,
    duration:1,
     delay:0.1
   }),
    tl.from(menu3.current,{
    y:1,
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
   {navbar&& 
   <div  className=' text-(--white) pt-10 flex justify-around'>
    <div className=' hidden lg:block'>
      <div className='text-[24px]   flex gap-6 xl:gap-10 justify-around  font-medium    '>
 <a className=' mousedown mb-2 menu1'ref={menu1} href="#home">Home</a>
 <a className=' mousedown menu2'ref={menu2} href="#about">About</a>
 <a className=' mousedown menu3'ref={menu3} href="#course">Course</a>
       </div>
    </div>
       <div onClick={()=>{setmenu(true);setnavbar(false)}} className='relative mousedown lg:hidden'><FiAlignJustify size={40} /></div>
       <div className=''>
         <h1 className=' font-bold  text-center mx-4 xl:w-100 2xl:w-120 text-2xl sm:text-[28px] ' ref={logo}>Smart Academy</h1> 
       </div>
       <div className='flex    justify-center  '>
          <button ref={button} className='bg-(--pink) md:p-2  border  lg:w-50 w-36 sm:w-40 lg:text-[20px]  text-base sm:text-[18px] font-medium h-12 sm:h-14 button rounded-full'>Explore Course</button>
       </div>
       
    </div>}
    
    <div >
        {menu&& <div className='w-full min-h-full bg-gray-100'>
           <div onClick={()=>{setmenu(false);setnavbar(true)}} className='pt-8 w-20  mousedown text-start'><RxCross1 size={50} /></div>
          <div className=' text-(--black) w-full h-screen flex flex-col justify-center items-center  '>
           <a onClick={()=>{setmenu(false);setnavbar(true)}} className='text-6xl border-b-2 border-t-2 border-(--black) min-w-screen text-center p-2 mousedown m-2 font-semibold text-(--pink)' href="#home">Home</a>  
           <a onClick={()=>{setmenu(false);setnavbar(true)}} className='text-6xl border-b-2 border-(--black) min-w-screen text-center p-2 m-2 mousedown font-semibold text-(--pink)' href="#about">About</a>  
           <a onClick={()=>{setmenu(false);setnavbar(true)}} className='text-6xl border-b-2 border-(--black) min-w-screen text-center p-2 m-2 mousedown font-semibold text-(--pink)' href="#course">Course</a> </div></div>}</div>
    
    </div>
  )
}

export default Navbar
