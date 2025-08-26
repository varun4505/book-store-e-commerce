import React from 'react'
import { Link } from 'react-router-dom'
import { FiBookOpen, FiUsers } from 'react-icons/fi'

// Import all book images
import book1 from "../../assets/books/book-1.png"
import book2 from "../../assets/books/book-2.png"
import book3 from "../../assets/books/book-3.png"
import book4 from "../../assets/books/book-4.png"
import book5 from "../../assets/books/book-5.png"
import book6 from "../../assets/books/book-6.png"
import book7 from "../../assets/books/book-7.png"
import book8 from "../../assets/books/book-8.png"
import book9 from "../../assets/books/book-9.png"
import book10 from "../../assets/books/book-10.png"
import book11 from "../../assets/books/book-11.png"
import book12 from "../../assets/books/book-12.png"
import book13 from "../../assets/books/book-13.png"
import book14 from "../../assets/books/book-14.png"
import book15 from "../../assets/books/book-15.png"
import book16 from "../../assets/books/book-16.png"
import book17 from "../../assets/books/book-17.png"
import book18 from "../../assets/books/book-18.png"
import book19 from "../../assets/books/book-19.png"
import book20 from "../../assets/books/book-20.png"
import girlStop from "../../assets/books/girl-stop.png"
import rideLifetime from "../../assets/books/ride-lifetime.png"
import youngBucks from "../../assets/books/young-bucks.png"

const Banner = () => {
  // Array of all book images
  const bookImages = [
    { img: book1, alt: "Book 1" },
    { img: book2, alt: "Book 2" },
    { img: book3, alt: "Book 3" },
    { img: book4, alt: "Book 4" },
    { img: book5, alt: "Book 5" },
    { img: book6, alt: "Book 6" },
    { img: book7, alt: "Book 7" },
    { img: book8, alt: "Book 8" },
    { img: book9, alt: "Book 9" },
    { img: book10, alt: "Book 10" },
    { img: book11, alt: "Book 11" },
    { img: book12, alt: "Book 12" },
    { img: book13, alt: "Book 13" },
    { img: book14, alt: "Book 14" },
    { img: book15, alt: "Book 15" },
    { img: book16, alt: "Book 16" },
    { img: book17, alt: "Book 17" },
    { img: book18, alt: "Book 18" },
    { img: book19, alt: "Book 19" },
    { img: book20, alt: "Book 20" },
    { img: girlStop, alt: "Girl Stop" },
    { img: rideLifetime, alt: "Ride of a Lifetime" },
    { img: youngBucks, alt: "Young Bucks" }
  ];


  // Function to scroll to books section
  const scrollToBooks = () => {
    const booksSection = document.getElementById('books-section');
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary/5 to-light/20 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-20 overflow-hidden -mt-6">
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Text content */}
          <div className="w-full lg:w-2/5 max-w-xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Discover Your Next <span className="text-primary">Favorite Book</span>
            </h1>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Find everything from bestsellers to rare collections. 
              Browse our extensive library with exclusive discounts on every purchase.
            </p>

            <button 
              onClick={scrollToBooks}
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg rounded-lg
                        transition-transform hover:scale-105 hover:shadow-lg mb-8">
              <FiBookOpen className="text-xl" />
              <span>Explore Books</span>
            </button>
          </div>
          
          {/* Automated Carousel */}
          <div className="w-full lg:w-3/5 mt-10 lg:mt-0">
            {/* First Carousel Row - Moving Left to Right */}
            <div className="relative overflow-hidden mb-6 py-2">
              <div className="flex w-max animate-carousel-ltr">
                {bookImages.map((book, index) => (
                  <div key={`row1-${index}`} className="carousel-item">
                    <div className="bg-white p-4 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] 
                                  transform transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] 
                                  hover:-translate-y-2 hover:-rotate-2 group">
                      <div className="relative overflow-hidden rounded-md">
                        <img 
                          src={book.img} 
                          alt={book.alt} 
                          className="h-52 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate the images to make a seamless loop */}
                {bookImages.map((book, index) => (
                  <div key={`row1-dup-${index}`} className="carousel-item">
                    <div className="bg-white p-4 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] 
                                  transform transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] 
                                  hover:-translate-y-2 hover:-rotate-2 group">
                      <div className="relative overflow-hidden rounded-md">
                        <img 
                          src={book.img} 
                          alt={book.alt} 
                          className="h-52 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Fade effect on the sides */}
              <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-primary/5 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary/5 to-transparent z-10"></div>
            </div>
            
            {/* Second Carousel Row - Moving Right to Left (reverse) */}
            <div className="relative overflow-hidden py-2">
              <div className="flex w-max animate-carousel-rtl">
                {[...bookImages].reverse().map((book, index) => (
                  <div key={`row2-${index}`} className="carousel-item">
                    <div className="bg-white p-4 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] 
                                  transform transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] 
                                  hover:-translate-y-2 hover:rotate-2 group">
                      <div className="relative overflow-hidden rounded-md">
                        <img 
                          src={book.img} 
                          alt={book.alt} 
                          className="h-52 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate the images to make a seamless loop */}
                {[...bookImages].reverse().map((book, index) => (
                  <div key={`row2-dup-${index}`} className="carousel-item">
                    <div className="bg-white p-4 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.07)] 
                                  transform transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] 
                                  hover:-translate-y-2 hover:rotate-2 group">
                      <div className="relative overflow-hidden rounded-md">
                        <img 
                          src={book.img} 
                          alt={book.alt} 
                          className="h-52 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Fade effect on the sides */}
              <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-primary/5 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary/5 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
