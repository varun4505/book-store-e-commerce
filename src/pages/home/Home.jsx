import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'

import { FiBook, FiBookOpen, FiStar } from 'react-icons/fi'

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>

        
        {/* Featured Authors Section */}
        <section className="py-20 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Featured Authors</h2>
                    <div className="h-1 w-24 bg-amber-600 mx-auto mt-2 mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Meet the brilliant minds behind our bestselling books
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Author Cards */}
                    <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                                <FiBook className="w-8 h-8 text-amber-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
                                <p className="text-amber-700">Fiction Writer</p>
                            </div>
                        </div>
                        <p className="text-gray-600">Award-winning author of contemporary fiction and magical realism.</p>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                                <FiBookOpen className="w-8 h-8 text-amber-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
                                <p className="text-amber-700">Non-Fiction Expert</p>
                            </div>
                        </div>
                        <p className="text-gray-600">Bestselling author of business and personal development books.</p>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                                <FiStar className="w-8 h-8 text-amber-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Emily Roberts</h3>
                                <p className="text-amber-700">Mystery Writer</p>
                            </div>
                        </div>
                        <p className="text-gray-600">Creator of the bestselling mystery series with over 1M copies sold.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Monthly Book Club Section */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-10 md:p-16">
                            <span className="inline-block px-4 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-medium mb-5">Book Club Pick of the Month</span>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Monthly Book Club</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Connect with fellow readers, participate in engaging discussions, and discover new perspectives through our carefully curated monthly selections.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                        <FiBook className="w-4 h-4 text-amber-700" />
                                    </div>
                                    <span className="text-gray-700">Curated book selections</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                        <FiBookOpen className="w-4 h-4 text-amber-700" />
                                    </div>
                                    <span className="text-gray-700">Virtual discussion groups</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                        <FiStar className="w-4 h-4 text-amber-700" />
                                    </div>
                                    <span className="text-gray-700">Exclusive member benefits</span>
                                </div>
                            </div>
                            <button className="mt-10 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                                Join the Club
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-amber-100 p-10 md:p-16 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="w-64 h-80 bg-amber-200"><img src="src/assets/books/book8.jpg" alt="book2" /></div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Current Read</h3>
                                    <p className="text-amber-700">Join the discussion today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
