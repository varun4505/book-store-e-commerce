import React from 'react'
import bannerImg from "../../assets/banner.png"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl my-8 overflow-hidden shadow-md'>
      <div className='flex flex-col md:flex-row-reverse py-14 px-10 justify-between items-center gap-14'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end relative'>
          {/* Decorative elements */}
          <div className="absolute -top-12 right-10 w-24 h-24 rounded-full bg-amber-200 opacity-40 blur-md"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-amber-300 opacity-30 blur-md"></div>
          
          {/* Image with frame effect */}
          <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 border-8 border-white rounded-lg shadow-xl"></div>
            <img 
              src={bannerImg} 
              alt="New Book Releases" 
              className="relative z-10 rounded-lg"
            />
          </div>
        </div>
        
        <div className='md:w-1/2 w-full'>
          <span className="inline-block px-4 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-medium mb-5">Discover Something New</span>
          <h1 className='md:text-5xl text-3xl font-bold mb-7 text-gray-800'>New Releases <span className="text-amber-700">This Week</span></h1>
          <p className='mb-10 text-gray-600 leading-relaxed'>
            It's time to update your reading list with some of the latest and greatest releases in the literary world. 
            From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/new-releases" className='bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded-full font-medium transition-colors duration-200 flex items-center justify-center'>
              Browse New Releases
            </Link>
            <Link to="/bestsellers" className='bg-white hover:bg-gray-50 text-amber-700 border border-amber-700 px-8 py-3.5 rounded-full font-medium transition-colors duration-200 flex items-center justify-center'>
              View Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner