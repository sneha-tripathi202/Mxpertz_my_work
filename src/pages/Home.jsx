import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  return (
    <div className='bg-gray-100 w-screen h-164'><div className='   mb-30 flex '>
      <div className=' w-1/3  mt-40'>
        <div className='text-[50px] ml-44 lg:ml-20 w-60 leading-16  xl:ml-40 font-bold text-(--blue1)'> Welcome <h1 className='ml-2'>to smart</h1> Academy</div>
           <p className='mt-4 text-[20px] text-(--black) sm:w-78 relative left-45 xl:left-40 lg:left-25'>Lorem ipsum dolor sit amet consect etur adipisi elit. Blandi  hjktiis, excepturi?</p>
           </div>
      <div className=' w-1/3'>
         <div className='bg-(--pink) rounded-b-lg rounded-t-full  sm:w-80  h-70 mt-28  mx-15 lg:mx-5 '>
            <div className='sm:w-90 h-103  rounded-b-lg z-10 div relative top-20 right-6 '></div>
          </div>
          <div className=' sm:w-50 h-60 md:w-70 m-4 relative top-20 bg-[url(/image/boy.png)] '></div>
          <div className='bg-(--pink) rounded-b-4xl   sm:w-80  h-65 z-0  mx-15 lg:mx-5 relative bottom-80 '></div>
      </div>
     <div className='  lg:p-10 mt-45 w-1/3'>
     <div className=' text-[50px] font-bold text-(--blue1) mb-10 relative right-20 xl:-left-28   md:right-6 '> Our Mission </div> 
     <p className='mt-4 text-[20px]  mb-6 text-(--black) lg:w-90 relative xl:right-26 lg:right-8'>Lorem ipsum dolor sit amet elit consectetur adipisi elit. Blanditiis, consectetur excepturi elit  adipisi elit.</p>
     <div className='flex mt-2 lg:w-84 relative md:right-30 right-65 text-center  justify-between'>
      <div className='w-28 lg:w-24 p-1 ml-4 xl:ml-0 md:ml-20' > 
         <h1 className='font-bold text-[36px] text-(--blue1) '>10+</h1>
         <p className='text-xs text-center relative right-1 text-[20px] w-28 text-(--black) '>Years Experience</p></div>
       <div className='w-28 m-1  '>
            <h1 className='font-bold text-[36px] text-(--blue1)'>29+</h1>
            <p className='text-xs text-center relative right-2 text-[20px] w-28 text-(--black) '>Total Course</p></div>
      <div className='w-28 m-1'>
          <h1 className='font-bold text-[36px] text-(--blue1)'>50K+</h1>
          <p className='text-xs text-center relative right-1 text-[20px] w-28 text-(--black) '>Student Active</p>
          </div>
        </div>
     </div>
    </div>
    
    </div>
  )
}

export default Home
