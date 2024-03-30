import React from "react";
import "./viewAll.css"; // Import CSS file for styling
import products from "./viewAllExampleProducts";
import CategoryButtons from "./CategoryButtons";
import { Row, Col } from "react-bootstrap";

/* This is the page that shows all the items within a subcategory */

/* This function displays the product info such as name, image, price */
const ProductList = ({ products }) => {
  return (
    <div className="productsList">
      {products.map((product, index) => (
        <div className="individualProduct" key={index}>
          {/* temporary to disable compile warnings until actual linking  */}
          {/* eslint-disable-next-line */}
          <a href={"shop/product/" + product.recordId}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </a>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

/* This is the sort and filter buttons. They don't have any functionality currently */
const SortFilter = () => {
  return (
    <div className="caret-dropdown justify-content-end">
      <div className="dropdown-title">
        <span className="heading">Filter</span>
        <div className="filter">
          <select>
            <option>All</option>
            <option>Location</option>
            <option>Beverages</option>
            <option>Water</option>
          </select>
        </div>
      </div>
      <div className="dropdown-title">
        <span className="heading">Sort By</span>
        <div className="sort">
          <select>
            <option>Best Selling</option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>Price, Low to High</option>
            <option>Pirce, High to Low</option>
            <option>Date, Old to New</option>
            <option>Date, New to Old</option>
          </select>
        </div>
      </div>
    </div>
  );
};

/* These are the components/containers that make up the  viewAll Page */
const viewAll = () => {
  return (
    <div className="productListContainer">
      <CategoryButtons />
      <Row>
        <Col className="category-name">
          <h2>Waters</h2>
        </Col>
        <Col>
          <SortFilter />
        </Col>
      </Row>
      <ProductList products={products} />
    </div>
  );
};

export default viewAll;
