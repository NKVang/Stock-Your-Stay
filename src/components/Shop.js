import React from "react";
import Category from "./Category";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop_style.css";

function Shop() {
  return (
    <div>
      <Category />
      <Gallery />
    </div>
  );
}

export default Shop;
