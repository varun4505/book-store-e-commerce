import React from 'react'
import { FiBox, FiRefreshCw, FiStar, FiPercent } from 'react-icons/fi'

const features = [
  {
    id: 1,
    icon: <FiBox className="w-6 h-6" />,
    emoji: '📦',
    title: 'Free Shipping',
    description: 'On orders above $50.'
  },
  {
    id: 2,
    icon: <FiRefreshCw className="w-6 h-6" />,
    emoji: '🔄',
    title: 'Easy Returns',
    description: 'Hassle-free returns within 7 days.'
  },
  {
    id: 3,
    icon: <FiStar className="w-6 h-6" />,
    emoji: '⭐',
    title: 'Top-Rated Books',
    description: 'Verified customer reviews.'
  },
  {
    id: 4,
    icon: <FiPercent className="w-6 h-6" />,
    emoji: '🔥',
    title: 'Exclusive Discounts',
    description: 'Get the best deals on popular books.'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block relative mb-4">
            Why Choose Us?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best book shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-light rounded-xl p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="md:w-3/4 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Start Your Reading Journey?</h3>
              <p className="text-white/90 md:text-lg">
                Join thousands of happy readers and discover your next favorite book today!
              </p>
            </div>
            <div>
              <a href="/books" className="inline-block py-3 px-8 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
                Browse Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 