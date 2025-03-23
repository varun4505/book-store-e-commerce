import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useGetOrderByEmailQuery } from '../../../redux/features/orders/ordersApi';
import { HiOutlineShoppingBag, HiOutlineClock, HiOutlineCalendar, HiOutlineCash, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Loading from '../../../components/Loading';

const UserDashboard = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email);
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const toggleOrderExpand = (orderId) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };

    const getStatusBadge = (status) => {
        const statusMap = {
            'pending': 'bg-yellow-100 text-yellow-800',
            'processing': 'bg-blue-100 text-blue-800',
            'delivered': 'bg-green-100 text-green-800',
            'cancelled': 'bg-red-100 text-red-800',
        };
        return statusMap[status] || 'bg-gray-100 text-gray-800';
    };

    if (isLoading) return <Loading />;
    if (isError) return <div className="p-8 text-center text-red-500">Error getting orders data</div>;

    return (
        <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                {/* User Info Section */}
                <div className="bg-primary bg-opacity-95 text-white p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">My Dashboard</h1>
                            <p className="mt-1 text-white text-opacity-90">Welcome back, {currentUser?.name || 'User'}!</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-lg">
                                <div className="h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center">
                                    {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{currentUser?.email}</p>
                                    <p className="text-xs text-white text-opacity-80">Member since {new Date(currentUser?.createdAt || Date.now()).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orders Summary */}
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                        <HiOutlineShoppingBag className="mr-2 h-5 w-5 text-primary" />
                        Your Orders ({orders.length})
                    </h2>
                    <p className="mt-1 text-gray-600">Track and manage your book purchases</p>
                </div>

                {/* Orders List */}
                <div className="px-4 py-2 sm:px-6">
                    {orders.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {orders.map((order) => (
                                <li key={order._id} className="py-4">
                                    <div 
                                        className="cursor-pointer"
                                        onClick={() => toggleOrderExpand(order._id)}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                                                    <HiOutlineShoppingBag className="h-5 w-5" />
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        Order #{order._id.substring(order._id.length - 8)}
                                                    </p>
                                                    <div className="flex items-center mt-1">
                                                        <HiOutlineCalendar className="h-4 w-4 text-gray-500 mr-1" />
                                                        <p className="text-xs text-gray-500">
                                                            {new Date(order?.createdAt).toLocaleDateString()} at {new Date(order?.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 sm:mt-0 flex items-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(order.status || 'pending')}`}>
                                                    {order.status || 'Pending'}
                                                </span>
                                                <div className="ml-4 flex items-center">
                                                    <HiOutlineCash className="mr-1 h-4 w-4 text-gray-500" />
                                                    <span className="text-sm font-medium text-gray-900">₹{order.totalPrice}</span>
                                                </div>
                                                <div className="ml-2">
                                                    {expandedOrderId === order._id ? (
                                                        <HiChevronUp className="h-5 w-5 text-gray-500" />
                                                    ) : (
                                                        <HiChevronDown className="h-5 w-5 text-gray-500" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Order Details */}
                                    {expandedOrderId === order._id && (
                                        <div className="mt-4 ml-14 bg-gray-50 p-4 rounded-lg">
                                            <h4 className="text-sm font-medium text-gray-900 mb-2">Order Items</h4>
                                            <div className="space-y-3">
                                                {order.products ? (
                                                    order.products.map((product, idx) => (
                                                        <div key={idx} className="flex items-start">
                                                            <div className="flex-shrink-0 h-10 w-10 rounded bg-gray-200 overflow-hidden">
                                                                {product.image ? (
                                                                    <img 
                                                                        src={product.image} 
                                                                        alt={product.title} 
                                                                        className="h-full w-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <div className="h-full w-full flex items-center justify-center bg-gray-300">
                                                                        <span className="text-xs text-gray-600">No img</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-sm font-medium text-gray-900">{product.title || 'Book Title'}</p>
                                                                <p className="text-xs text-gray-500">Qty: {product.quantity || 1} × ₹{product.price || 0}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    order.productIds.map((productId, idx) => (
                                                        <div key={idx} className="text-sm text-gray-700">
                                                            <span className="font-medium">Product ID:</span> {productId}
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                            
                                            <div className="mt-4 pt-3 border-t border-gray-200">
                                                <div className="flex justify-between text-sm">
                                                    <span className="font-medium text-gray-700">Shipping Address:</span>
                                                    <span className="text-gray-600">{order.shippingAddress || 'Not provided'}</span>
                                                </div>
                                                {order.trackingId && (
                                                    <div className="flex justify-between text-sm mt-2">
                                                        <span className="font-medium text-gray-700">Tracking ID:</span>
                                                        <span className="text-gray-600">{order.trackingId}</span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between text-sm mt-2">
                                                    <span className="font-medium text-gray-700">Payment Method:</span>
                                                    <span className="text-gray-600">{order.paymentMethod || 'Standard'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="py-12 text-center">
                            <HiOutlineShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No orders yet</h3>
                            <p className="mt-1 text-sm text-gray-500">Start shopping and your orders will appear here.</p>
                            <div className="mt-6">
                                <button 
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 focus:outline-none"
                                    onClick={() => window.location.href = '/'}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
