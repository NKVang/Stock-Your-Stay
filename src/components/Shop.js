import React from "react";
import Footer from "./Footer";
import Category from "./Category";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop_style.css";

function Shop() {
  return (
    <div>
      <Category />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Shop;
