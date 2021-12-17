import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import FeaturedProductsSection from '../../Components/FeaturedProductsSection/FeaturedProductsSection';

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <FeaturedProductsSection/>
    </div>
  )
}

export default Home;