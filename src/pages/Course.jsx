import React from 'react'
import chemImg from '../images/chem2.jpg'
import musicImg from '../images/music.jpg'
import cookImg from '../images/cook.avif'
import swimImg from '../images/swim.jpg'
import yogaImg from '../images/yoga.webp'
import langImg from '../images/lang.webp'
import greenImg from '../images/green.webp'
import craftImg from '../images/craft.jpg'
import CourseCard from '../components/CourseCard'

const Course = () => {
  return (
    <div id='course' className='bg-gray-100 lg:h-300 md:h-250 xl:h-350 sm:h-260 h-250'>
    <div className='relative top-50'>
        <h1 className='text-center font-bold text-3xl md:text-4xl lg:text-5xl text-(--blue1)' >Our Featured Course <br /> at Smart Academy</h1>
<div className=''>
        <div className='mt-30 overflow-x-auto md:overflow-visible scroll flex gap-4 justify-around'>
          <CourseCard image={chemImg} description={"Kids Science Course"}/>
          <CourseCard image={cookImg} description={"Kids Chef Course"}/>
           <CourseCard image={musicImg}description={"Kids Music Course"} />
           <CourseCard image={swimImg}description={"Kids Swimming Course"}/>
        </div>
           
         <div className='md:mt-30  overflow-x-auto md:overflow-visible scroll sm:mt-10 mt-4 gap-4 flex justify-around'>
         <CourseCard image={yogaImg} description={"Kids Arobic Course"}/>
         <CourseCard image={langImg}  description={"Kids languages Course"}/>
         <CourseCard image={craftImg} description={"Kids Craft & Art Course"}/>
         <CourseCard image={greenImg} description={"Kids Go Green Course"}/></div>
          </div>
         </div> 
    </div>
  )
}

export default Course
