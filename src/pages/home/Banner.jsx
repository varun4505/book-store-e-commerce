import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Gear Up for Success – Your Ultimate Engineering Bookstore Awaits!</h1>
            <p className='mb-10'>Whether you’re decoding circuits, building algorithms, or designing skyscrapers, we’ve got the perfect resources to supercharge your engineering journey. Ace your semesters, prep for placements, and build your future—all in one place.</p>

            <button className='btn-primary'>Start Exploring Now</button>
        </div>

       
    </div>
  )
}

export default Banner