import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="productsList">
      {products.map((product, index) => (
        <div className="individualProduct" key={index}>
          <Link to={`/shop/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </Link>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
