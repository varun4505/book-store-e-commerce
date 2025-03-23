import React, { useState } from 'react'
import BookCard from '../books/BookCard';
import { FiArrowRight, FiTrendingUp, FiPercent } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["All Books", "Business", "Fiction", "Horror", "Adventure", "Technical"];

const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Books");
    const [activeTab, setActiveTab] = useState("bestsellers"); // "bestsellers" or "deals"
    
    const { data: books = [] } = useFetchAllBooksQuery();
  
    // Filter books by category
    const filteredBooks = selectedCategory === "All Books" 
        ? books 
        : books.filter(book => {
            // Special case for Technical category to include both technical and technology books
            if (selectedCategory === "Technical") {
                return book.category === "technical" || book.category === "technology";
            }
            return book.category === selectedCategory.toLowerCase();
        });

    // Further filter by bestsellers or deals
    const displayedBooks = activeTab === "bestsellers"
        ? filteredBooks
        : filteredBooks.filter(book => book.oldPrice > book.newPrice);

    return (
        <section id="books-section" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h2 className="section-title mb-2">Bestsellers & Deals</h2>
                        <p className="text-gray-600 max-w-2xl">
                            Discover popular books loved by readers worldwide and exclusive limited-time offers
                        </p>
                    </div>
                    
                    <Link to="/books" className="flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0">
                        <span>View all books</span>
                        <FiArrowRight />
                    </Link>
                </div>

                {/* Bestsellers/Deals tabs */}
                <div className="mb-6">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab("bestsellers")}
                            className={`flex items-center gap-2 py-3 px-5 font-medium text-sm ${
                                activeTab === "bestsellers"
                                    ? "border-b-2 border-primary text-primary"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <FiTrendingUp />
                            <span>Bestsellers</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("deals")}
                            className={`flex items-center gap-2 py-3 px-5 font-medium text-sm ${
                                activeTab === "deals"
                                    ? "border-b-2 border-primary text-primary"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <FiPercent />
                            <span>Limited-Time Deals</span>
                        </button>
                    </div>
                </div>

                {/* Category filters */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-primary text-white'
                                        : 'bg-light text-secondary hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {displayedBooks.length > 0 ? (
                    <div className="book-slider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 24,
                                }
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {displayedBooks.map((book, index) => (
                                <SwiperSlide key={index} className="h-auto flex">
                                    <div className="h-full w-full">
                                        <BookCard 
                                            book={book} 
                                            isLimitedTime={activeTab === "deals"} 
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="text-center py-12 bg-light rounded-lg">
                        <p className="text-gray-500">
                            {activeTab === "deals" 
                                ? "No deals available in this category at the moment." 
                                : "No books found in this category"}
                        </p>
                        <button 
                            onClick={() => setSelectedCategory("All Books")}
                            className="mt-4 btn-primary"
                        >
                            View All Categories
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .book-slider .swiper-wrapper {
                    align-items: stretch;
                }
                .book-slider .swiper-slide {
                    height: auto;
                    display: flex;
                }
            `}</style>
        </section>
    )
}

export default TopSellers