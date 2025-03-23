import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiTrash2, FiShoppingBag, FiArrowLeft, FiMinus, FiPlus } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="bg-light min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 text-primary mb-6">
                    <Link to="/" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                        <FiArrowLeft />
                        <span>Continue Shopping</span>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-card overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-secondary">Your Shopping Cart</h1>
                            {cartItems.length > 0 && (
                                <button
                                    onClick={handleClearCart}
                                    className="flex items-center gap-2 text-sm text-error hover:bg-red-50 rounded-md px-3 py-1.5 transition-colors"
                                >
                                    <FiTrash2 />
                                    <span>Clear Cart</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {cartItems.length > 0 ? (
                        <div className="flex flex-col lg:flex-row">
                            {/* Cart Items */}
                            <div className="lg:w-2/3 p-6">
                                <ul className="divide-y divide-gray-100">
                                    {cartItems.map((product) => (
                                        <li key={product?._id} className="flex flex-col sm:flex-row py-6 gap-4">
                                            <div className="sm:w-24 sm:h-24 w-full h-40 flex-shrink-0 rounded-md border border-gray-200 overflow-hidden">
                                                <img
                                                    src={`${getImgUrl(product?.coverImage)}`}
                                                    alt={product?.title}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>

                                            <div className="flex flex-col flex-1 gap-2">
                                                <div className="flex justify-between">
                                                    <Link 
                                                        to={`/books/${product._id}`}
                                                        className="text-lg font-bold text-secondary hover:text-primary transition-colors"
                                                    >
                                                        {product?.title}
                                                    </Link>
                                                    <p className="font-bold text-secondary">₹{product?.newPrice}</p>
                                                </div>
                                                
                                                <p className="text-sm text-gray-500 capitalize">
                                                    <span className="font-medium">Category:</span> {product?.category}
                                                </p>
                                                
                                                <div className="mt-auto flex justify-between items-end">
                                                    <div className="flex items-center border rounded-md">
                                                        <button disabled className="p-2 text-gray-400 border-r">
                                                            <FiMinus size={14} />
                                                        </button>
                                                        <span className="px-4 py-1 text-center">1</span>
                                                        <button disabled className="p-2 text-gray-400 border-l">
                                                            <FiPlus size={14} />
                                                        </button>
                                                    </div>
                                                    
                                                    <button
                                                        onClick={() => handleRemoveFromCart(product)}
                                                        className="text-sm text-error hover:bg-red-50 rounded-md px-3 py-1.5 transition-colors flex items-center gap-1"
                                                    >
                                                        <FiTrash2 size={14} />
                                                        <span>Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Order Summary */}
                            <div className="lg:w-1/3 bg-gray-50 p-6 border-l border-gray-100">
                                <h2 className="text-xl font-bold text-secondary mb-6">Order Summary</h2>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">₹{totalPrice}</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">Calculated at checkout</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Taxes</span>
                                        <span className="font-medium">Calculated at checkout</span>
                                    </div>
                                    
                                    <div className="border-t border-gray-200 pt-4 mt-4">
                                        <div className="flex justify-between font-bold text-lg">
                                            <span>Total</span>
                                            <span>₹{totalPrice}</span>
                                        </div>
                                    </div>
                                    
                                    <Link
                                        to="/checkout"
                                        className="mt-6 w-full btn-primary flex items-center justify-center gap-2 py-3"
                                    >
                                        <FiShoppingBag />
                                        <span>Proceed to Checkout</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <div className="w-24 h-24 bg-light rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiShoppingBag className="text-4xl text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-secondary mb-2">Your cart is empty</h2>
                            <p className="text-gray-500 mb-8">Looks like you haven't added any books to your cart yet.</p>
                            <Link to="/books" className="btn-primary inline-flex items-center gap-2 px-8 py-3">
                                <span>Start Shopping</span>
                                <FiArrowLeft className="transform rotate-180" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartPage