import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import FeaturedCategories from './FeaturedCategories'
import WhyChooseUs from './WhyChooseUs'
import Community from '../community'

const Home = () => {
  return (
    <>
      <div id="home-section">
        <Banner/>
      </div>
      <div id="best-sellers-section">
        <TopSellers/>
      </div>
      <WhyChooseUs />
      <div id="categories-section">
        <FeaturedCategories />
      </div>
      <div id="new-arrivals-section">
        <Recommended/>
      </div>
      <div id="community-section">
        <Community />
      </div>
    </>
  )
}

export default Home