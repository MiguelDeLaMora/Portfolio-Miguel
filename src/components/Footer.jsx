import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>Monterrey, Nuevo León <br />México</p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
            <a href="https://www.linkedin.com/in/miguel-de-la-mora/"><FaLinkedin/></a>
            <a href="https://github.com/MiguelDeLaMora"><FaGithubSquare/></a>
            <a href="https://www.instagram.com/migueldlmora/"><FaInstagram/></a>
            

        </div>

    </div>
  )
}

export default Footer