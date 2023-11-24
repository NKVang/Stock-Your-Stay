import React from "react";
import { Row, Form } from "react-bootstrap";
import "./shop_style.css";

function Filter() {
  return (
    <>
      <Row className="row-filter">
        <Form.Check
          type="checkbox"
          aria-label="vegetables"
          label="Vegetables"
        />
      </Row>
      <Row className="row-filter">
        <Form.Check type="checkbox" aria-label="meats" label="Meats" />
      </Row>
      <Row className="row-filter">
        <Form.Check type="checkbox" aria-label="spices" label="Spices" />
      </Row>
      <Row className="row-filter">
        <Form.Check type="checkbox" aria-label="drinks" label="Drinks" />
      </Row>
      <Row className="row-filter">
        <Form.Check type="checkbox" aria-label="fruits" label="Fruits" />
      </Row>
      <Row className="row-filter">
        <Form.Check type="checkbox" aria-label="dessert" label="Dessert" />
      </Row>
      <Row className="row-filter">
        <Form.Check
          type="checkbox"
          aria-label="vegetables"
          label="Vegetables"
        />
      </Row>
      <Row className="row-filter">
        <Form.Check
          type="checkbox"
          aria-label="frozen-foods"
          label="Frozen Foods"
        />
      </Row>
      <Row className="row-filter">
        <Form.Check type="checkbox" aria-label="bread" label="Bread" />
      </Row>
      <Row className="row-filter">
        <Form.Check
          type="checkbox"
          aria-label="quick-lunch"
          label="Quick Lunch"
        />
      </Row>
      <Row className="row-filter">
        <Form.Check
          type="checkbox"
          aria-label="breakfast-for-lunch"
          label="Breakfast for Lunch"
        />
      </Row>
      <Row className="row-filter">
        <Form.Check type="checkbox" aria-label="pastas" label="Pastas" />
      </Row>
    </>
  );
}

export default Filter;
