import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["All Books", "Business", "Fiction", "Horror", "Adventure", "Non-Fiction"]

const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Books");
    const {data: books = []} = useFetchAllBooksQuery();
  
    const filteredBooks = selectedCategory === "All Books" 
        ? books 
        : books.filter(book => book.category?.toLowerCase() === selectedCategory.toLowerCase())
    
    return (
        <section className='py-20 bg-white'>
            <div className='max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10'>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                    <div>
                        <h2 className='text-3xl font-bold text-gray-800 mb-3'>
                            Bestselling Books
                            <div className="h-1 w-16 bg-amber-600 mt-2"></div>
                        </h2>
                        <p className="text-gray-600">Discover books loved by our community</p>
                    </div>
                    
                    {/* category filtering */}
                    <div className='mt-6 sm:mt-0'>
                        <div className="inline-flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-lg">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2.5 text-sm rounded-md transition-all ${
                                        selectedCategory === category 
                                        ? 'bg-amber-700 text-white shadow-md' 
                                        : 'text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                {filteredBooks.length === 0 ? (
                    <div className="text-center py-12 bg-amber-50 rounded-lg">
                        <h3 className="text-xl font-medium text-gray-800">No books found in this category</h3>
                        <p className="text-gray-600 mt-3">Try selecting a different category or check back later</p>
                    </div>
                ) : (
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-amber-100 opacity-50"></div>
                        <div className="absolute top-1/2 -right-6 w-16 h-16 rounded-full bg-amber-200 opacity-40"></div>
                        
                        {/* Swiper with improved styling */}
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={28}
                            navigation={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 28,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 28,
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 28,
                                }
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper py-10"
                        >
                            {filteredBooks.map((book, index) => (
                                <SwiperSlide key={index} className="pb-14">
                                    <BookCard book={book} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        {/* Custom swiper styles */}
                        <style>{`
                            .swiper-button-next,
                            .swiper-button-prev {
                              background-color: rgba(255, 255, 255, 0.9);
                              width: 44px;
                              height: 44px;
                              border-radius: 50%;
                              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            }
                            
                            .swiper-button-next:after,
                            .swiper-button-prev:after {
                              font-size: 18px;
                              color: #b45309;
                              font-weight: bold;
                            }
                            
                            .swiper-pagination-bullet-active {
                              background-color: #b45309;
                            }
                        `}</style>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TopSellers