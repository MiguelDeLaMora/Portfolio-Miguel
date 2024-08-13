import React from 'react'
import profilepic from '../assets/profilepic.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const hero = () => {
  return (
    <div>
        <div className='bg-white max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
            <div className='text-8xl'>
                text
            </div>
            <div className='my-auto'>
                <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full' src={profilepic} alt="profile pic" />
            </div>
        </div>
    </div>
  )
}

export default hero