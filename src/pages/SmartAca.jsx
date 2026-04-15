import React from 'react'
import MovingCard from '../components/MovingCard'
import child1Img from '../images/child1.webp'
import child2Img from '../images/child2.webp'
import child3Img from '../images/child3.webp'
import child4Img from '../images/child4.jpg'
import child5Img from '../images/child5.jpg'
import child6Img from '../images/child6.jpg'

const SmartAca = () => {
  return (
    <div className='w-screen h-220 bg-gray-100'>
       <h1 className='text-center font-bold text-4xl md:text-5xl  text-(--blue1)' >Our Featured Course <br /> at Smart Academy</h1>
        <div className=' scroll flex gap-8 mt-14 whitespace-nowrap overflow-x-auto overflow-y-hidden scroll'>
             <MovingCard image={child1Img} name={"Ava Davis"}/>
             <MovingCard image={child2Img} name={"Sophia Miller"}/>
             <MovingCard image={child3Img} name={"Park Jee"}/>
             <MovingCard image={child4Img} name={"Min jun"}/>
             <MovingCard image={child5Img} name={"Seo yeon"}/>
             <MovingCard image={child6Img} name={"Soo jin"}/>
             </div>
         <div className=' scroll flex gap-8  whitespace-nowrap overflow-x-auto overflow-y-hidden '>
             <MovingCard image={child3Img} name={"Park Jee"}/>
             <MovingCard image={child1Img} name={"Ava Davis"}/>
             <MovingCard image={child6Img} name={"Soo jin"}/>
             <MovingCard image={child4Img} name={"Min jun"}/>
             <MovingCard image={child2Img} name={"Sophia Miller"}/>
             <MovingCard image={child5Img} name={"Seo yeon"}/>
             </div>
    </div>
  )
}

export default SmartAca
