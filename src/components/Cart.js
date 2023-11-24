import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Stack,
  CloseButton,
  Image,
  Button,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop_style.css";
import * as images from "./assets";

const Cart = (props) => {
  const [cartItems, updatedItems] = useState([
    {
      id: 1,
      name: "Siggi's Mixed Berry Non Fat Yogurt 4 Pack",
      image: images.img1,
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
    },
    {
      id: 2,
      name: "Kerrygold Pure Irish Butter",
      image: images.img2,
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
    },
    {
      id: 3,
      name: "Organic Mozzarella Sticks",
      image: images.img3,
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
    },
    {
      id: 4,
      name: "Organic Nonfat Milk, 1 Quart",
      image: images.img4,
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
    },
    {
      id: 5,
      name: "Chicken & Apple Chicken Sausage",
      image: images.img5,
      quantity: 1,
      price: 9.29,
      pricePerQuantity: 9.29,
    },
    {
      id: 6,
      name: "RAOS Chicken Parmesan",
      image: images.img6,
      quantity: 1,
      price: 6.99,
      pricePerQuantity: 6.99,
    },
    {
      id: 7,
      name: "Applegate Chicken Nuggets",
      image: images.img7,
      quantity: 1,
      price: 12.99,
      pricePerQuantity: 12.99,
    },
    {
      id: 8,
      name: "Frozen Salmon Fillets (2), 6oz/each",
      image: images.img8,
      quantity: 1,
      price: 13.99,
      pricePerQuantity: 13.99,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.pricePerQuantity;
    }, 0);
    setTotalPrice(totalPrice.toFixed(2));

    props.sendCartQuantity(cartQuantity);
  }, [cartItems, cartQuantity, props]);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updatedItems(updatedCart);
  };

  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity + 1;
        const updatedPrice = (item.price * updatedQuantity).toFixed(2);

        return {
          ...item,
          quantity: updatedQuantity,
          pricePerQuantity: parseFloat(updatedPrice),
        };
      }
      return item;
    });
    updatedItems(updatedCart);
  };

  const decrementQuantity = (id, q) => {
    if (q === 1) {
      const updatedCart = cartItems.filter((item) => item.id !== id);

      updatedItems(updatedCart);
    } else {
      const updatedCart = cartItems.map((item) => {
        const updatedQuantity = item.quantity - 1;
        const updatedPrice = (item.price * updatedQuantity).toFixed(2);

        if (item.id === id) {
          return {
            ...item,
            quantity: updatedQuantity,
            pricePerQuantity: parseFloat(updatedPrice),
          };
        }
        return item;
      });

      updatedItems(updatedCart);
    }
  };

  return (
    <>
      <Row>
        <Col xs={12} md={6} className="shop-container">
          <Container fluid className="shopping-cart-list-container">
            <h3>
              <strong>Shopping Cart</strong>
            </h3>
            <Stack gap={2}>
              {cartItems.length === 0 ? (
                <div className="shopping-cart-message">
                  <i>Your cart is currently empty</i>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item d-flex justify-content-between"
                  >
                    <Col xs="auto">
                      <Image className="shopping-cart-image" src={item.image} />
                    </Col>
                    <Col className="item-info">
                      <Row>
                        <h6 style={{ paddingLeft: 0 }}>
                          <strong>{item.name}</strong>
                        </h6>
                      </Row>
                      <Row>
                        <i style={{ paddingLeft: 0 }}>
                          $ {item.pricePerQuantity}
                        </i>
                      </Row>
                      <Row>
                        <Button
                          className="quantity-button"
                          variant="light"
                          onClick={() =>
                            decrementQuantity(item.id, item.quantity)
                          }
                        >
                          -
                        </Button>
                        <div className="quantity-amount">{item.quantity}</div>
                        <Button
                          className="quantity-button"
                          variant="light"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </Button>
                      </Row>
                    </Col>
                    <CloseButton
                      style={{ marginRight: 20 }}
                      className="ms-auto"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                ))
              )}
            </Stack>
          </Container>
        </Col>

        {/* Right column */}
        <Col xs={12} md={6} className="shop-container">
          <Row className="cart-total">
            <Container fluid className="right-cart-container">
              <div className="cart-total-main-container">
                <Row>
                  <Col>
                    <Row>Delivery Date: 12-31-23</Row>
                    <Row>Location: Austin, TX</Row>
                    <Row style={{ marginTop: 50 }}>
                      Subtotal (
                      {cartQuantity > 1 || cartQuantity === 0
                        ? cartQuantity + " items"
                        : cartQuantity + " item"}
                      ):
                      <b style={{ paddingLeft: 0 }}>${totalPrice}</b>
                    </Row>
                    <Row>
                      <i className="small-text" style={{ paddingLeft: 0 }}>
                        Taxes and shipping calculated at checkout
                      </i>
                    </Row>
                  </Col>
                  <Row>
                    <h6 style={{ paddingLeft: 0, marginTop: 30 }}>
                      <i>Special Instructions For Seller:</i>
                    </h6>
                    <Form>
                      <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={5} />
                      </Form.Group>
                    </Form>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col xs="auto">
                      <Button variant="dark">Continue Shopping</Button>
                      <Button variant="success">Check Out</Button>
                      <br />
                      **
                      <strong>
                        Note: Only orders placed within 48 hours of check-in
                        will be fufilled. **
                      </strong>
                    </Col>
                  </Row>
                </Row>
              </div>
            </Container>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
