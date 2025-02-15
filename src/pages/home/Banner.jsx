import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
         <img src={bannerImg} alt="" className='w-full h-auto md:w-3/4' />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Your One-Stop Online Bookstore – Explore, Learn, and Grow!</h1>
            <p className='mb-10'>Find your next favorite book! From bestsellers to academic resources, we have it all. Enjoy seamless browsing, exclusive discounts, and doorstep delivery.</p>

            <button className='btn-primary'>Start Shopping Now</button>
        </div>

       
    </div>
  )
}

export default Banner