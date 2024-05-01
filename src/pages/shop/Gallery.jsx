import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../../components/Filter";
import "../../components/shop_style.css";
import ShopSection from "../../components/ShopSection.jsx";

function Gallery() {
  const categories = [
    {
      id: 1, // added id to each category to get rid of console warning
      name: "Recommended",
      tableName: "Products",
      tableField: "Tags",
      tableTag: "recommended",
      sortField: "",
    },
    {
      id: 2,
      name: "Local Favorites",
      tableName: "Products",
      tableField: "Tags",
      tableTag: "local favorites",
      sortField: "Purchase Count",
    },
    {
      id: 3,
      name: "Breakfast",
      tableName: "Products",
      tableField: "Tags",
      tableTag: "breakfast",
      sortField: "",
    },
    {
      id: 4,
      name: "Snacks",
      tableName: "Products",
      tableField: "Tags",
      tableTag: "snacks",
      sortField: "",
    },
    {
      id: 5,
      name: "Lunch",
      tableName: "Products",
      tableField: "Tags",
      tableTag: "lunch",
      sortField: "",
    },
    // add more categories as needed for main shop page, local favorites has a
    // specific exception as it isn't a tag, thus will make usage of location instead
  ];

  return (
    <Container>
      <Row>
        <Col md="auto" className="main-shop-page-filter">
          <Filter />
        </Col>
        <Col>
          {categories.map((category) => (
            // react requires child in lists to have unique key prop
            <Row key={category.id}>
              <h2>
                <strong>{category.name}</strong>
              </h2>
              <ShopSection
                name={category.name}
                tableName={category.tableName}
                tableField={category.tableField}
                tableTag={category.tableTag}
                sortField={category.sortField}
              />
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
