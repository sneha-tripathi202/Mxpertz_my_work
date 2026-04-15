import React from 'react'

const Navbar = () => {
  return (
    <div className=' text-(--white) flex justify-between items-center pt-10'>
    <div className='text-[24px] font-medium w-95.25 flex justify-between pl-20 '>
  <a className='' href="">Home</a>  
  <a className='' href="">About</a>  
  <a className='' href="">Course</a>  
       </div>
       <div>
         <h1 className='font-bold lg:mr-20 text-[28px] '>Smart Academy</h1> 
       </div>
       <div>
          <button className='bg-(--pink) p-2 mr-10 w-50 text-[20px] font-medium h-14 rounded-full'>Explore Course</button>
       </div>
    </div>
  )
}

export default Navbar
