import React from "react";
import { Container, Col, Button } from "react-bootstrap";
import "./shop_style.css";
import { Link } from 'react-router-dom'

function CategoryButtons() {
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
      </Col>
    </Container>
  );
}

export default CategoryButtons;
