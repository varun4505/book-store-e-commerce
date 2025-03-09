import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { HiOutlineHeart } from "react-icons/hi2";
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from'react-router-dom'
import { useDispatch } from'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({book}) => {
    const dispatch = useDispatch();
    const [imgError, setImgError] = useState(false);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleImageError = () => {
        console.warn('Image failed to load:', book?.coverImage);
        setImgError(true);
    }

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
            {/* Book Cover with hover effect */}
            <div className="relative overflow-hidden group">
                {/* Sale badge */}
                {book?.oldPrice && book?.oldPrice > book?.newPrice && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                        SALE
                    </span>
                )}
                
                <Link to={`/books/${book._id}`} className="block">
                    <div className="relative h-64 bg-amber-50 flex items-center justify-center p-5">
                        {/* Book Spine Effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-amber-700 to-amber-600"></div>
                        
                        {/* Book Shadow Effect */}
                        <div className="absolute inset-0 opacity-10 shadow-inner"></div>
                        
                        <img
                            src={imgError ? '/vite.svg' : getImgUrl(book?.coverImage)}
                            alt={book?.title}
                            onError={handleImageError}
                            className="h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </Link>
                
                {/* Quick action buttons that appear on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="bg-white text-amber-700 p-2.5 rounded-full mx-1.5 hover:bg-amber-700 hover:text-white transition-colors"
                        title="Add to Cart"
                    >
                        <FiShoppingCart className="size-5" />
                    </button>
                    <button
                        className="bg-white text-amber-700 p-2.5 rounded-full mx-1.5 hover:bg-amber-700 hover:text-white transition-colors"
                        title="Add to Wishlist"
                    >
                        <HiOutlineHeart className="size-5" />
                    </button>
                </div>
            </div>

            {/* Book Details */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Author name */}
                <p className="text-sm text-amber-700 mb-1.5">{book?.author || "Unknown Author"}</p>
                
                {/* Book Title */}
                <Link to={`/books/${book._id}`}>
                    <h3 className="font-semibold text-gray-800 hover:text-amber-700 transition-colors mb-2.5 line-clamp-1">
                        {book?.title}
                    </h3>
                </Link>
                
                {/* Book Description */}
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                    {book?.description || "No description available"}
                </p>
                
                {/* Price and Rating section */}
                <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-baseline">
                            <span className="text-lg font-bold text-amber-800">${book?.newPrice}</span>
                            {book?.oldPrice && book?.oldPrice > book?.newPrice && (
                                <span className="line-through text-sm text-gray-500 ml-2">${book?.oldPrice}</span>
                            )}
                        </div>
                        
                        {/* Star Rating placeholder - you might want to implement this for real */}
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < (book?.rating || 4) ? "text-yellow-400" : "text-gray-300"}`} 
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button 
                        onClick={() => handleAddToCart(book)}
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2.5 rounded-md transition-colors flex items-center justify-center gap-2">
                        <FiShoppingCart className="size-4" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard