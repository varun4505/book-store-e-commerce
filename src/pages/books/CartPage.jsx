import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getImgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';
import { FiShoppingCart, FiTrash2, FiArrowRight } from 'react-icons/fi';
import { IoBookOutline } from "react-icons/io5";

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch()
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }
    
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
    return (
        <div className="py-10">
            <div className="max-w-screen-xl mx-auto">
                {/* Cart Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                        <FiShoppingCart className="mr-3 text-amber-700" />
                        Your Book Cart
                    </h1>
                    {cartItems.length > 0 && (
                        <button
                            onClick={handleClearCart}
                            className="flex items-center gap-2 py-2 px-4 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
                        >
                            <FiTrash2 />
                            Clear Cart
                        </button>
                    )}
                </div>
                
                {/* Breadcrumbs */}
                <nav className="flex text-sm mb-6">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="text-gray-500 hover:text-amber-700">Home</Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-500">Shopping Cart</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                
                {cartItems.length === 0 ? (
                    <div className="bg-white shadow-md rounded-lg p-10 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-28 h-28 rounded-full bg-amber-50 flex items-center justify-center">
                                <IoBookOutline className="text-amber-700 w-14 h-14" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8">Looks like you haven't added any books to your cart yet.</p>
                        <Link 
                            to="/"
                            className="inline-block py-3 px-8 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
                        >
                            Browse Books
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Cart Items ({cartItems.length})
                                </h2>
                            </div>
                            
                            <ul className="divide-y divide-gray-200 px-6">
                                {cartItems.map((product) => (
                                    <li key={product?._id} className="py-6 flex">
                                        {/* Book Image */}
                                        <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                                            <img
                                                src={`${getImgUrl(product?.coverImage)}`}
                                                alt={product?.title}
                                                className="h-full w-full object-contain p-2"
                                            />
                                        </div>
                                        
                                        {/* Book Details */}
                                        <div className="ml-6 flex-1 flex flex-col">
                                            <div>
                                                <div className="flex justify-between">
                                                    <Link to={`/books/${product?._id}`}>
                                                        <h3 className="text-lg font-medium text-gray-800 hover:text-amber-700 transition-colors">
                                                            {product?.title}
                                                        </h3>
                                                    </Link>
                                                    <p className="text-lg font-medium text-gray-800">${product?.newPrice}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-amber-700">
                                                    {product?.author || "Unknown Author"}
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500 capitalize">
                                                    <span className="font-medium">Category:</span> {product?.category}
                                                </p>
                                            </div>
                                            
                                            <div className="mt-4 flex justify-between items-end">
                                                <div className="flex items-center border border-gray-200 rounded-md">
                                                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                                    <span className="px-3 py-1 text-gray-800 font-medium">1</span>
                                                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveFromCart(product)}
                                                    className="text-sm font-medium text-red-600 hover:text-red-500 flex items-center"
                                                >
                                                    <FiTrash2 className="mr-1" />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">${totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">$4.99</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tax</span>
                                        <span className="font-medium">${(totalPrice * 0.08).toFixed(2)}</span>
                                    </div>
                                    
                                    <div className="border-t border-gray-200 pt-4 mt-4">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-semibold text-gray-800">Total</span>
                                            <span className="text-lg font-semibold text-gray-800">
                                                ${(parseFloat(totalPrice) + 4.99 + parseFloat(totalPrice) * 0.08).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Coupon Code */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                                        />
                                        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Checkout Button */}
                                <Link
                                    to="/checkout"
                                    className="w-full bg-amber-700 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-amber-800 transition-colors"
                                >
                                    Proceed to Checkout
                                    <FiArrowRight />
                                </Link>
                                
                                {/* Continue Shopping */}
                                <Link to="/" className="flex items-center justify-center mt-4 text-amber-700 hover:text-amber-800 transition-colors">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Book Recommendations */}
                {cartItems.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Enjoy</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-white p-4 rounded-md shadow-md">
                                    <div className="h-40 flex items-center justify-center bg-amber-50 mb-4">
                                        <div className="w-24 h-36 bg-amber-100 animate-pulse rounded"></div>
                                    </div>
                                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage