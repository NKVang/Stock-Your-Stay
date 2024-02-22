import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../../assets/styles/shop.css";
import Category from "../../components/Category.jsx";
import Gallery from "../../components/Gallery.jsx";

const Shop = () => {
  return (
    <div>
      <Category />
      <Gallery />
    </div>
  );
};

export default Shop;
