import React from 'react'

const ArticalCard = ({image,des}) => {
  return (
    <div>
       <div className='bg-white  mt-20 w-99 h-135 rounded-3xl text-center '>
                        <div className='w-99 h-50 rounded-2xl   
                          'style={{backgroundImage:`url(${image})`,
                              backgroundPosition:'center',
                              backgroundSize:"cover"
                        }} ></div>
                        <div className='flex flex-col  items-center justify-center'> 
                          <h1 className=' mb-4 p-8 w-85 font-medium text-center  text-(--blue2)  md:text-xl'>{des}</h1>
                          <p className='text-xs p-2 md:text-lg  text-(--black) relative bottom-6 pb-'>Lorem ipsum dolor sit amet <br />consectetur adipi sici <br/>nga dipisicing elit.</p>
                          <button className='bg-(--pink) text-[#FFFFFF] text-xl p-3   w-35 rounded-4xl'>Read me</button></div>
                      </div>
    </div>
  )
}

export default ArticalCard
