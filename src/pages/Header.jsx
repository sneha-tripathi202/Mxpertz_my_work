import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
 import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
  const logo = useRef(null)
     const heading1 = useRef(null)
     const heading2 = useRef(null)
     const heading3 = useRef(null)
     const para= useRef(null)


     const tl=gsap.timeline()
  useGSAP(()=>{
    tl.from(heading1.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1
   }),
    tl.from(heading2.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1
   }),
    tl.from(heading3.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1
   }),
   tl.from(para.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1
   })
  })
 
  return (
    <div className=' w-full header h-250 '>
      <Navbar/>
      <div className='text-(--white) my-50 lg:ml-18 ml-10 '><h1 className=' lg:text-[90px] text-[70px]  leading-18 font-bold   ' ref={heading1}>Achieve your future</h1> 
      <h1 className='text-[70px] lg:text-[90px]  font-bold ' ref={heading2}>With Smart </h1> <h1 ref={heading3} className='lg:text-[90px] text-[70px] font-bold  relative bottom-6'>Academy</h1>
      <p ref={para} className='lg:text-[20px] md:text-[16px] lg:w-200 w-150  text-(--white)  font-normal' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus illo ab odio non! Iusto voluptas suscipit ipsa esse labore voluptatum eveniet dolores consequuntur nihil?</p>
       <div>
          <button className='bg-(--pink) p-2  lg:w-50 w-40  lg:text-[20px] text-[18px] font-medium h-14 mt-12 rounded-full mousedown'>Explore Course</button>
       </div></div>
    </div>
  )
}

export default Header
