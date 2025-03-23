import React from 'react'
import { FiArrowRight, FiThumbsUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommended = () => {
    const {data: books = []} = useFetchAllBooksQuery();
    const recommendedBooks = books.slice(8, 18);
    
    return (
        <section className="py-16 bg-light">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h2 className="section-title inline-block relative mb-2">
                            Recommended For You
                            <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary rounded-full"></span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl">
                            Personalized picks based on your reading preferences
                        </p>
                    </div>
                    
                    <Link to="/books" className="flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0">
                        <span>View all recommendations</span>
                        <FiArrowRight />
                    </Link>
                </div>

                {/* Recommendation note */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                        <FiThumbsUp size={24} />
                    </div>
                    <p className="text-secondary">
                        <span className="font-medium">Book recommendations just for you!</span> Based on your browsing history, purchases, and readers with similar interests.
                    </p>
                </div>

                {/* Horizontal scrolling list */}
                <div className="relative">
                    {/* Book List with horizontal scroll */}
                    <div className="overflow-x-auto pb-4 hide-scrollbar">
                        <div className="flex space-x-6" style={{ minWidth: "max-content" }}>
                            {recommendedBooks.length > 0 ? (
                                recommendedBooks.map((book, index) => (
                                    <div key={index} className="w-64 flex-shrink-0 h-full">
                                        <div className="h-full">
                                            <BookCard book={book} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 w-full">
                                    <p className="text-gray-500">Loading recommendations...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                `}
            </style>
        </section>
    )
}

export default Recommended 