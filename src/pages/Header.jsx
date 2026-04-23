import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
 import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { FiRotateCcw } from 'react-icons/fi';
import Lenis from "lenis"
import Home from './Home';
import ServiceCard from '../components/ServiceCard';
import Course from './Course';
import SmartAca from './SmartAca';
import Articalinside from './Articalinside';
import About from './About';
import Footer from './Footer';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const logo = useRef(null)
     const heading1 = useRef(null)
     const heading2 = useRef(null)
     const heading3 = useRef(null)
     const para= useRef(null)
     const ball= useRef(null)

     const tl=gsap.timeline()
  useGSAP(()=>{
    gsap.fromTo('.header',
      {
           scale:1,
           opacity:1
      },
   
      {
      scale:0,
      ease:"none",
      duration:1,
      delay:0.4,
      scrollTrigger:{
        trigger:".header",
        start:"bottom 40% ",
        end:"bottom top",
        scrub:true,

      }

    })
     const headingRect = heading1.current.getBoundingClientRect();
    const targetY = headingRect.top - 115;
    tl.from(heading1.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1,
     ease:"power2.out",
     stagger:0.2
     
   }),
    tl.from(heading2.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1,
     
   }),
    tl.from(heading3.current,{
    y:-70,
    opacity:0,
    duration:1,
     delay:0.1
   }),
   tl.fromTo(ball.current,
    {y:-100,
    x:190,
      opacity:0,},
    {y:targetY,
      duration:3,
      opacity:1,
     delay:0.1,
     ease:"bounce.out"
   }),
    tl.to(ball.current, { opacity: 0, scale: 0.5, duration: 0.5 }),
   tl.fromTo(
      ".mini-ball",
      { opacity: 0, y: targetY - 40, x:targetY - 10, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1,0.3)"
      }
    );
    tl.fromTo(
      ".mini-ball",
      { x: 0, rotation: 0, opacity: 0 },
      {
        x: 200,              // aage move karega
        rotation: 180,       // ek full circle ghoomega
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.3         // ek ek karke animate hoga
      }
    );
   
  })
 
  return (
    <div>
      <div className='bg-fixed w-full header  h-250 sticky ' >
      <Navbar/>
      <div className='bg-(--white) w-5 h-5 ml-20 rounded-full' ref={ball}></div>
      <div className="flex space-x-4">
        <div className="mini-ball w-8 h-8 bg-green-500 rounded-full"></div>
        <div className="mini-ball w-8 h-8 bg-yellow-500 rounded-full"></div>
        <div className="mini-ball w-8 h-8 bg-purple-500 rounded-full"></div>
      </div>
      <div className='text-(--white) my-50 lg:ml-18 ml-10 heading1 '><h1 className=' lg:text-[90px] text-[70px]  leading-18 font-bold   ' ref={heading1}>Achieve your future</h1> 
      <h1 className='text-[70px] lg:text-[90px]  font-bold ' ref={heading2}>With Smart </h1> <h1 ref={heading3} className='lg:text-[90px] text-[70px] font-bold  relative bottom-6'>Academy</h1>
      <p ref={para} className='lg:text-[20px] md:text-[16px] lg:w-200 w-40vw  text-(--white)  font-normal' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus illo ab odio non! Iusto voluptas suscipit ipsa esse labore voluptatum eveniet dolores consequuntur nihil?</p>
       <div>
          <button className='bg-(--pink) p-2  lg:w-50 w-40  lg:text-[20px] text-[18px] font-medium h-14 mt-12 rounded-full button'>Explore Course</button>
       </div></div>
       </div>
    
    <section id='home'>
        <Home/>
    </section>
    
    <section id='home'>
    </section>
     <ServiceCard/>
    <section id='home'>
      <Course/>
    </section>
    <section id='home'>
      <SmartAca/>
    </section>
    <section id='home'>
      <Articalinside/>
    </section>
      <section id='home'>
      <About/>
    </section>
     <section id='home'>
      <Footer/>
      </section>
    </div>
  )
}

export default Header
