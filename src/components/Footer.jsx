import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FiMail, FiMap, FiPhone } from 'react-icons/fi'
import { BsBook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BsBook className="text-accent text-2xl" />
              <span className="font-heading text-xl font-bold text-white">BookHaven</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your premier destination for discovering and purchasing the best books from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors block py-1">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors block py-1">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-accent transition-colors block py-1">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-accent transition-colors block py-1">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-accent transition-colors block py-1">Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMap className="text-accent mt-1 mr-3" />
                <span className="text-gray-300">VIT, Vellore Campus, Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-accent mr-3" />
                <span className="text-gray-300">+91 8168276054</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-accent mr-3" />
                <span className="text-gray-300">varun452005@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest releases and promotions.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent border-none"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BookHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer