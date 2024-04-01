import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/ItemPage.css";
import { useBase } from "../../assets/hooks/useBase";

const ItemPage = () => {
  var base = useBase();

  const { recordId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    base("Products").find(recordId, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      setProduct(record);
    });
  }, [recordId, base]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
    // Implement feedback for user here, e.g., a toast message or modal popup
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="item-page">
      <div className="item-details">
        <Row>
          <Col xs={12} sm={6} md={6}>
            <img src={product.fields.image[0].url} alt={product.title} style={{ maxWidth: '60%', maxHeight: '60%' }}/>
            <h3>{product.fields.title}</h3>
            <p>
              {product.fields.title} is a product. Filler description to fill up
              text as the airtable field is missing.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <p>{`${new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.fields.price)}`}</p>
            <div
              className="quantity-selector"
              style={{
                position: "relative",
                width: "380px",
                height: "95px",
                backgroundImage: `url('GitHub/Stock-Your-Stay/src/components/assets/quantitybutton.png')`,
              }}
            >
              {/* Invisible button for decrement (-) */}
              <button
                onClick={decrementQuantity}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "50%",
                  height: "100%",
                  background: "transparent",
                  border: "none",
                }}
              />
              {/* Display quantity in the center */}
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "bold",
                }}
              >
                {quantity}
              </span>
              {/* Invisible button for increment (+) */}
              <button
                onClick={incrementQuantity}
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "50%",
                  height: "100%",
                  background: "transparent",
                  border: "none",
                }}
              />
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to Cart
            </button>
            <button onClick={() => navigate("/")}>Return to Home</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ItemPage;
