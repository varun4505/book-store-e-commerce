import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { HiOutlineHeart, HiOutlineShare } from "react-icons/hi2"
import { useParams, Link } from "react-router-dom"
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery, useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const {id} = useParams();
    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);
    const {data: allBooks = []} = useFetchAllBooksQuery();
    
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    
    // Find related books (same category)
    const relatedBooks = allBooks
        .filter(b => b._id !== id && b.category === book?.category)
        .slice(0, 4);
    
    if(isLoading) return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-700 border-solid"></div>
      </div>
    );
    
    if(isError) return (
      <div className="text-center py-16">
        <h2 className="text-2xl text-red-600 mb-4">Error Loading Book</h2>
        <p className="mb-8">We're unable to load this book's information at the moment.</p>
        <Link to="/" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md">
          Return to Homepage
        </Link>
      </div>
    );
    
  return (
    <div className="py-8">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <nav className="flex text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-500 hover:text-amber-700">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <Link to={`/category/${book.category}`} className="text-gray-500 hover:text-amber-700 capitalize">{book.category}</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-500 truncate max-w-[150px]">{book.title}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Book Cover */}
          <div className="md:w-1/3">
            <div className="relative">
              {/* Book image with frame effect */}
              <div className="relative bg-amber-50 p-4 rounded-md shadow-md">
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-amber-800 to-amber-700"></div>
                
                <img
                  src={`${getImgUrl(book.coverImage)}`}
                  alt={book.title}
                  className="w-full object-contain mx-auto"
                />
                
                {/* Sale tag if on sale */}
                {book.oldPrice > book.newPrice && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                    SALE
                  </div>
                )}
              </div>
              
              {/* Social sharing buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <HiOutlineHeart className="size-5 text-amber-800" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <HiOutlineShare className="size-5 text-amber-800" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Book details */}
          <div className="md:w-2/3">
            {/* Book title and author */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
            <p className="text-lg text-amber-700 mb-6">by {book.author || 'Unknown'}</p>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < (book?.rating || 4) ? "text-yellow-400" : "text-gray-300"}`} 
                      fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">(48 reviews)</span>
              </div>
            </div>
            
            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-gray-800">${book.newPrice}</span>
              {book.oldPrice > book.newPrice && (
                <span className="line-through text-gray-500 ml-2">${book.oldPrice}</span>
              )}
              {book.oldPrice > book.newPrice && (
                <span className="ml-2 bg-amber-100 text-amber-800 text-sm px-2 py-1 rounded">
                  Save ${(book.oldPrice - book.newPrice).toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Book details */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Publication Date</p>
                <p className="font-medium">{new Date(book?.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Category</p>
                <p className="font-medium capitalize">{book?.category}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Pages</p>
                <p className="font-medium">{book?.pages || '320'}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Language</p>
                <p className="font-medium">{book?.language || 'English'}</p>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <div className="bg-amber-50 p-4 rounded-md">
                <p className="text-gray-700 leading-relaxed">{book.description}</p>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleAddToCart(book)} 
                className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-md flex items-center gap-2 transition-colors"
              >
                <FiShoppingCart className="size-5" />
                <span>Add to Cart</span>
              </button>
              
              <button className="border border-amber-700 text-amber-700 hover:bg-amber-50 py-3 px-8 rounded-md transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Books */}
      {relatedBooks.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedBooks.map((relatedBook) => (
              <Link 
                to={`/books/${relatedBook._id}`} 
                key={relatedBook._id}
                className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 flex items-center justify-center mb-4">
                  <img 
                    src={getImgUrl(relatedBook.coverImage)} 
                    alt={relatedBook.title} 
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="font-medium text-gray-800 line-clamp-1">{relatedBook.title}</h3>
                <p className="text-sm text-amber-700">{relatedBook.author || 'Unknown'}</p>
                <p className="mt-2 font-semibold">${relatedBook.newPrice}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleBook