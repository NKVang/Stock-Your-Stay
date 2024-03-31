import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { useBase } from "../assets/hooks/useBase";
import "./shop_style.css";
import { Link } from "react-router-dom";

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

const SubCategorySection = ({ tableName, filterByFormula }) => {
  var base = useBase();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0)
      base(tableName)
        .select({
          view: "Grid view",
          maxRecords: isMobile() ? 3 : 7,
          filterByFormula: filterByFormula,
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
          {segmentation(products, 5).map((seg, index) => (
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

                {seg.length < 5 && (
                  <Col
                    xs={6}
                    md="auto"
                    className="d-flex justify-content-center"
                  >
                    <Link to={`#`}>
                      <Button variant="light">View All</Button>
                    </Link>
                  </Col>
                )}
              </Row>
            </Carousel.Item>
          ))}
          {products.length % 5 === 0 && (
            <Carousel.Item>
              <Row className="align-items-center">
                <Col xs={6} md="auto" className="d-flex justify-content-center">
                  <Link to={`#`}>
                    <Button variant="light">View All</Button>
                  </Link>
                </Col>
              </Row>
            </Carousel.Item>
          )}
        </Carousel>
      )}
    </>
  );
};

export default SubCategorySection;
