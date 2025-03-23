import React from 'react'
import { Link } from 'react-router-dom'
import { FiBookOpen, FiBook, FiAward, FiMonitor, FiBriefcase, FiHeart, FiSmile, FiCode } from 'react-icons/fi'

const categories = [
  {
    id: 1,
    name: 'Fiction',
    icon: <FiBookOpen className="text-2xl" />,
    description: 'Explore worlds of imagination',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&h=400&fit=crop',
    url: '/books?category=fiction',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    name: 'Non-Fiction',
    icon: <FiBook className="text-2xl" />,
    description: 'Discover real-world knowledge',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&h=400&fit=crop',
    url: '/books?category=non-fiction',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 3,
    name: 'Academic',
    icon: <FiAward className="text-2xl" />,
    description: 'Scholarly texts and references',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&h=400&fit=crop',
    url: '/books?category=academic',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 4,
    name: 'Science & Tech',
    icon: <FiMonitor className="text-2xl" />,
    description: 'The future at your fingertips',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&h=400&fit=crop',
    url: '/books?category=science',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 5,
    name: 'Business & Economics',
    icon: <FiBriefcase className="text-2xl" />,
    description: 'Success strategies and insights',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&h=400&fit=crop',
    url: '/books?category=business',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 6,
    name: 'Self-Help',
    icon: <FiHeart className="text-2xl" />,
    description: 'Transform your life',
    image: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8?q=80&w=600&h=400&fit=crop',
    url: '/books?category=self-help',
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 7,
    name: 'Children\'s Books',
    icon: <FiSmile className="text-2xl" />,
    description: 'Magic for young minds',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&h=400&fit=crop',
    url: '/books?category=children',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 8,
    name: 'Technical',
    icon: <FiCode className="text-2xl" />,
    description: 'Programming and technical mastery',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=400&fit=crop',
    url: '/books?category=technical',
    color: 'from-green-500 to-teal-600'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block relative mb-4">
            Explore Categories
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your next favorite read from our carefully curated collection of book categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.url}
              className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
            >
              {/* Card with gradient overlay */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-70 transition-opacity group-hover:opacity-80`}></div>
                
                {/* Icon and text overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {category.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-1 drop-shadow-md">{category.name}</h3>
                    <p className="text-sm text-white/90 drop-shadow-md">{category.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Animated button at bottom */}
              <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-sm py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                <span className="text-white font-medium">Discover Books</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View all categories button */}
        <div className="text-center mt-10">
          <Link 
            to="/books" 
            className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-primary px-6 py-3 rounded-full text-primary hover:text-white hover:bg-primary transition-all duration-300 shadow-sm group"
          >
            <span>View All Categories</span>
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories 