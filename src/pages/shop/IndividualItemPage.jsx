import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/ItemPage.css";
import * as images from '../../components/assets';
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

  const handleAddToCart = async () => {
    try {
      const currentRecord = await base("Products").find(recordId);
      const availableStock = currentRecord.fields.stocked;
      if (quantity >= availableStock) {
        alert(`Cannot add ${quantity} items to cart. Only ${availableStock} items available.`);
        return;
      }
      alert(`Added ${quantity} items to cart. Redirecting to shopping cart.`);
      setTimeout(() => {
        navigate('/shopping-cart');
      }, 5000);
    } catch (error) {
      alert("Failed to add item to cart. Please try again later.");
      console.error("Failed to add item to cart:", error);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const isMobile = () => {
    return window.innerWidth < 576;
  };

  if (!product) return <div>Loading...</div>;

  return (
    /*
    <div className="item-page">
      <div className="item-details">
        <img src={product.fields.image[0].url} alt={product.fields.title} style={{ maxWidth: '60%', maxHeight: '60%' }}/>
        <h2>{product.fields.title}</h2>
        <p>{product.fields.title}</p>
        <p>{`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.fields.price)}`}</p>
        <div className="quantity-selector" style={{ position: 'relative', width: '380px', height: '95px', backgroundImage: `url(${images.quantitybutton.png})` }}>
          <Button variant="light" onClick={decrementQuantity}>
            -
          </Button>
          <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold' }}>
            {quantity}
          </span>
          <Button variant="light" onClick={incrementQuantity}>
            +
          </Button>
          <Button variant="success" onClick={handleAddToCart}>
            <AddShoppingCartIcon />
          </Button>
        </div>
      </div>
      {isMobile()? (
        <div className="mobile-view">
          <h2>{product.fields.title}</h2>
          <p>{itemDetails.description}</p>
          <p>{`$${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.fields.price)}`}</p>
          <Button variant="success" onClick={handleAddToCart}>
            <AddShoppingCartIcon />
          </Button>
        </div>
      ) : (
        <div className="desktop-view">
          <img src={product.fields.image[0].url} alt={product.fields.title} style={{ maxWidth: '60%', maxHeight: '60%' }}/>
        </div>
      )}
    </div>
        */

    <div className="item-page">
      <div className="item-details">
        <Row>
          <Col xs={12} sm={6} md={6}>
            <img src={product.fields.image[0].url} alt={product.fields.title} style={{ maxWidth: '60%', maxHeight: '60%' }}/>
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
