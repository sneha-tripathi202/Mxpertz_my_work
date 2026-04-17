import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  return (
    <div className='bg-gray-100 w-screen h-164'><div className='   mb-30 flex justify-center '>
      <div className=' w-100  mt-40 relative left-16 '>
        <div className='text-[50px]   w-60 leading-16    font-bold text-(--blue1)'> Welcome <h1 className='ml-2'>to smart</h1> Academy</div>
           <p className='mt-6 text-[20px]  text-(--black)  relative '>Lorem ipsum dolor sit amet <br/> consect etur adipisi elitt. <br/> Blandi  hjktiis, excepturi?</p>
           </div>
      <div className=' w-130 relative right-16 lg:right-12 xl:right-16 md:right-0'>
         <div className='bg-(--pink) rounded-b-lg rounded-t-full    h-80 mt-28  mx-15 '>
            <div className=' h-118  rounded-b-lg z-10 div relative top-30 right-1 '></div>
          </div>
          <div className='  h-70  m-4 relative w-100 top-20 bg-[url(/image/boy.png)] '></div>
          <div className='bg-(--pink) rounded-b-4xl   h-70 z-0  mx-15  relative bottom-80 '></div>
      </div>
     <div className='   mt-60 w-100 relative right-10 '>
     <div className=' text-[50px] font-bold text-(--blue1) mb-10 relative  '> Our Mission </div> 
     <p className='mt-4 text-[20px]  mb-6 text-(--black)  relative '>Lorem ipsum dolor sit amet elit consectetur adipisi elit. Blanditiis, consectetur excepturi elit  adipisi elit.</p>
     <div className='flex mt-2  relative   text-center  justify-between'>
      <div className='w-28  p-1   ' > 
         <h1 className='font-bold text-[36px]  text-(--blue1) '>10+</h1>
         <p className='text-xs text-center relative  text-[20px]  w-28 text-(--black) '>Years <br/>Experience</p></div>
       <div className='w-28 m-1 '>
            <h1 className='font-bold text-[36px]  text-(--blue1)'>29+</h1>
            <p className='text-xs text-center relative text-[20px]   w-28 text-(--black) '>Total<br/> Course</p></div>
      <div className='w-28 m-1 '>
          <h1 className='font-bold text-[36px]  text-(--blue1)'>50K+</h1>
          <p className='text-xs text-center relative  text-[20px]   w-28 text-(--black) '>Student <br/>Active</p>
          </div>
        </div>
     </div>
    </div>
    
    </div>
  )
}

export default Home
