import React from "react";
import { Container, Col, Button } from "react-bootstrap";
import "./shop_style.css";

function Category() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }} className="center-align">
      <Col className="d-flex justify-content-center">
        <Button size="sm" variant="light">
          Breakfast
        </Button>
        <Button size="sm" variant="light">
          Snacks
        </Button>
        <Button size="sm" variant="light">
          Lunch
        </Button>
        <Button size="sm" variant="light">
          Dinner
        </Button>
      </Col>
    </Container>
  );
}

export default Category;
