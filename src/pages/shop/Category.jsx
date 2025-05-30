import React from "react";
import { Container, Col, Button, DropdownButton, Form } from "react-bootstrap";
import "../../components/shop_style.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }} className="center-align">
      <Col className="d-flex justify-content-center">
      <Link to={'/sub-category/breakfast'}>
          <Button size="sm" variant="light">
            Breakfast
          </Button>
        </Link>
        <Link to={'/sub-category/snacks'}>
          <Button size="sm" variant="light">
            Snacks
          </Button>
        </Link>
        <Link to={'/sub-category/lunch'}>
          <Button size="sm" variant="light">
            Lunch
          </Button>
        </Link>
        <Link to={'/sub-category/dinner'}>
          <Button size="sm" variant="light">
            Dinner
          </Button>
        </Link>
        <DropdownButton
          title="More Filters..."
          size="sm"
          variant="light mobile-filter filter-dropdown"
        >
          
          <Form.Check
            type="checkbox"
            aria-label="vegetables"
            label="Vegetables"
          />
          <Form.Check type="checkbox" aria-label="meats" label="Meats" />
          <Form.Check type="checkbox" aria-label="spices" label="Spices" />
          <Form.Check type="checkbox" aria-label="drinks" label="Drinks" />
          <Form.Check type="checkbox" aria-label="fruits" label="Fruits" />
          <Form.Check type="checkbox" aria-label="dessert" label="Dessert" />
          <Form.Check
            type="checkbox"
            aria-label="vegetables"
            label="Vegetables"
          />
          <Form.Check
            type="checkbox"
            aria-label="frozen-foods"
            label="Frozen Foods"
          />
          <Form.Check type="checkbox" aria-label="bread" label="Bread" />
          <Form.Check
            type="checkbox"
            aria-label="quick-lunch"
            label="Quick Lunch"
          />
          <Form.Check
            type="checkbox"
            aria-label="breakfast-for-lunch"
            label="Breakfast for Lunch"
          />
          <Form.Check type="checkbox" aria-label="pastas" label="Pastas" />
        </DropdownButton>
      </Col>
    </Container>
  );
}

export default Category;
