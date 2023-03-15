import React from "react";
import ProductCategory from "../../Components/Categorys/ProductCategory";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="headphone" />
      <FeaturedProducts type="featured" />
      <ProductCategory />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
