import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full h-90 sm:h-140 md:h-185 bg-(--pink) flex items-center justify-center'>
      <div className='flex  flex-col items-center justify-center'>
        <h1 className='text-white md:text-[45px] text-2xl sm:text-4xl lg:text-[64px] xl:text-[64px] font-medium md:leading-20 leading -12sm:leading-14 text-center m-8 mb-16'>lgnite Your Child's Potential Take <br/> the Leap with an Online Course</h1>
        <div>
            <input className='p-2 pl-10 rounded-full bg-white h-14 sm:w-110 w-54 md:w-xl xl:w-172   sm:h-18 m-6 placeholder:text-[#363636] placeholder:font-medium placeholder:ml-2' type="text" placeholder=' Your email address....' />
            <button className='bg-(--blue2)  sm:p-2  sm:w-36 w-26 h-12  sm:h-18 text-white rounded-full font-medium mousedown text-lg sm:text-[24px]'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default About
