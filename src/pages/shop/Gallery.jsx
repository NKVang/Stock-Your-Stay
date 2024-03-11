import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../../components/Filter";
import LocalFavs from "./LocalFavs.jsx";
import LastStay from "./LastStay.jsx";
import Recommended from "./Recommended.jsx";
import "../../components/shop_style.css";

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
