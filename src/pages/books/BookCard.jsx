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

    const getFallbackImage = () => {
        // Use a default placeholder image from your assets
        return '/assets/books/book-1.png';
    }

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative overflow-hidden group">
                {book?.oldPrice && book?.oldPrice > book?.newPrice && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm z-10">
                        Sale
                    </span>
                )}
                <Link to={`/books/${book?._id}`}>
                    <img
                        src={imgError ? getFallbackImage() : getImgUrl(book?.coverImage)}
                        alt={book?.title || 'Book cover'}
                        onError={handleImageError}
                        className="w-full h-[200px] object-cover transform group-hover:scale-110 transition-transform duration-200"
                    />
                </Link>
            </div>
            {/* Rest of your component */}
            <div className="p-4 flex-grow flex flex-col">
                <Link to={`/books/${book?._id}`} className="flex-grow">
                    <h3 className="text-lg font-medium text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                        {book?.title}
                    </h3>
                </Link>
                <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2">
                        {book?.oldPrice && book?.oldPrice > book?.newPrice ? (
                            <>
                                <span className="text-gray-400 line-through">${book?.oldPrice}</span>
                                <span className="text-red-500 font-semibold">${book?.newPrice}</span>
                            </>
                        ) : (
                            <span className="text-gray-800 font-semibold">${book?.newPrice}</span>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => handleAddToCart(book)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <FiShoppingCart className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <HiOutlineHeart className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
