import React from "react";
import "./shop_style.css";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function isMobile() {
  return window.innerWidth < 576;
}

function segmentation(array, size) {
  const segments = [];
  for (let i = 0; i < array.length; i += size) {
    segments.push(array.slice(i, i + size));
  }
  return segments;
}

function SubCat3() {
  var Airtable = require('airtable');
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'patwumKgifTrIXkAz.d261f22792e68e58a13faa15b76c91cec4f6e19f064cbdfd3325b76853c590a5'
    });
  var base = Airtable.base('appOwlhkqWdaF7YpR');

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    if (products.length === 0)
      base("Recommended")
        .select({
          view: "Grid view",
          filterByFormula: 'AND({Price} < 10, {Price} > 4)',
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              const tempRecord = record._rawJson.fields;
              const newProduct = {
                title: tempRecord.title,
                price: tempRecord.price,
                image: tempRecord.image[0].url,
              };
              setProducts((oldProducts) =>
                !oldProducts.find(
                  (product) => product.title === newProduct.title
                )
                  ? [...oldProducts, newProduct]
                  : oldProducts
              );
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>Under 10 Dollars and Above 4</h2>
      {/* Display this if on mobile */}
      {isMobile() ? (
        <Carousel interval={null} variant="dark" nextIcon={null} wrap={false}>
          {segmentation(products, 2).map((seg, index) => (
          <Carousel.Item key={index}>
            <Row className="align-items-center">
              {seg.map((product) => (
                <Col xs={6} md="auto">
                  <a href={"#"}>
                    <Card
                      style={{
                        width: "200px",
                        padding: "15px",
                        marginRight: "1%",
                      }}
                    >
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body className="text-center">
                        <Card.Title style={{ fontSize: "15px" }}>
                          {product.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "13px" }}>
                          ${product.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                ))}
            </Row>
          </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        // Desktop view
        <Carousel
          interval={null}
          variant="dark"
          prevLabel={null}
          prevIcon={null}
          nextLabel={null}
          indicators={null}
          touch={false}
        >
          {segmentation(products, 4).map((seg, index) => (
          <Carousel.Item key={index}>
            <Row className="align-items-center">
              {seg.map((product) => (
                <Col xs={6} md="auto">
                  <a href={"#"}>
                    <Card
                      style={{
                        width: "200px",
                        padding: "15px",
                        marginRight: "1%",
                      }}
                    >
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body className="text-center">
                        <Card.Title style={{ fontSize: "15px" }}>
                          {product.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "13px" }}>
                          ${product.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                ))}
            </Row>
          </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default SubCat3;
