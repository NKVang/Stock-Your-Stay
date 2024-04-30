import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./shop_style.css";
import { useBase } from "../assets/hooks/useBase";
import { pascalCase, truncate, isMobile } from "./Functions";

const ShopSection = ({ name, tableName, tableField, tableTag, sortField }) => {
  var base = useBase();
  /*
  const base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_TOKEN,
  }).base("appRWYLyPrYJ68yEu");
  */
  const [products, setProducts] = useState([]);
  /*
  function generateURL(tags) {
    let url = "/sub-category/";
  
    if (tags.includes("Local Favorites")) {
      url += "local-favorites";
    } else {
      url += tags.join("-");
    }
  
    return url;
  }*/

  useEffect(() => {
    if (products.length === 0) {
      let tag = tableTag;
      if (tag.toLowerCase().includes("local favorite")) {
        tag = "";
      }
      base(tableName)
        .select({
          view: "Grid view",
          maxRecords: isMobile() ? 3 : 7,
          ...(sortField && { sort: [{ field: sortField, direction: "desc" }] }),
          ...(tableTag && {
            filterByFormula: `FIND('${tag}', {${tableField}})`,
          }),
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              const tempRecord = record._rawJson.fields;
              const newProduct = {
                title: tempRecord.title,
                price: tempRecord.price,
                image: tempRecord.image[0].url,
                id: record.id,
                table: tableTag,
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
    }
  }, []);

  return (
    <>
      {isMobile() ? (
        <Carousel interval={null} variant="dark" nextIcon={null} wrap={false}>
          <Carousel.Item key={"1"}>
            <Row className="align-items-center">
              {products.slice(0, 2).map((product) => (
                <Col key={product.id} xs={6} md="auto">
                  <Link
                    to={`/shop/product/${product.id}`}
                    state={{ category: `${product.table}` }}
                  >
                    <Card
                      style={{
                        width: "200px",
                        minHeight: "300px",
                        maxHeight: "300px",
                        padding: "15px",
                        marginRight: "1%",
                      }}
                    >
                      <Card.Img
                        src={product.image}
                        style={{
                          objectFit: "contain",
                          minHeight: "200px",
                          maxHeight: "200px",
                        }}
                      />
                      <Card.Body
                        className="text-center"
                        style={{
                          minHeight: "100px",
                          maxHeight: "100px",
                          padding: "16px 0px 0px 0px",
                        }}
                      >
                        <Card.Title
                          style={{ fontSize: "15px", minHeight: "36px" }}
                        >
                          {truncate(product.title)}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "13px" }}>
                          ${product.price.toFixed(2)}
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
              <Col key={products[2]?.id} xs={6} md="auto">
                <Link
                  to={`/shop/product/${products[2]?.id}`}
                  state={{ category: `${products[2]?.table}` }}
                >
                  <Card
                    style={{
                      width: "220px",
                      minHeight: "300px",
                      maxHeight: "300px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={products[2]?.image}
                      style={{
                        objectFit: "contain",
                        minHeight: "200px",
                        maxHeight: "200px",
                      }}
                    />
                    <Card.Body
                      className="text-center"
                      style={{
                        minHeight: "100px",
                        maxHeight: "100px",
                        padding: "16px 0px 0px 0px",
                      }}
                    >
                      <Card.Title
                        style={{ fontSize: "15px", minHeight: "36px" }}
                      >
                        {truncate(products[2]?.title)}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>
                        ${products[2]?.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col
                xs={6}
                md={3}
                className="d-flex justify-content-center"
                style={{
                  minHeight: "300px",
                  maxHeight: "300px",
                  paddingTop: "100px",
                }}
              >
                <Link to={`/sub-category/${tableTag}`}>
                  <Button variant="light">View All</Button>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel interval={null} variant="dark" indicators={null}>
          <Carousel.Item key={"3"}>
            <Row className="align-items-center">
              {products.slice(0, 4).map((product) => (
                <Col key={product.id} xs={6} md="auto">
                  <Link
                    to={`/shop/product/${product.id}`}
                    state={{ category: `${product.table}` }}
                  >
                    <Card
                      style={{
                        width: "220px",
                        minHeight: "300px",
                        maxHeight: "300px",
                        padding: "15px",
                        marginRight: "1%",
                      }}
                    >
                      <Card.Img
                        src={product.image}
                        style={{
                          objectFit: "contain",
                          minHeight: "200px",
                          maxHeight: "200px",
                        }}
                      />
                      <Card.Body
                        className="text-center"
                        style={{
                          minHeight: "100px",
                          maxHeight: "100px",
                          padding: "16px 0px 0px 0px",
                        }}
                      >
                        <Card.Title
                          style={{ fontSize: "15px", minHeight: "36px" }}
                        >
                          {truncate(product.title)}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "13px" }}>
                          ${product.price.toFixed(2)}
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
                <Col key={product.id} xs={6} md="auto">
                  <Link
                    to={`/shop/product/${product.id}`}
                    state={{ category: `${product.table}` }}
                  >
                    <Card
                      style={{
                        width: "220px",
                        minHeight: "300px",
                        maxHeight: "300px",
                        padding: "15px",
                        marginRight: "1%",
                      }}
                    >
                      <Card.Img
                        src={product.image}
                        style={{
                          objectFit: "contain",
                          minHeight: "200px",
                          maxHeight: "200px",
                        }}
                      />
                      <Card.Body
                        className="text-center"
                        style={{
                          minHeight: "100px",
                          maxHeight: "100px",
                          padding: "16px 0px 0px 0px",
                        }}
                      >
                        <Card.Title
                          style={{ fontSize: "15px", minHeight: "36px" }}
                        >
                          {truncate(product.title)}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "13px" }}>
                          ${product.price.toFixed(2)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
              <Col
                xs={6}
                md={3}
                className="d-flex justify-content-center"
                style={{
                  minHeight: "300px",
                  maxHeight: "300px",
                  paddingTop: "100px",
                }}
              >
                <Link to={`/sub-category/${tableTag}`}>
                  <Button variant="light">View All</Button>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default ShopSection;
