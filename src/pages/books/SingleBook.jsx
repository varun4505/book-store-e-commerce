import React from 'react'
import { FiShoppingCart, FiHeart, FiShare2, FiBookmark } from "react-icons/fi"
import { useParams } from "react-router-dom"
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const {id} = useParams();
    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if(isLoading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
    
    if(isError) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-red-50 text-red-500 p-4 rounded-lg">Error loading book information</div>
        </div>
    );
  
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    {/* Book Image */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-md">
                            <img
                                src={`${getImgUrl(book.coverImage)}`}
                                alt={book.title}
                                className="w-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                            {book?.oldPrice > book?.newPrice && (
                                <div className="absolute top-4 left-4 bg-accent text-white font-bold px-4 py-1 rounded-full text-sm">
                                    {Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100)}% OFF
                                </div>
                            )}
                        </div>
                        
                        <div className="flex space-x-3 mt-6">
                            <button className="p-3 rounded-lg bg-light text-secondary hover:bg-gray-200 transition-colors">
                                <FiHeart />
                            </button>
                            <button className="p-3 rounded-lg bg-light text-secondary hover:bg-gray-200 transition-colors">
                                <FiBookmark />
                            </button>
                            <button className="p-3 rounded-lg bg-light text-secondary hover:bg-gray-200 transition-colors">
                                <FiShare2 />
                            </button>
                        </div>
                    </div>

                    {/* Book Details */}
                    <div className="flex flex-col">
                        <div className="px-1">
                            <div className="flex items-center mb-2">
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium uppercase">
                                    {book?.category || 'Fiction'}
                                </span>
                                <span className="ml-3 text-gray-500 text-sm">
                                    Published: {new Date(book?.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long', 
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            
                            <h1 className="text-3xl font-bold text-secondary mb-3">{book.title}</h1>
                            
                            <div className="mb-4">
                                <span className="text-gray-600">By </span>
                                <span className="font-medium text-secondary">{book.author || 'Unknown Author'}</span>
                            </div>
                            
                            <div className="mb-6">
                                <div className="flex items-baseline mb-4">
                                    <span className="text-3xl font-bold text-secondary">₹{book?.newPrice}</span>
                                    {book?.oldPrice > book?.newPrice && (
                                        <span className="text-xl text-gray-500 line-through ml-3">₹{book?.oldPrice}</span>
                                    )}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                                    <button 
                                        onClick={() => handleAddToCart(book)} 
                                        className="btn-primary flex items-center justify-center gap-2 py-3 px-10">
                                        <FiShoppingCart />
                                        <span>Add to Cart</span>
                                    </button>
                                    <button className="btn-secondary py-3">Buy Now</button>
                                </div>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="font-bold text-lg mb-3">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{book.description}</p>
                            </div>
                            
                            <div className="border-t border-gray-200 mt-6 pt-6">
                                <h3 className="font-bold text-lg mb-3">Product Details</h3>
                                <ul className="space-y-2">
                                    <li className="flex">
                                        <span className="font-medium w-32">Category:</span>
                                        <span className="text-gray-600 capitalize">{book?.category || 'Fiction'}</span>
                                    </li>
                                    <li className="flex">
                                        <span className="font-medium w-32">Publication:</span>
                                        <span className="text-gray-600">{new Date(book?.createdAt).getFullYear()}</span>
                                    </li>
                                    <li className="flex">
                                        <span className="font-medium w-32">Product ID:</span>
                                        <span className="text-gray-600">{book?._id.substring(0, 8)}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBook