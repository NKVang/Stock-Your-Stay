import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../../components/Filter";
import "../../components/shop_style.css";
import ShopSection from "../../components/ShopSection.jsx";

function Gallery() {
  const categories = [
    { name: "Breakfast", tableName: "Breakfast" },
    { name: "Snacks", tableName: "Snacks" },
    { name: "Lunch", tableName: "Lunch" },
    // add more category as needed
  ];

  return (
    <Container>
      <Row>
        <Col md="auto" className="main-shop-page-filter">
          <Filter />
        </Col>
        <Col>
          <Row>
            <h2>
              <strong>Local Favorites</strong>
            </h2>
            <ShopSection tableName={"Local Favorites"} />
          </Row>
          <Row>
            <h2>
              <strong>From Your Last Stay</strong>
            </h2>
            <ShopSection tableName={"From Your Last Stay"} />
          </Row>
          <Row>
            <h2>
              <strong>Recommended</strong>
            </h2>
            <ShopSection tableName={"Recommended"} />
          </Row>

          {categories.map((category) => (
            <>
              <Row>
                <h2>
                  <strong>{category.name}</strong>
                </h2>
                <ShopSection tableName={category.tableName} />
              </Row>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
