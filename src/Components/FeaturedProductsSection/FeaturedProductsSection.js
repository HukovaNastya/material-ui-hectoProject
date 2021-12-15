import React from 'react';
import Container from '@mui/material/Container';
import FeaturedProductsTitle from '../FeaturedProductsTitle/FeaturedProductsTitle';
import ProductsSlider from '../ProductsSlider/ProductsSlider';


const FeaturedProductsSection = () => {
  return (
    <Container maxWidth="lg" style={{backgroundColor: "#fff", height: "100vh"}}>
      <FeaturedProductsTitle />
      <ProductsSlider/>


    </Container>
  )
}

export default FeaturedProductsSection;