import React from 'react'
import ArticalCard from '../components/ArticalCard'
import techImg from '../images/tech.jpg'
import playImg from '../images/playing.webp'
import astroImg from '../images/astro.jpg'

const Articalinside = () => {
  return (
    <div className='bg-gray-100 w-screen lg:h-180 xl:h-220 h-220 sm:h-180'>
       <h1 className='text-center font-bold text-4xl md:text-4xl lg:text-5xl  text-(--blue1) ' >Articale and Insight</h1>
      <div className='flex justify-around'>
        <ArticalCard image={techImg} des={"The Benifits of Enrolling Kids In Online Courses"}/>
       <ArticalCard image={playImg} des={"Unlock Your Child's Potential with Online Courses for Kids"}/>
        <ArticalCard image={astroImg} des={"Engage and Inspire The Power and Online Courses for Kids"}/>
      </div>
    </div>
  )
}

export default Articalinside
