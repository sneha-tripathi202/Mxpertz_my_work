import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  return (
    <div className='bg-gray-100 w-full lg:h-190 h-370 '><div className='lg:flex justify-center '>
      <div className='    sm:text-start  lg:text- sm:pl-14 text-center relative lg:left-38 '>
        <div className='text-[50px] pt-30  lg:mt-6 xl:mt-20 lg:leading-14 leading-16 xl:leading-17    xl:text-6xl font-bold text-(--blue1)'> Welcome <h1 className='ml-2'>to smart</h1> Academy</div>
           <p className='mt-6 lg:w-15vw text-[20px]  text-(--black)  relative text-start '>Lorem ipsum dolor sit amet  consect etur adipisi elitt.  Blandi  hjktiis, excepturi?</p>
           </div>
     
      <div className=' lg:mt-10 w-100 lg:w-100  xl:w-110 h-140 sm:left-40 relative  left:20 lg:right-12 xl:right-16 md:right-0'>
         <div className='bg-(--pink) lg:w-82 xl:w-92 xl:h-92  rounded-t-full  ml-18  h-70 mt-28  lg:mx-18 '>
            <div className=' h-98 xl:h-110 rounded-b-lg z-10 div relative xl:top-40 top-30 right-1 '></div>
          </div>
          <div className='  h-60  m-4 relative w-100 xl:w-120 top-20 bg-[url(/image/boy.png)] '></div>
          <div className='bg-(--pink) rounded-b-4xl   h-70 z-0  ml-18  relative bottom-80 '></div>
      </div>
     <div className='  xl:mt-60 sm:text-end sm:pl-70 text-center relative lg:right-10 p-18'>
     <div className=' text-[50px] font-bold text-(--blue1) mb-6  '> Our Mission </div> 
     <p className='text-[20px]  mb-4 text-(--black)  px-1 sm:pl-8vw '>Lorem ipsum dolor sit amet elit consectetur adipisi elit. Blanditiis, consectetur excepturi elit  adipisi.</p>
     <div className='flex mt-2  sm:justity-end justify-center sm:text-end  w   '>
      <div className=' sm:text-end   ' > 
         <h1 className='font-bold text-3xl  text-(--blue1) relative '>10+</h1>
         <p className='text-xs text-center sm:text-end relative  text-[20px]  w-28 text-(--black) '>Years <br/>Experience</p></div>
       <div className='sm:text-end  '>
            <h1 className='font-bold text-3xl  text-(--blue1)'>29+</h1>
            <p className='text-xs text-center sm:text-end relative text-[20px]   w-28 text-(--black) '>Total<br/> Course</p></div>
      <div className=' sm:text-end '>
          <h1 className='font-bold text-3xl  text-(--blue1)'>50K+</h1>
          <p className='text-xs text-center sm:text-end relative  text-[20px]   w-28 text-(--black) '>Student <br/>Active</p>
          </div>
        </div>
     </div>
    </div>
    
    </div>
  )
}

export default Home
