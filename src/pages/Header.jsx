import React from 'react'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <div className=' header h-250 '>
      <Navbar/>
      <div className='text-(--white) my-50 ml-18 '><h1 className='text-5xl text-[90px]   font-bold   '>Achieve your future</h1> 
      <h1 className='text-[90px] font-bold '>With Smart </h1> <h1 className='text-[90px] font-bold  relative bottom-6'>Academy</h1>
      <p className='text-[20px] w-200 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minus illo ab odio non! Iusto voluptas suscipit ipsa esse labore voluptatum eveniet dolores consequuntur nihil?</p>
       <div>
          <button className='bg-(--pink) p-2  w-50 text-[20px] font-medium h-14 mt-12 rounded-full'>Explore Course</button>
       </div></div>
    </div>
  )
}

export default Header
