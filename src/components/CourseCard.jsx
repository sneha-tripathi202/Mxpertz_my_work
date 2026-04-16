import React from 'react'

const CourseCard = ({image,description}) => {
  return (
    <div className='xl:w-70 lg:w-50 xl:h-70 sm:w-30 relative '>
       <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }} 
         className='rounded-4xl lg:w-50 lg:h-50 xl:w-74 xl:h-70'
    ></div>
    <h1 className='text-(--blue2)  xl:text-2xl font-medium m-4 text-center'>{description}</h1>

    </div>
  )
}

export default CourseCard
