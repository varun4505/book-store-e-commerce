import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading';
import BookCard from './BookCard';
import getBaseUrl from '../../utils/baseURL';
import { HiOutlineSearch } from "react-icons/hi";

const SearchResults = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchQuery) {
                setBooks([]);
                setLoading(false);
                return;
            }
            
            setLoading(true);
            setError(null);
            
            try {
                const response = await axios.get(`${getBaseUrl()}/api/books/search?query=${encodeURIComponent(searchQuery)}`);
                setBooks(response.data);
            } catch (err) {
                console.error('Error fetching search results:', err);
                setError('Failed to fetch search results. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);

    if (loading) return <Loading />;

    return (
        <div className="bg-light min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-secondary mb-2">Search Results</h1>
                    {!error && (
                        <p className="text-gray-600">
                            {books.length > 0
                                ? `Found ${books.length} results for "${searchQuery}"`
                                : `No results found for "${searchQuery}"`}
                        </p>
                    )}
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                {!error && books.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {books.map(book => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                ) : !error && (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <HiOutlineSearch className="text-3xl text-gray-400" />
                        </div>
                        <h2 className="text-xl font-bold text-secondary mb-2">No Books Found</h2>
                        <p className="text-gray-500 max-w-md mx-auto">
                            We couldn't find any books matching your search. Please try a different search term.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults; 