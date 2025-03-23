import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import BookCard from '../books/BookCard'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi'

const RandomizedBooks = () => {
    const { data: books = [] } = useFetchAllBooksQuery()
    
    // Create a shuffled copy of the books array
    const shuffledBooks = React.useMemo(() => {
        const booksToShuffle = [...books]
        // Fisher-Yates shuffle algorithm
        for (let i = booksToShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[booksToShuffle[i], booksToShuffle[j]] = [booksToShuffle[j], booksToShuffle[i]]
        }
        return booksToShuffle.slice(0, 8) // Get up to 8 books for display
    }, [books])

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h2 className="section-title mb-2">Discover More Books</h2>
                        <p className="text-gray-600 max-w-2xl">
                            Explore our collection of handpicked books for your reading pleasure
                        </p>
                    </div>
                    
                    <Link to="/books" className="flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0">
                        <span>Browse all books</span>
                        <FiArrowRight />
                    </Link>
                </div>

                {/* Grid view of randomized books */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {shuffledBooks.length > 0 ? (
                        shuffledBooks.map((book, index) => (
                            <div key={book._id || index} className="h-full">
                                <BookCard book={book} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-4 text-center py-12">
                            <p className="text-gray-500">Loading books...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default RandomizedBooks 