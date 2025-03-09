import React from 'react'
import footerLogo from "../assets/footer-logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaGoodreads } from "react-icons/fa"
import { IoBookOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 pt-16 pb-10 px-6 sm:px-8 md:px-10">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <IoBookOutline className="size-8 text-amber-200" />
              <span className="text-2xl font-semibold text-amber-100">BookHaven</span>
            </div>
            <p className="text-amber-200 max-w-xs leading-relaxed">
              Your sanctuary for discovering stories that inspire, entertain, and transport you to new worlds.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-amber-800 hover:bg-amber-700 p-2.5 rounded-full transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="bg-amber-800 hover:bg-amber-700 p-2.5 rounded-full transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-amber-800 hover:bg-amber-700 p-2.5 rounded-full transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" 
                className="bg-amber-800 hover:bg-amber-700 p-2.5 rounded-full transition-colors">
                <FaGoodreads size={20} />
              </a>
            </div>
          </div>
          
          {/* Explore Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-100">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/new-releases" className="text-amber-200 hover:text-white transition-colors">New Releases</Link></li>
              <li><Link to="/bestsellers" className="text-amber-200 hover:text-white transition-colors">Bestsellers</Link></li>
              <li><Link to="/cart" className="text-amber-200 hover:text-white transition-colors">Your Cart</Link></li>
              <li><Link to="/orders" className="text-amber-200 hover:text-white transition-colors">Order History</Link></li>
            </ul>
          </div>
          
          {/* Categories Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-100">Book Categories</h3>
            <ul className="space-y-4">
              <li><Link to="/category/fiction" className="text-amber-200 hover:text-white transition-colors">Fiction</Link></li>
              <li><Link to="/category/non-fiction" className="text-amber-200 hover:text-white transition-colors">Non-Fiction</Link></li>
              <li><Link to="/category/business" className="text-amber-200 hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/category/horror" className="text-amber-200 hover:text-white transition-colors">Horror</Link></li>
              <li><Link to="/category/adventure" className="text-amber-200 hover:text-white transition-colors">Adventure</Link></li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-100">Join Our Newsletter</h3>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Subscribe to receive exclusive offers, new book alerts, and reading recommendations!
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-md transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-amber-800 my-8"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-amber-300 text-sm">
            © {new Date().getFullYear()} BookHaven. All rights reserved.
          </div>
          
          <ul className="flex flex-wrap gap-8 text-sm">
            <li><Link to="/privacy-policy" className="text-amber-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-amber-300 hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/shipping" className="text-amber-300 hover:text-white transition-colors">Shipping Policy</Link></li>
            <li><Link to="/contact" className="text-amber-300 hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer