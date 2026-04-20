import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  return (
    <div className='bg-gray-100 w-full lg:h-190 md:360 h-360   '>
     <div className='w-screen lg:h-190 md:300 h-330 grid lg:grid-flow-col lg:grid-cols-[1fr_400px_1fr]  lg:auto-cols-max  lg:gap-4 '>
     <div className=''>
      <div className='flex  lg:justify-end lg:items-end justify-center  h-120 '>
      <div className='flex   justify-center gap-4 sm:flex-none'>
        <div className='   sm:text-start flex gap-10 flex-col justify-center  text-center relative  '>
        <div className='text-[50px] text-center sm:text-start  lg:leading-14 leading-16 xl:leading-14 xl:text-5xl font-bold text-(--blue1)'> Welcome <h1 className='ml-2'>to smart</h1> Academy</div>
           <p className=' w-70  text-[20px]  text-(--black)  relative text-center sm:text-start  '>Lorem ipsum dolor sit amet  consect etur adipisi elitt.  Blandi  hjktiis, excepturi?</p>
        </div>
      </div>
    </div>
     </div>
     
     {/* second part grid */}
     <div className='flex justify-center  '>
      <div className=''>
         <div className=' hello bg-(--pink) lg:w-82 xl:w-92 xl:h-80 w-82  rounded-t-full    h-70 lg:mt-28 md:mt-10  '>
            <div className=' hy h-106 xl:h-116 lg:h-106 rounded-b-lg z-10 div relative xl:top-30 top-30 right-1 '></div>
          </div>
          <div className='bg-(--pink) rounded-b-4xl   h-66 z-0  xl:w-92 lg:w-82 '></div>
      </div>
     </div>
     {/* third part grid */}
     <div className=' lg:gap-14 flex flex-col'>
     <div className='relative lg:h-112 h-80 flex lg:items-end items-center  justify-center'>
     <div className='absolute lg:left-8  flex  flex-col gap-10'>
       <div className=' text-[50px]  xl:text-5xl font-bold text-(--blue1)   '> Our Mission </div> 
        <p className='text-[20px]  text-center lg:text-start  text-(--black) w-70 lg:w-90 xl:120 '>Lorem ipsum dolor sit amet elit consectetur adipisi elit. Blandits, consectetur excepturi elit  adipisi.</p>
       </div>
       </div>

     <div className='flex relative  lg:justify-end justify-center xl:justify-start gap-4 '>
      <div className='   text-center  ' > 
         <h1 className='font-bold text-3xl  text-(--blue1) text-center  '>10+</h1>
         <p className='text-xs text-center  text-[20px]  w-28 text-(--black) '>Years <br/>Experience</p></div>
       <div className='sm:text-end   '>
            <h1 className='font-bold text-3xl text-center text-(--blue1)'>29+</h1>
            <p className='text-xs text-center  text-[20px]   w-28 text-(--black) '>Total<br/> Course</p></div>
      <div className=' sm:text-end  xl:text-center lg:text-start'>
          <h1 className='font-bold text-3xl text-center text-(--blue1)'>50K+</h1>
          <p className='text-xs text-center  text-[20px]   w-28 text-(--black) '>Student <br/>Active</p>
          </div>
        
        </div>
     </div>
      </div>
      
      </div>
    
    
    
    
  )
}

export default Home
