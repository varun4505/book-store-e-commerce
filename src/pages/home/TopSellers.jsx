import React from 'react';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import BookCard from '../books/BookCard';

const TopSellers = () => {
  const { data: books = [], isLoading, isError } = useFetchAllBooksQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading books.</div>;

  const filteredBooks = books.filter((book) => book.isTopSeller);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Top Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellers;