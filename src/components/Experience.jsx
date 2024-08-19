import React from 'react'

const Experience = () => {
  return (
    <div className='py-10 bg-[#232325]' id='experience'>
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>

        <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Cantú Herrera Asesores</p>
            <p className='text-gray-400'>(2019 - 2024)</p>
            <p className='text-gray-500'>
                Performing accounting for specific clients, montlhy tax declarations, modifications to tax activites, issuing electronic invoices, among other tasks.
            </p>
        </div>

        <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>

        <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Freelance</p>
            <p className='text-gray-400'>(2023 - Present)</p>
            <p className='text-gray-500'>
                Design and Development of various projects focused in UI and websites.
            </p>
        </div>

        <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>

        <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Global Pear</p>
            <p className='text-gray-400'>(2024 - Present)</p>
            <p className='text-gray-500'>
            Designing websites for various clients, application of SEO and marketing strategies and development of new ticketing website.            </p>
        </div>

    </div>
  )
}

export default Experience