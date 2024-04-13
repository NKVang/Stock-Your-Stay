import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../../components/Filter";
import "../../components/shop_style.css";
import ShopSection from "../../components/ShopSection.jsx";

function Gallery() {
  const categories = [
    { name: "Recommended", tableName: "Products", tableField: "Tags", tableTag: "recommended", sortField: '' },
    { name: "Local Favorites", tableName: "Products", tableField: "Tags", tableTag: "local favorites", sortField: 'Purchase Count' },
    { name: "Breakfast", tableName: "Products", tableField: "Tags", tableTag: "breakfast", sortField: '' },
    { name: "Snacks", tableName: "Products", tableField: "Tags", tableTag: "snacks", sortField: '' },
    { name: "Lunch", tableName: "Products", tableField: "Tags", tableTag: "lunch", sortField: '' },
    // add more category as needed, local favorates incomplete due to lacking location information saved and in airtable field
  ];

  return (
    <Container>
      <Row>
        <Col md="auto" className="main-shop-page-filter">
          <Filter />
        </Col>
        <Col>
          {categories.map((category) => (
            <>
              <Row>
                <h2>
                  <strong>{category.name}</strong>
                </h2>
                <ShopSection name={category.name} tableName={category.tableName} tableField={category.tableField} tableTag={category.tableTag} sortField={category.sortField} />
              </Row>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
