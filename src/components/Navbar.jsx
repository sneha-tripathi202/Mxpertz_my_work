import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [menu, setmenu] = useState(false)
  const [navbar, setnavbar] = useState(true)


  return (
   <div> 
   {navbar&& <div  className=' text-(--white) flex justify-between items-center w-screen pt-10'>
    <div className='text-[24px] md:hidden font-medium w-95.25 flex justify-between pl-20 '>
  <a className='' href="">Home</a>  
  <a className='' href="">About</a>  
  <a className='' href="">Course</a>  
       </div>
       <div onClick={()=>{setmenu(true);setnavbar(false)}} className='relative bottom-1 pl-18'><FiAlignJustify size={40} /></div>
       <div>
         <h1 className='font-bold lg:mr-20 text-[28px] '>Smart Academy</h1> 
       </div>
       <div>
          <button className='bg-(--pink) md:p-2 mr-10 lg:w-50 w-40 lg:text-[20px] text-[18px] font-medium h-14 rounded-full'>Explore Course</button>
       </div>
       
    </div>}
    
    <div >
        {menu&& <div className='w-screen min-h-screen bg-gray-100'>
           <div onClick={()=>{setmenu(false);setnavbar(true)}} className='pt-8  pl-8 text-end'><RxCross1 size={50} /></div>
          <div className=' text-(--black) w-full h-screen flex flex-col justify-center items-center  '>
           <a className='text-6xl border-b-2 border-t-2 border-(--black) min-w-screen text-center p-2 m-2 font-semibold text-(--pink)' href="">Home</a>  
           <a className='text-6xl border-b-2 border-(--black) min-w-screen text-center p-2 m-2 font-semibold text-(--pink)' href="">About</a>  
           <a className='text-6xl border-b-2 border-(--black) min-w-screen text-center p-2 m-2 font-semibold text-(--pink)' href="">Course</a> </div></div>}</div>
    
    </div>
  )
}

export default Navbar
