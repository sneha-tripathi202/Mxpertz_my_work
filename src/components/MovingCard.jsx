import React from 'react'

const MovingCard = ({image,name}) => {
  return (
    <div>
      <div> <div className='bg-(--white)   mt-10 md:w-100 md:h-55 flex items-center justify-center gap-10  rounded-3xl  '>
                        <div className=' mt-4  w-15 h-15 lg:h-20 lg:w-20 rounded-full  relative right-3 '
                        style={{backgroundImage:`url(${image})`,
                              backgroundPosition:'center',
                              backgroundSize:"cover"
                        }}></div>
                         <div><h1 className='text-(--blue2) mb-2  pt-6 md:text-xl'>{name}</h1>
                          <p className='text-xs md:text-lg text-(--black)  pb-2'>Lorem ipsum dolor <br />sit amet consectetur <br />adipisicing elit.</p></div>
                      </div></div>
    </div>
  )
}

export default MovingCard
