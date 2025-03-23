import React from 'react'
import { FiShoppingCart, FiHeart, FiClock } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({book, isLimitedTime}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    
    // Calculate discount percentage
    const discountPercentage = book?.oldPrice > book?.newPrice
        ? Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100)
        : 0;

    // Randomly determine if this is a limited-time offer (for demo purposes)
    const isLimitedOffer = isLimitedTime || (discountPercentage > 15);
    
    return (
        <div className="card overflow-hidden transition-all duration-300 h-full flex flex-col">
            <div className="relative h-80">
                <Link to={`/books/${book._id}`}>
                    <div className="overflow-hidden h-full">
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt={book?.title}
                            className="book-card-image w-full object-cover h-full transform hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                </Link>
                
                {/* Favorite button */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full text-gray-600 hover:text-error transition-colors shadow-sm z-10">
                    <FiHeart className="text-lg" />
                </button>
                
                {/* Discount badge */}
                {discountPercentage > 0 && (
                    <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
                        {discountPercentage}% OFF
                    </div>
                )}
                
                {/* Limited-time offer badge */}
                {isLimitedOffer && (
                    <div className="absolute bottom-3 left-0 right-0 mx-auto w-max bg-primary/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10 flex items-center gap-1">
                        <FiClock />
                        <span>Limited-time offer</span>
                    </div>
                )}
            </div>
            
            <div className="p-4 flex-1 flex flex-col">
                <div className="mb-auto">
                    <span className="text-xs text-gray-500 uppercase mb-1 inline-block">{book?.category || 'Fiction'}</span>
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-lg font-bold text-secondary hover:text-primary transition-colors mb-2 line-clamp-2 h-14">
                            {book?.title}
                        </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
                        {book?.description || 'No description available'}
                    </p>
                </div>
                
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-baseline">
                            <span className="text-lg font-bold text-secondary">₹{book?.newPrice}</span>
                            {book?.oldPrice > book?.newPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">₹{book?.oldPrice}</span>
                            )}
                        </div>
                        <div className="text-sm text-gray-500">{book?.author || 'Unknown'}</div>
                    </div>
                    
                    <button 
                        onClick={() => handleAddToCart(book)}
                        className="w-full btn-primary flex items-center justify-center gap-2 py-2.5">
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard