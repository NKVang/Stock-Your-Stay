import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBase } from "../../assets/hooks/useBase";
import { Dropdown, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pascalCase, truncate } from "../../components/Functions";

const SubCategory = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  let adjustedCategoryName = decodedCategoryName;
  const base = useBase();
  const [products, setProducts] = useState([]);
  const [sortField, setSort] = useState("Purchase Count");
  const [sortDirection, setDirection] = useState("desc");
  const [sortText, setSortText] = useState("Best Selling");
  const [loading, setLoading] = useState(true);

  if (adjustedCategoryName === "local favorites") {
    adjustedCategoryName = "";
  }

  useEffect(() => {
    setLoading(true);
    const filterFormula = adjustedCategoryName ? `FIND('${adjustedCategoryName}', {Tags})` : '';
    base("Products")
      .select({
        view: "Grid view",
        filterByFormula: filterFormula,
        ...(sortField && {
          sort: [{ field: sortField, direction: sortDirection }],
        }),
      })
      .eachPage(
        function page(records, fetchNextPage) {
          let pulledProducts = [];
          records.forEach((record) => {
            const tempRecord = record._rawJson.fields;
            const newProduct = {
              title: tempRecord.title,
              price: tempRecord.price,
              image: tempRecord.image[0].url,
              date: new Date(record.Created_Time),
              id: record.id,
            };
            pulledProducts.push(newProduct);
          });
          setProducts(pulledProducts);
          setLoading(false);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, [adjustedCategoryName, sortField, sortDirection]);

  const handleSortChange = (selectedSort, selectedDirection, selectedText) => {
    setSort(selectedSort);
    setDirection(selectedDirection);
    setSortText(selectedText);
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>
              <strong>{decodedCategoryName}</strong>
            </h2>

            <Dropdown style={{ display: "flex", justifyContent: "flex-end" }}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ display: "flex", justifyContent: "flex-end" }}>
                {sortText}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSortChange("Purchase Count", "desc", "Best Selling")}>Best Selling</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("price", "asc", "Price Asc")}>Price Asc</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("price", "desc", "Price Desc")}>Price Desc</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("title", "asc", "A to Z")}>A to Z</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("title", "desc", "Z to A")}>Z to A</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("created time", "asc", "New to Old")}>New to Old</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("created time", "desc", "Old to New")}>Old to New</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {loading ? (
              <p></p> 
            ) : (
              <Row>
                {products.map((product) => (
                  <Col key={product.id} xs={6} md={3} lg={2}>
                    <Link
                      to={`/shop/product/${product.id}`}
                      state={{ category: `${categoryName}` }}
                    >
                      <Card className="product-card">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{ maxWidth: "60%", maxHeight: "60%", margin: "auto" }}
                        />
                        <Card.Body>
                          <Card.Title
                            className="product-title"
                            style={{ textAlign: "center", fontSize: "15px" }}
                          >
                            {truncate(pascalCase(product.title))}
                          </Card.Title>
                          <Card.Text
                            className="product-price"
                            style={{ textAlign: "center", fontSize: "13px" }}
                          >
                            ${product.price.toFixed(2)}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
