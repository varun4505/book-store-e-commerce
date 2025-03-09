import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import getBaseUrl from '../../utils/baseURL';
import { MdIncompleteCircle } from 'react-icons/md'
import RevenueChart from './RevenueChart';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [monthlyRevenue, setMonthlyRevenue] = useState({});
    const [currentOrderPrice, setCurrentOrderPrice] = useState(0);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    // console.log(data)
    const navigate = useNavigate()

    // Add this fake data
    const fakeUsers = [
        {
            _id: 1,
            name: "John Doe",
            email: "john@example.com",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            isActive: true,
            orders: [
                { totalPrice: 99.99, createdAt: "2024-03-15" },
                { totalPrice: 149.99, createdAt: "2024-03-20" }
            ]
        },
        {
            _id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            isActive: true,
            orders: [
                { totalPrice: 79.99, createdAt: "2024-03-18" }
            ]
        },
        {
            _id: 3,
            name: "Mike Johnson",
            email: "mike@example.com",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            isActive: false,
            orders: [
                { totalPrice: 199.99, createdAt: "2024-03-10" },
                { totalPrice: 89.99, createdAt: "2024-03-12" },
                { totalPrice: 129.99, createdAt: "2024-03-19" }
            ]
        }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${getBaseUrl()}/api/admin`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                });

                const updatedRevenue = { ...response.data.monthlyRevenue };
                updatedRevenue.December += currentOrderPrice;

                setData(response.data);
                setMonthlyRevenue(updatedRevenue);
                setOrders(response.data.orders || []);
                // Use fake users instead of API data
                setUsers(fakeUsers);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                // Still set fake users even if API fails
                setUsers(fakeUsers);
                setOrders([]);
                setLoading(false);
            }
        }

        fetchData();
    }, [currentOrderPrice]);

    useEffect(() => {
        // Increment the visit count in localStorage
        const visits = localStorage.getItem('visits') || 0;
        localStorage.setItem('visits', parseInt(visits) + 1);
    }, []);

    // console.log(data)

    const genreData = [
        { name: 'Fiction', value: 400 },
        { name: 'Non-Fiction', value: 300 },
        { name: 'Science Fiction', value: 300 },
        { name: 'Fantasy', value: 200 },
        { name: 'Mystery', value: 100 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

    if(loading) return <Loading/>

  return (
    <>
     <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data?.totalBooks}</span>
                  <span className="block text-gray-500">Products</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">${data?.totalSales}</span>
                  <span className="block text-gray-500">Total Sales</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{data?.trendingBooks}</span>
                  <span className="inline-block text-xl text-gray-500 font-semibold">(13%)</span>
                  <span className="block text-gray-500">Trending Books in This Month</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <MdIncompleteCircle className='size-6'/>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data?.totalOrders}</span>
                  <span className="block text-gray-500">Total Orders</span>
                </div>
              </div>
            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">The number of orders per month</div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  <RevenueChart/>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5-9 5z" />
                    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{data?.totalOrders}</span>
                  <span className="block text-gray-500">Orders left</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{localStorage.getItem('visits')}</span>
                  <span className="block text-gray-500">Total Website visits</span>
                </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Users by average order</span>
                  <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
    
                </div>
                <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture"/>
                      </div>
                      <span className="text-gray-600">Annette Watson</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture"/>
                      </div>
                      <span className="text-gray-600">Calvin Steward</span>
                      <span className="ml-auto font-semibold">8.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture"/>
                      </div>
                      <span className="text-gray-600">Ralph Richards</span>
                      <span className="ml-auto font-semibold">8.7</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture"/>
                      </div>
                      <span className="text-gray-600">Bernard Murphy</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture"/>
                      </div>
                      <span className="text-gray-600">Arlene Robertson</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture"/>
                      </div>
                      <span className="text-gray-600">Jane Lane</span>
                      <span className="ml-auto font-semibold">8.1</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture"/>
                      </div>
                      <span className="text-gray-600">Pat Mckinney</span>
                      <span className="ml-auto font-semibold">7.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture"/>
                      </div>
                      <span className="text-gray-600">Norman Walters</span>
                      <span className="ml-auto font-semibold">7.7</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
                <div className="p-4 flex-grow">
                    <PieChart width={300} height={300}>
                        <Pie
                            data={genreData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {genreData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
              </div>
            </section>
            <div className="flex flex-col bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <span>Users and Orders</span>
                        <input 
                            type="search" 
                            placeholder="Search users..." 
                            className="text-sm border rounded px-3 py-1"
                        />
                    </div>
                </div>
                <div className="p-4 flex-grow overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total Orders</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Order</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {Array.isArray(users) && users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    <img 
                                                        className="h-10 w-10 rounded-full" 
                                                        src={user.avatar || 'https://via.placeholder.com/40'} 
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm">{user.email}</td>
                                        <td className="px-4 py-3 text-sm">{user.orders?.length || 0}</td>
                                        <td className="px-4 py-3 text-sm">
                                            ${user.orders?.reduce((total, order) => total + (order.totalPrice || 0), 0).toFixed(2)}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {user.orders?.length > 0 
                                                ? new Date(user.orders[user.orders.length - 1].createdAt).toLocaleDateString()
                                                : 'No orders'
                                            }
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                                {user.isActive ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-4 py-3 text-center text-gray-500">
                                        {loading ? "Loading..." : "No users found"}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
    </>
  )
}

export default Dashboard