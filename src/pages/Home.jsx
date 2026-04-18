import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  return (
    <div className='bg-gray-100 w-full lg:h-190 md:300 h-330 '><div className='lg:flex  justify-center '>
      <div className='flex w-140 sm:w-70 justify-center sm:flex-none'><div className='  w-80  sm:text-start flex mb-8 flex-col justify-center lg:text- sm:pl-14 text-center relative lg:left-38 '>
        <div className='text-[50px] w-80 text-center sm:text-start pt-30  lg:mt-22 xl:mt-28 lg:leading-14 leading-16 xl:leading-17 xl:text-6xl font-bold text-(--blue1)'> Welcome <h1 className='ml-2'>to smart</h1> Academy</div>
           <p className='mt-6 md:w-70  text-[20px]  text-(--black)  relative text-center sm:text-start  '>Lorem ipsum dolor sit amet  consect etur adipisi elitt.  Blandi  hjktiis, excepturi?</p>
           </div></div>
     
      <div className=' lg:mt-10 mt-8 ml-10    w-100 lg:w-100  xl:w-110 h-140 sm:left-26 relative md:left-50 lg:left-40 xl:left-40  lg:right-12 xl:right- md:right-0'>
         <div className='bg-(--pink) lg:w-82 xl:w-92 xl:h-92  rounded-t-full  ml-18  h-70 lg:mt-28 md:mt-10   lg:mx-18 '>
            <div className=' h-98 xl:h-120 rounded-b-lg z-10 div relative xl:top-30 top-30 right-1 '></div>
          </div>
          <div className='  h-60  m-4 relative w-100 xl:w-120 top-20 bg-[url(/image/boy.png)] '></div>
          <div className='bg-(--pink) rounded-b-4xl   h-70 z-0  ml-18  relative bottom-80 '></div>
      </div>
     <div className='  xl:mt-70 -mt-20 lg:mt-50 sm:text-end sm:pl-70 xl:pl-50  text-center xl:text-start lg:text-start relative lg:right-10 sm:left-6  p-18'>
     <div className=' text-[50px] xl:text-6xl font-bold text-(--blue1) mb-6  '> Our Mission </div> 
     <p className='text-[20px]  mb-4 text-(--black) md:w-160 lg:w-100 px-1 sm:pl-8 md:pl-54 lg:pl-4 '>Lorem ipsum dolor sit amet elit consectetur adipisi elit. Blanditiis, consectetur excepturi elit  adipisi.</p>
     <div className='flex mt-2  sm:justity-end md:justify-end-safe lg:justify-start justify-center xl:justify-start   '>
      <div className=' sm:text-end   xl:text-center lg:text-start ' > 
         <h1 className='font-bold text-3xl  text-(--blue1) relative '>10+</h1>
         <p className='text-xs text-center xl:text-center sm:text-end relative  lg:text-start text-[20px]  w-28 text-(--black) '>Years <br/>Experience</p></div>
       <div className='sm:text-end  xl:text-center lg:text-start '>
            <h1 className='font-bold text-3xl  text-(--blue1)'>29+</h1>
            <p className='text-xs text-center  xl:text-center sm:text-end relative lg:text-start text-[20px]   w-28 text-(--black) '>Total<br/> Course</p></div>
      <div className=' sm:text-end  xl:text-center lg:text-start'>
          <h1 className='font-bold text-3xl  text-(--blue1)'>50K+</h1>
          <p className='text-xs text-center xl:text-center sm:text-end relative  lg:text-start text-[20px]   w-28 text-(--black) '>Student <br/>Active</p>
          </div>
        </div>
     </div>
    </div>
    
    </div>
  )
}

export default Home
