import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 1,
    name: 'Fiction',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&h=400&fit=crop',
    url: '/books?category=fiction'
  },
  {
    id: 2,
    name: 'Non-Fiction',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&h=400&fit=crop',
    url: '/books?category=non-fiction'
  },
  {
    id: 3,
    name: 'Academic',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&h=400&fit=crop',
    url: '/books?category=academic'
  },
  {
    id: 4,
    name: 'Science & Tech',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&h=400&fit=crop',
    url: '/books?category=science'
  },
  {
    id: 5,
    name: 'Business & Economics',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&h=400&fit=crop',
    url: '/books?category=business'
  },
  {
    id: 6,
    name: 'Self-Help',
    image: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8?q=80&w=600&h=400&fit=crop',
    url: '/books?category=self-help'
  },
  {
    id: 7,
    name: 'Children\'s Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&h=400&fit=crop',
    url: '/books?category=children'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="section-title inline-block relative mb-4">
            Featured Categories
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of book categories and find your perfect read
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.url}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-24 sm:h-32 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="px-3 py-2.5 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors">{category.name}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories 