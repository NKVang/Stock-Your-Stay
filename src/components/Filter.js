import React from "react";
import { Row, Form, Button } from "react-bootstrap";
import "./shop_style.css";
import { Link } from "react-router-dom";

function Filter() {
  return (
    <>
      <Row className="row-filter">
        <Link to="/sub-category/meat">
          <Button variant="light" className="filter-button">Meat</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/vegetables">
          <Button variant="light" className="filter-button">Vegetables</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/water">
          <Button variant="light" className="filter-button">Water</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/fruits">
          <Button variant="light" className="filter-button">Fruits</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/dessert">
          <Button variant="light" className="filter-button">Dessert</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/frozen">
          <Button variant="light" className="filter-button">Frozen</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/bread">
          <Button variant="light" className="filter-button">Bread</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/pasta">
          <Button variant="light" className="filter-button">Pasta</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/beverages">
          <Button variant="light" className="filter-button">Beverages</Button>
        </Link>
      </Row>
      <Row className="row-filter">
        <Link to="/sub-category/pasta">
          <Button variant="light" className="filter-button">Pasta</Button>
        </Link>
      </Row>
    </>
  );
}

export default Filter;
