import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../components/shop_style.css";

function isMobile() {
  return window.innerWidth < 576;
}

const LocalFavs = () => {
  var Airtable = require('airtable');
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patwumKgifTrIXkAz.d261f22792e68e58a13faa15b76c91cec4f6e19f064cbdfd3325b76853c590a5'
  });
  var base = Airtable.base('appOwlhkqWdaF7YpR');
  /*
  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_TOKEN,
  }).base("appRWYLyPrYJ68yEu");
  */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0)
      base("Local Favorites")
        .select({
          view: "Grid view",
          maxRecords: isMobile() ? 3 : 7,
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
      <h2>
        <strong>Local Favorites</strong>
      </h2>
      {isMobile() ? (
        <Carousel interval={null} variant="dark" nextIcon={null} wrap={false}>
          <Carousel.Item key={"1"}>
            <Row className="align-items-center">
              {products.slice(0, 2).map((product) => (
                <Col xs={6} md="auto">
                  <Link to={"/shop/product/${product.title}"}>
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
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item key={"2"}>
            <Row className="align-items-center">
              <Col xs={6} md="auto">
                <Link to={"#"}>
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={products[2]?.image} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        {products[2]?.title}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>
                        ${products[2]?.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col xs={6} md={3} className="d-flex justify-content-center">
                <Button variant="light">View All</Button>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel interval={null} variant="dark" indicators={null}>
          <Carousel.Item key={"3"}>
            <Row className="align-items-center">
              {products.slice(0, 4).map((product) => (
                <Col xs={6} md="auto">
                  <Link to={"#"}>
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
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item key={"4"}>
            <Row className="align-items-center">
              {products.slice(4, 7).map((product) => (
                <Col xs={6} md="auto">
                  {/* eslint-disable-next-line */}
                  <Link to={"#"}>
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
                  </Link>
                </Col>
              ))}
              <Col xs={6} md={3} className="d-flex justify-content-center">
                <Button variant="light">View All</Button>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default LocalFavs;
