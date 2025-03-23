import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsBook } from "react-icons/bs";

import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    {name: "Home", id: "home-section"},
    {name: "Best Sellers", id: "best-sellers-section"},
    {name: "Recommended", id: "new-arrivals-section"},
    {name: "Categories", id: "categories-section"},
    {name: "Community", id: "community-section"},
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const cartItems = useSelector(state => state.cart.cartItems);
    const navigate = useNavigate();
    const location = useLocation();
   
    const {currentUser, logout} = useAuth();
    
    const handleLogOut = () => {
        logout();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery("");
        }
    };

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        console.log(`Attempting to scroll to section: ${id}`);
        
        // If not on homepage, go to homepage first then scroll
        if (location.pathname !== '/') {
            console.log('Not on homepage, navigating to homepage first');
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    console.log('Found element, scrolling into view');
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.log(`Element with id "${id}" not found after navigation`);
                }
            }, 500); // Increased timeout to ensure the page has time to load
        } else {
            // Already on homepage, just scroll
            console.log('Already on homepage, scrolling directly');
            const element = document.getElementById(id);
            if (element) {
                console.log('Found element, scrolling into view');
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log(`Element with id "${id}" not found`);
            }
        }
    };

    const token = localStorage.getItem('token');
  
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto px-4 py-4">
                {/* Main Navigation */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <BsBook className="w-8 h-8 text-primary" />
                        <span className="text-xl font-heading font-bold text-secondary">BookHaven</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex ml-10 space-x-8">
                        {navigation.map((item) => (
                            <button 
                                key={item.name} 
                                onClick={() => scrollToSection(item.id)}
                                className="text-secondary hover:text-primary font-medium font-secondary transition-colors duration-200 cursor-pointer bg-transparent border-none"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Search Bar (For medium screens and up) */}
                    <div className="hidden md:flex items-center justify-end flex-1">
                        <form onSubmit={handleSearch} className="flex w-full max-w-sm">
                            <div className="relative w-full">
                                <input 
                                    type="text" 
                                    placeholder="Search books..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                                />
                                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <IoSearchOutline className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center space-x-4 ml-4">
                        {/* Favorites */}
                        <Link to="/favorites" className="text-secondary hover:text-primary transition-colors duration-200">
                            <HiOutlineHeart className="w-6 h-6" />
                        </Link>

                        {/* User */}
                        <div className="relative">
                            {currentUser ? (
                                <button 
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="text-secondary hover:text-primary transition-colors duration-200"
                                >
                                    <img src={avatarImg} alt="" className="size-8 rounded-full ring-2 ring-primary/20" />
                                </button>
                            ) : token ? (
                                <Link to="/dashboard" className="text-secondary hover:text-primary transition-colors duration-200">
                                    <HiOutlineUser className="w-6 h-6" />
                                </Link>
                            ) : (
                                <Link to="/login" className="text-secondary hover:text-primary transition-colors duration-200">
                                    <HiOutlineUser className="w-6 h-6" />
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {isDropdownOpen && currentUser && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-40 overflow-hidden border transition-colors duration-200">
                                    <ul className="py-1">
                                        <li>
                                            <Link to="/user-dashboard" className="block px-4 py-2 text-sm text-secondary hover:bg-light transition-colors duration-200">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/orders" className="block px-4 py-2 text-sm text-secondary hover:bg-light transition-colors duration-200">
                                                Orders
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cart" className="block px-4 py-2 text-sm text-secondary hover:bg-light transition-colors duration-200">
                                                Cart
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogOut}
                                                className="block w-full text-left px-4 py-2 text-sm text-secondary hover:bg-light transition-colors duration-200"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <Link to="/cart" className="text-secondary hover:text-primary transition-colors duration-200 relative">
                            <HiOutlineShoppingCart className="w-6 h-6" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden text-secondary hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <IoClose className="w-6 h-6" />
                            ) : (
                                <HiOutlineMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-5 space-y-6">
                            {/* Mobile search */}
                            <form onSubmit={handleSearch} className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for books..."
                                    className="bg-light border border-gray-200 w-full py-2 px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-secondary transition-colors duration-200"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button 
                                    type="submit"
                                    className="absolute left-3 top-2.5 text-gray-500 hover:text-primary transition-colors"
                                >
                                    <IoSearchOutline />
                                </button>
                            </form>

                            {/* Mobile Navigation */}
                            <ul className="space-y-4">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <button 
                                            onClick={() => scrollToSection(item.id)}
                                            className="block text-secondary hover:text-primary font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none w-full text-left"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile icons */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <Link 
                                    to="/favorites" 
                                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <HiOutlineHeart className="size-6" />
                                    <span>Wishlist</span>
                                </Link>
                                
                                <Link 
                                    to="/cart" 
                                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <HiOutlineShoppingCart className="size-6" />
                                    <span>Cart ({cartItems.length})</span>
                                </Link>
                            </div>

                            {!currentUser && !token && (
                                <Link 
                                    to="/login" 
                                    className="btn-primary w-full flex justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login / Register
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar;