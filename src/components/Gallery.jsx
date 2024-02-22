import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "./Filter";
import LocalFavs from "./LocalFavs";
import LastStay from "./LastStay";
import Recommended from "./Recommended";
import "./shop_style.css";

function Gallery() {
  return (
    <Container>
      <Row>
        <Col md="auto" className="main-shop-page-filter">
          <Filter />
        </Col>
        <Col>
          <Row>
            <LocalFavs />
          </Row>
          <Row>
            <LastStay />
          </Row>
          <Row>
            <Recommended />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
