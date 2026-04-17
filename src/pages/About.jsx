import React from 'react'

const About = () => {
  return (
    <div className='w-screen h-185 bg-(--pink) flex items-center justify-center'>
      <div className='flex  flex-col items-center justify-center'>
        <h1 className='text-white md:text-[45px] lg:text-[64px] xl:text-[64px] font-medium leading-20 text-center m-8 mb-16'>lgnite Your Child's Potential Take <br/> the Leap with an Online Course</h1>
        <div>
            <input className='p-2 pl-10 rounded-full bg-white md:w-140 lg:w-162 w-162 h-18 m-6 placeholder:text-[#363636] placeholder:font-medium placeholder:ml-2' type="text" placeholder=' Your email address....' />
            <button className='bg-(--blue2) p-2  w-36 h-18 text-white rounded-full font-medium mousedown text-[24px]'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default About
