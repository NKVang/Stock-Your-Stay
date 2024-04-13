import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useBase } from "../assets/hooks/useBase";
import "./shop_style.css";
import { Link } from "react-router-dom";

const SubCategorySection = ({ mainTag, subTag }) => {
  var base = useBase();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let tempMaintag = mainTag;
    let sortPattern = null;
    if (tempMaintag === 'local favorites') {
      tempMaintag = ''
      sortPattern = 'Purchase Count';
    }
    if (products.length === 0)
      base("Products")
        .select({
          view: "Grid view",
          filterByFormula: `AND(FIND('${tempMaintag}', {Tags}), FIND('${subTag}', {Tags}))`,
          ...(sortPattern && { sort: [{ field: sortPattern, direction: 'desc' }] }),
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              const tempRecord = record._rawJson.fields;
              const newProduct = {
                title: tempRecord.title,
                price: tempRecord.price,
                image: tempRecord.image[0].url,
                id: record.id
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
      <Row>
        <h2>{subTag}</h2>
        {products.map((product) => (
          <Col key={product.id} xs={6} md={3} lg={2}>
            <Link to={`/shop/product/${product.id}`}>
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} alt={product.title} style={{ maxWidth: '40%', maxHeight: '40%', margin: "auto" }}/>
                <Card.Body>
                  <Card.Title className="product-title" style={{ textAlign: "center" }}>{product.title}</Card.Title>
                  <Card.Text className="product-price" style={{ textAlign: "center" }}>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
};

export default SubCategorySection;
