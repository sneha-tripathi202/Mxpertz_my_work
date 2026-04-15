import React from 'react'

const CourseCard = ({image,description}) => {
  return (
    <div className='md:w-70 md:h-70 sm:w-30 relative '>
       <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }} 
         className='rounded-4xl w-74 h-70'
    ></div>
    <h1 className='text-(--blue2) text-2xl font-medium m-4 text-center'>{description}</h1>

    </div>
  )
}

export default CourseCard
