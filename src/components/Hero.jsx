import React from 'react'
import profilepic from '../assets/profilepic.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const hero = () => {
  return (
    <div>
        <div className='bg-white max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>

            <div className='bg-blue-300 flex-col my-auto mx-auto md:mx-0'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi, I am Miguel de la Mora</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'><TypeAnimation
                sequence={[
                    "Frontend Dev",
                    1000,
                    "Webdesigner",
                    1000,
                    "Industrialdesigner",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
                </h1>

            </div>
            
            <div className='text-8xl'>
                text
            </div>
            
            <div className='my-auto'>
                <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profilepic} alt="profile pic" />
            </div>
        
        </div>
    </div>
  )
}

export default hero