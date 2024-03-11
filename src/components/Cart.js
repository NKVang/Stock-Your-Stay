import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Stack,
  CloseButton,
  Image,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop_style.css";
// import * as images from "./assets";

// images hard coded so once passed to Stripe, it can display images at checkout
// additionally cannot use urls passed from AirTable for long term testing as
// those have an expiration attached
const Cart = (props) => {
  const [cartItems, updatedItems] = useState([
    {
      id: 1,
      name: "Siggi's Mixed Berry Non Fat Yogurt 4 Pack",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/81IxzTEA_2L._SL1500_1024x1024.jpg",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "recwOkdA0wz8ZP2IW",
    },
    {
      id: 2,
      name: "Kerrygold Pure Irish Butter",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/ScreenShot2021-09-01at3.10.03PM_1024x1024.png",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "recAlBsh6pftBMWUD",
    },
    {
      id: 3,
      name: "Organic Mozzarella Sticks",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/ScreenShot2021-10-06at3.01.45PM_1024x1024.png",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "reccDjPkbHZBBDzTU",
    },
    {
      id: 4,
      name: "Organic Nonfat Milk, 1 Quart",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/ScreenShot2021-09-01at5.10.16PM_600x600.png",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "recpvBgJ35kz3DfOa",
    },
    {
      id: 5,
      name: "Chicken & Apple Chicken Sausage",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/ScreenShot2021-11-11at10.56.26AM_1024x1024.png",
        quantity: 1,
      price: 9.29,
      pricePerQuantity: 9.29,
      rId: "recVeoABJ2kjHotjo",
    },
    {
      id: 6,
      name: "RAOS Chicken Parmesan",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/81OjUj755IL._SL1500_1200x1200.jpg",
      quantity: 1,
      price: 6.99,
      pricePerQuantity: 6.99,
      rId: "rec5C8Pdv1COwPhtc",
    },
    {
      id: 7,
      name: "Applegate Chicken Nuggets",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/ScreenShot2021-10-06at3.00.57PM_1024x1024.png",
      quantity: 1,
      price: 12.99,
      pricePerQuantity: 12.99,
      rId: "rec4OGfTPZQYicy77",
    },
    {
      id: 8,
      name: "Frozen Salmon Fillets (2), 6oz/each",
      image:
        "https://stockyourstay.minthouse.com/cdn/shop/products/81gK3bRQuhL._SL1500_1024x1024.jpg",
      quantity: 1,
      price: 13.99,
      pricePerQuantity: 13.99,
      rId: "recPzZ6zoACMNM40C",
    },
  ]);
  const navigate = useNavigate();

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

  const checkOut = () => {
    props.getHistoryItems(cartItems);
    updatedItems([]);
    props.sendCartQuantity(0);
    navigate("/payment");
  };

  // grab current url to pass to server, for routing on mobile
  const server_url = window.location.href.replace("/shopping-cart", "");

  // checkout function
  const goToCheckout = () => {
    fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems,
        SERVER_URL: server_url,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  const history = useNavigate();

  const goToShop = () => {
    history("/shop");
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <Container className="shopping-cart-message">
          <h2 style={{ marginBottom: "0px" }}>Shopping Cart</h2>
          <span style={{ fontSize: "14px", marginTop: "40px" }}>
            Your cart is currently empty.
          </span>
          <Button
            variant="success"
            style={{ marginTop: "40px", marginRight: "0px" }}
            onClick={goToShop}
          >
            Continue Browsing
          </Button>
        </Container>
      ) : (
        <Row>
          <Col xs={12} md={6} className="shop-container">
            <Container fluid className="shopping-cart-list-container">
              <h2>Shopping Cart</h2>

              <Stack gap={3}>
                {cartItems.map((item) => (
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
                ))}
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
                    <Row style={{ marginTop: 10 }}>
                      <Col xs="auto">
                        <Button variant="dark" onClick={goToShop}>
                          Continue Shopping
                        </Button>
                        <Button variant="success" onClick={goToCheckout}>
                          Check Out
                        </Button>
                      </Col>
                    </Row>
                  </Row>
                </div>
              </Container>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Cart;
