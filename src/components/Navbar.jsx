import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline, IoBookOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const categories = [
    {name: "Fiction", href:"/category/fiction"},
    {name: "Non-Fiction", href:"/category/non-fiction"},
    {name: "Business", href:"/category/business"},
    {name: "Horror", href:"/category/horror"},
    {name: "Adventure", href:"/category/adventure"},
]

const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
   
    const {currentUser, logout} = useAuth()
    
    const handleLogOut = () => {
        logout()
    }
    const token = localStorage.getItem('token');
  
    return (
        <header className="bg-[#f9f5eb] border-b border-gray-200">
            <nav className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 py-5">
                <div className="flex justify-between items-center">
                    {/* left side - Logo */}
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-2">
                            <IoBookOutline className="size-8 text-amber-700" />
                            <span className="text-xl font-semibold text-amber-800">BookHaven</span>
                        </Link>
                    </div>
                    
                    {/* Navigation links - Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="relative text-gray-600 font-medium hover:text-amber-700 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-amber-700 after:transition-all hover:after:w-full">Home</Link>
                        <div className="relative">
                            <button 
                                className="relative text-gray-600 font-medium hover:text-amber-700 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-amber-700 after:transition-all hover:after:w-full flex items-center gap-1" 
                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            >
                                Categories
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {isCategoryOpen && (
                                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md z-30 w-48">
                                    <ul className="py-2">
                                        {categories.map((category) => (
                                            <li key={category.name}>
                                                <Link 
                                                    to={category.href} 
                                                    className="block px-4 py-2.5 text-sm hover:bg-amber-50"
                                                    onClick={() => setIsCategoryOpen(false)}
                                                >
                                                    {category.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link to="/new-releases" className="relative text-gray-600 font-medium hover:text-amber-700 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-amber-700 after:transition-all hover:after:w-full">New Releases</Link>
                        <Link to="/bestsellers" className="relative text-gray-600 font-medium hover:text-amber-700 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-amber-700 after:transition-all hover:after:w-full">Bestsellers</Link>
                    </div>
                    
                    {/* search input */}
                    <div className="relative sm:w-72 w-40 hidden md:block">
                        <IoSearchOutline className="absolute inline-block left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input type="text" placeholder="Search for books..."
                            className="bg-white w-full py-2.5 md:px-10 px-6 rounded-full border border-gray-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                    </div>
                    
                    {/* right side */}
                    <div className="flex items-center gap-5">
                        <button className="md:hidden">
                            <HiMiniBars3CenterLeft className="size-6" />
                        </button>

                        <div className="relative">
                            {currentUser ? (
                                <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avatarImg} alt="" className={`size-8 rounded-full ${currentUser ? 'ring-2 ring-amber-500' : ''}`} />
                                </button>
                                {/* show dropdowns */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className="block px-5 py-2.5 text-sm hover:bg-amber-50">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                onClick={handleLogOut}
                                                className="block w-full text-left px-5 py-2.5 text-sm hover:bg-amber-50">Logout</button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                </>
                            ) : token ? (
                                <Link to="/dashboard" className='border-b-2 border-amber-600'>Dashboard</Link>
                            ) : (
                                <Link to="/login" className="hover:text-amber-700">
                                    <HiOutlineUser className="size-6" />
                                </Link>
                            )}
                        </div>
                        
                        <button className="hidden sm:block hover:text-amber-700">
                            <HiOutlineHeart className="size-6" />
                        </button>
                        
                        <Link to="/cart" className="bg-amber-700 hover:bg-amber-800 transition-colors p-2.5 sm:px-6 px-3 flex items-center rounded-full text-white">
                            <HiOutlineShoppingCart className='size-5' />
                            {cartItems.length > 0 ? (
                                <span className="text-sm font-semibold sm:ml-2">{cartItems.length}</span>
                            ) : (
                                <span className="text-sm font-semibold sm:ml-2">0</span>
                            )}
                        </Link>
                    </div>
                </div>

                {/* Mobile search bar */}
                <div className="mt-5 relative md:hidden">
                    <IoSearchOutline className="absolute inline-block left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input type="text" placeholder="Search for books..."
                        className="bg-white w-full py-2.5 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-amber-500"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;