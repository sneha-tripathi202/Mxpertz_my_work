import React from 'react'

const ArticalCard = ({image,des}) => {
  return (
    <div>
       <div className='bg-white  xl:mt-20 lg:mt-20 xl:w-99 lg:w-75 lg:h-110 xl:h-135 rounded-3xl text-center '>
                        <div className='xl:w-99 xl:h-50  lg:w-75 lg:h-40 rounded-2xl   
                          'style={{backgroundImage:`url(${image})`,
                              backgroundPosition:'center',
                              backgroundSize:"cover"
                        }} ></div>
                        <div className='flex flex-col  items-center justify-center'> 
                          <h1 className=' xl:mb-4  xl:p-8 xl:w-85   lg:p-8 lg:w-85 font-medium text-center  text-(--blue2)  lg:text-xl'>{des}</h1>
                          <p className='text-xs lg:text-sm p-2 lg:p-0 xl:text-lg  text-(--black) relative xl:bottom-6 pb-'>Lorem ipsum dolor sit amet <br />consectetur adipi sici <br/>nga dipisicing elit.</p>
                          <button className='bg-(--pink) text-[#FFFFFF] xl:text-xl xl:p-3  lg:p-2 lg:w-30 lg:m-3 xl:w-35 rounded-4xl'>Read me</button></div>
                      </div>
    </div>
  )
}

export default ArticalCard
