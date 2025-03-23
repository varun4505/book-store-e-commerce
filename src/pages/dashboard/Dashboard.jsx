import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import getBaseUrl from '../../utils/baseURL';
import RevenueChart from './RevenueChart';
import { 
  HiOutlineBookOpen, 
  HiOutlineCash,
  HiOutlineShoppingCart,
  HiOutlineTrendingUp,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineRefresh,
  HiChevronRight,
  HiOutlineExclamation
} from "react-icons/hi";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const navigate = useNavigate();

    const fetchDashboardData = async () => {
        try {
            setRefreshing(true);
            const response = await axios.get(`${getBaseUrl()}/api/admin`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });

            setData(response.data);
            setLoading(false);
            setRefreshing(false);
        } catch (error) {
            console.error('Error:', error);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const handleRefresh = () => {
        fetchDashboardData();
    };

    if(loading) return <Loading/>;

    // Sample data for recent orders
    const recentOrders = [
        { id: 'ORD-2023-001', customer: 'Annette Watson', total: '₹249.90', date: '2023-05-10', status: 'Delivered' },
        { id: 'ORD-2023-002', customer: 'Calvin Steward', total: '₹189.95', date: '2023-05-09', status: 'Processing' },
        { id: 'ORD-2023-003', customer: 'Ralph Richards', total: '₹325.00', date: '2023-05-08', status: 'Pending' },
        { id: 'ORD-2023-004', customer: 'Bernard Murphy', total: '₹159.99', date: '2023-05-07', status: 'Delivered' },
    ];

    const statusColor = (status) => {
        switch(status.toLowerCase()) {
            case 'delivered': return 'bg-green-100 text-green-800';
            case 'processing': return 'bg-blue-100 text-blue-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-12 pb-12 px-6 md:px-8 lg:px-12">
            {/* Dashboard Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                        <p className="text-gray-500 mt-1">Welcome to your BookStore admin dashboard</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button 
                            onClick={handleRefresh}
                            disabled={refreshing}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            {refreshing ? (
                                <HiOutlineRefresh className="animate-spin -ml-1 mr-2 h-5 w-5" />
                            ) : (
                                <HiOutlineRefresh className="-ml-1 mr-2 h-5 w-5" />
                            )}
                            {refreshing ? 'Refreshing...' : 'Refresh Data'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {/* Total Books */}
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow border-l-4 border-primary">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-500">Total Books</span>
                            <span className="text-2xl font-bold text-gray-800 mt-1">{data?.totalBooks || 0}</span>
                        </div>
                        <div className="p-3 rounded-full bg-primary-light text-primary">
                            <HiOutlineBookOpen className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-green-500 font-medium">+12.5%</span>
                        <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                    <div className="mt-3">
                        <button 
                            onClick={() => navigate('/admin/books')}
                            className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                        >
                            View all books
                            <HiChevronRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Total Sales */}
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-500">Total Sales</span>
                            <span className="text-2xl font-bold text-gray-800 mt-1">₹{data?.totalSales || 0}</span>
                        </div>
                        <div className="p-3 rounded-full bg-green-100 text-green-600">
                            <HiOutlineCash className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-green-500 font-medium">+8.2%</span>
                        <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                    <div className="mt-3">
                        <button 
                            onClick={() => navigate('/admin/sales')}
                            className="text-green-600 text-sm font-medium inline-flex items-center hover:underline"
                        >
                            View sales report
                            <HiChevronRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Total Orders */}
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-500">Total Orders</span>
                            <span className="text-2xl font-bold text-gray-800 mt-1">{data?.totalOrders || 0}</span>
                        </div>
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                            <HiOutlineShoppingCart className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-green-500 font-medium">+5.1%</span>
                        <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                    <div className="mt-3">
                        <button 
                            onClick={() => navigate('/admin/orders')}
                            className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline"
                        >
                            Manage orders
                            <HiChevronRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Trending Books */}
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-500">Trending Books</span>
                            <span className="text-2xl font-bold text-gray-800 mt-1">{data?.trendingBooks || 0}</span>
                        </div>
                        <div className="p-3 rounded-full bg-red-100 text-red-600">
                            <HiOutlineTrendingUp className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-red-500 font-medium">+13%</span>
                        <span className="text-gray-500 ml-1">this month</span>
                    </div>
                    <div className="mt-3">
                        <button 
                            onClick={() => navigate('/admin/trending')}
                            className="text-red-600 text-sm font-medium inline-flex items-center hover:underline"
                        >
                            View trending
                            <HiChevronRight className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Monthly Revenue and Recent Customers - Top Row */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
                    {/* Revenue Chart */}
                    <div className="bg-white rounded-lg shadow-sm lg:col-span-2">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-lg text-gray-800">Monthly Revenue</h2>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 text-xs font-medium rounded-md bg-primary-light text-primary">Month</button>
                                    <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-500 hover:bg-gray-200">Quarter</button>
                                    <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-500 hover:bg-gray-200">Year</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 h-80">
                            <RevenueChart />
                        </div>
                    </div>

                    {/* Recent Customers */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-lg text-gray-800">Recent Customers</h2>
                                <button 
                                    onClick={() => navigate('/admin/customers')}
                                    className="text-sm text-primary font-medium hover:underline"
                                >
                                    View All
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="divide-y divide-gray-100">
                                {[
                                    { name: "Annette Watson", avatar: "https://randomuser.me/api/portraits/women/82.jpg", value: "₹149.90" },
                                    { name: "Calvin Steward", avatar: "https://randomuser.me/api/portraits/men/81.jpg", value: "₹89.95" },
                                    { name: "Ralph Richards", avatar: "https://randomuser.me/api/portraits/men/80.jpg", value: "₹125.00" },
                                    { name: "Bernard Murphy", avatar: "https://randomuser.me/api/portraits/men/79.jpg", value: "₹59.99" }
                                ].map((customer, index) => (
                                    <li key={index} className="py-3 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img 
                                                src={customer.avatar} 
                                                alt={`${customer.name} profile`} 
                                                className="h-10 w-10 rounded-full object-cover mr-3"
                                            />
                                            <span className="text-sm font-medium text-gray-700">{customer.name}</span>
                                        </div>
                                        <span className="text-sm font-bold text-secondary">{customer.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Orders - Clear separate section */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-lg text-gray-800">Recent Orders</h2>
                            <button 
                                onClick={() => navigate('/admin/orders')}
                                className="text-sm text-primary font-medium hover:underline flex items-center"
                            >
                                View All Orders
                                <HiChevronRight className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-gray-900">{order.id}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-8 w-8">
                                                    <img className="h-8 w-8 rounded-full" 
                                                         src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${80 + index}.jpg`} 
                                                         alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-700">{order.date}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{order.total}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button 
                                                className="text-primary hover:text-primary-dark px-3 py-1 rounded hover:bg-primary-light transition-colors inline-flex items-center"
                                                onClick={() => navigate(`/admin/orders/${order.id}`)}
                                            >
                                                View
                                                <HiChevronRight className="ml-1 h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Additional Stats */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Website Visits */}
                    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-medium text-gray-700">Website Visits</h3>
                            <div className="p-2 rounded-full bg-gray-100 text-gray-500">
                                <HiOutlineGlobe className="h-5 w-5" />
                            </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="block text-2xl font-bold text-gray-800">1,247</span>
                                <span className="text-sm text-green-500 font-medium">+12% from last week</span>
                            </div>
                            <div className="flex h-16 items-end space-x-1">
                                <div className="w-4 bg-primary rounded-t h-6"></div>
                                <div className="w-4 bg-primary rounded-t h-8"></div>
                                <div className="w-4 bg-primary rounded-t h-12"></div>
                                <div className="w-4 bg-primary rounded-t h-10"></div>
                                <div className="w-4 bg-primary rounded-t h-16"></div>
                                <div className="w-4 bg-primary rounded-t h-12"></div>
                                <div className="w-4 bg-primary rounded-t h-14"></div>
                            </div>
                        </div>
                    </div>

                    {/* Pending Orders */}
                    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-medium text-gray-700">Pending Orders</h3>
                            <div className="p-2 rounded-full bg-gray-100 text-gray-500">
                                <HiOutlineClock className="h-5 w-5" />
                            </div>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-gray-800">5</span>
                            <span className="text-sm text-yellow-500 font-medium">Requires action</span>
                            <div className="mt-4">
                                <button 
                                    className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-opacity-90 transition-colors"
                                    onClick={() => navigate('/admin/orders?status=pending')}
                                >
                                    Process Orders
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* New Users */}
                    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-medium text-gray-700">New Users</h3>
                            <div className="p-2 rounded-full bg-gray-100 text-gray-500">
                                <HiOutlineUsers className="h-5 w-5" />
                            </div>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-gray-800">24</span>
                            <span className="text-sm text-green-500 font-medium">+3 today</span>
                            <div className="mt-4 flex -space-x-2">
                                {[75, 74, 73, 72, 71].map((num, index) => (
                                    <img 
                                        key={index}
                                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                        src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${num}.jpg`}
                                        alt="User"
                                    />
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">+19</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alerts & Notifications */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-medium text-gray-700">System Notifications</h3>
                        <button className="text-primary text-sm font-medium">Mark all as read</button>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                                <HiOutlineExclamation className="h-5 w-5 text-yellow-400" />
                            </div>
                            <div className="ml-3">
                                <h4 className="text-sm font-medium text-yellow-800">Low Stock Alert</h4>
                                <p className="text-sm text-yellow-700 mt-1">3 books are currently low on stock. Consider restocking soon.</p>
                                <div className="mt-2">
                                    <button 
                                        className="text-sm font-medium text-yellow-800 hover:underline"
                                        onClick={() => navigate('/admin/inventory')}
                                    >
                                        View Inventory
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 border border-green-200 bg-green-50 rounded-lg flex items-start">
                            <div className="flex-shrink-0 mt-0.5">
                                <HiOutlineRefresh className="h-5 w-5 text-green-400" />
                            </div>
                            <div className="ml-3">
                                <h4 className="text-sm font-medium text-green-800">System Update Complete</h4>
                                <p className="text-sm text-green-700 mt-1">The system has been updated to the latest version successfully.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;