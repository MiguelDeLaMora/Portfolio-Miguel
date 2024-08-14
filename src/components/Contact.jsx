import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center' id='contact'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'>
                    <h1 className='text-4xl sm:text-5xl text-white'>
                        Contact <span>Me </span>
                    </h1>
                    <p className='text-normal text-lg  text-gray-400 mt-2'>
                        Let's connect on LinkedIn <br /> or send me an Email
                    </p>

                    <div className='flex items-center mt-2 text-gray-400'>
                        
                        

                    </div>

                </div>

                <div className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'>
                    
                    <p className='text-normal text-lg  text-gray-400 mt-2'>
                        miguelalejandrodelamoraarocha@gmail.com
                    </p>

                    <p className='text-normal text-lg  text-gray-400 mt-2'>
                    <a href="https://www.linkedin.com/in/miguel-de-la-mora/" className=' primary-color'>LinkedIn</a>
                    </p>

                   

                </div>


            </div>
        </div>
    </div>
  )
}

export default Contact