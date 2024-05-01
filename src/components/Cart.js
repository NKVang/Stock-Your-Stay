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
  Form,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop_style.css";
import { useBase } from "../assets/hooks/useBase";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { truncate } from "./Functions";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const base = useBase();
  const [error, setError] = useState("");
  // grab current url to pass to server, for routing on mobile
  const server_url = window.location.href.replace("/shopping-cart", "");

  // tally up total cart quantity
  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // remove item from shopping cart, X button
  // also used when quantity is decremented to or set to 0
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

    // update local copy as well to keep it consistent
    const updatedLocalCart = JSON.parse(
      localStorage.getItem("cartItems")
    ).filter((item) => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedLocalCart));
  };

  // function to increment quantity, + button
  const incrementQuantity = (id, q) => {
    // before updating cart, check if on hand stock qty is enough
    // find product in airtable
    base("Products").find(id, function (err, record) {
      // error
      if (err) {
        console.log(err);
        return;
      }

      // if no error, compare quantity with stocked quantity
      if (q !== record.fields.stocked && q < record.fields.stocked) {
        // build updated cart with new quantity
        const updatedCart = cartItems.map((item) => {
          if (item.id === id) {
            // increment quantity by 1
            const updatedQuantity = item.quantity + 1;
            // adjust new price per quantity also
            const updatedPrice = (item.price * updatedQuantity).toFixed(2);

            return {
              ...item,
              quantity: updatedQuantity,
              pricePerQuantity: parseFloat(updatedPrice),
            };
          }
          return item;
        });

        // update cart to new cart
        setCartItems(updatedCart);

        // same as above except this is for the locally stored cart
        const updatedLocalCart = JSON.parse(
          localStorage.getItem("cartItems")
        ).map((item) => {
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

        // update locally stored cart with new cart
        localStorage.setItem("cartItems", JSON.stringify(updatedLocalCart));
      }
      // if quantity is greater than stocked quantity, show toast
      else setError("Insufficient stock.");
    });
  };

  // function to decrement quantity, - button
  const decrementQuantity = (id, q) => {
    // if quantity is 1, remove item from cart
    if (q === 1) {
      const updatedCart = cartItems.filter((item) => item.id !== id);

      // update cart
      setCartItems(updatedCart);

      // remove item from locally stored cart also
      const updatedLocalCart = JSON.parse(
        localStorage.getItem("cartItems")
      ).filter((item) => item.id !== id);

      // update locally stored cart
      localStorage.setItem("cartItems", JSON.stringify(updatedLocalCart));
    }

    // if quantity is other value than 1, decrement normally and update cart
    else {
      // build new cart
      const updatedCart = cartItems.map((item) => {
        // decrement quantity by 1
        const updatedQuantity = item.quantity - 1;
        // adjust new price per quantity also
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

      // update cart to new cart
      setCartItems(updatedCart);

      // same as above except this is for the locally stored cart
      const updatedLocalCart = JSON.parse(
        localStorage.getItem("cartItems")
      ).map((item) => {
        if (item.id === id) {
          const updatedQuantity = item.quantity - 1;
          const updatedPrice = (item.price * updatedQuantity).toFixed(2);

          return {
            ...item,
            quantity: updatedQuantity,
            pricePerQuantity: parseFloat(updatedPrice),
          };
        }
        return item;
      });

      // update locally stored cart with new cart
      localStorage.setItem("cartItems", JSON.stringify(updatedLocalCart));
    }
  };

  // function to change quantity manually, going into input box and typing a quantity
  const handleManualQuantity = (id, q) => (event) => {
    // get the value inside input
    const newQuantity = event.target.value;

    // check the new quantity against the airtable records
    base("Products").find(id, function (err, record) {
      if (err) {
        console.log(err);
        return;
      }

      // if item found in airtable, compare quantity with stocked quantity
      if (newQuantity > 0 && newQuantity <= record.fields.stocked) {
        // build updated cart
        const updatedCart = cartItems.map((item) => {
          // item found
          if (item.id === id) {
            // set updated quantity to new quantity if it is a number,
            // otherwise set it to original quantity (the value that was passed)
            const updatedQuantity = !isNaN(newQuantity)
              ? parseInt(newQuantity)
              : q;

            // update price per quantity
            const updatedPrice = (item.price * updatedQuantity).toFixed(2);

            return {
              ...item,
              quantity: updatedQuantity,
              pricePerQuantity: parseFloat(updatedPrice),
            };
          }
          return item;
        });

        // update cart to new cart
        setCartItems(updatedCart);

        // same as above except this is for the locally stored cart
        const updatedLocalCart = JSON.parse(
          localStorage.getItem("cartItems")
        ).map((item) => {
          if (item.id === id) {
            const updatedQuantity = !isNaN(newQuantity)
              ? parseInt(newQuantity)
              : q;
            const updatedPrice = (item.price * updatedQuantity).toFixed(2);

            return {
              ...item,
              quantity: updatedQuantity,
              pricePerQuantity: parseFloat(updatedPrice),
            };
          }
          return item;
        });

        // update locally stored cart with new cart
        localStorage.setItem("cartItems", JSON.stringify(updatedLocalCart));
      }
      // if new quantity is a number and greater than the stocked quantity, show toast
      // don't update cart
      else if (newQuantity > 0 && newQuantity > record.fields.stocked)
        setError("Insufficient stock.");
      // if new quantity is a string, show toast for invalid quantity
      // this is to handle letters in the quantity box
      else if (newQuantity !== "") setError("Invalid quantity.");
    });

    // if new quantity is 0 or an empty string (clearing the quantity with backspace)
    // remove the item from the cart
    if (newQuantity === 0 || newQuantity === "") {
      removeItem(id);
    }
  };

  // checkout function
  const goToCheckout = () => {
    fetch("/create-checkout-session", {
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

  // keep track of cartItems, if a local copy exists, set cartItems to it
  useEffect(() => {
    const locallyStoredCartItems = JSON.parse(
      localStorage.getItem("cartItems")
    );

    // if local storage of cart exists, set cart to it
    if (locallyStoredCartItems) setCartItems(locallyStoredCartItems);
  }, []);

  // keep track of cart total price and to send cart quantity to header component
  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.pricePerQuantity;
    }, 0);
    setTotalPrice(totalPrice.toFixed(2));

    // send to header component for rendering
    props.sendCartQuantity(cartQuantity);

    // keep local copy of cart quantity as well
    localStorage.setItem("cartQuantity", cartQuantity);
  }, [cartItems, cartQuantity, props]);

  // function to show toast when error occurs, i.e. invalid quantity provided or insufficient stock
  function showToast() {
    return (
      // if error is called, show toast
      error && (
        <ToastContainer position="middle-center">
          <Toast onClose={() => setError(false)} autohide={true} delay={5000}>
            <Toast.Header
              style={{
                backgroundColor: "var(--mhDarkGreen)",
                color: "#ffffff",
              }}
              closeVariant="white"
            >
              <ErrorOutlineIcon style={{ marginRight: "10px" }} />
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body style={{ backgroundColor: "#ffffff" }}>
              {error === "Insufficient stock."
                ? "Unable to adjust item quantity."
                : "Invalid quantity."}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )
    );
  }

  return (
    <>
      {showToast()}
      {cartItems.length === 0 ? (
        <Container className="shopping-cart-message">
          <h2 style={{ marginBottom: "0px" }}>Shopping Cart</h2>
          <span style={{ fontSize: "14px", marginTop: "40px" }}>
            Your cart is currently empty.
          </span>
          <Link to="/shop">
            <Button
              variant="success"
              style={{ marginTop: "40px", marginRight: "0px" }}
            >
              Continue Browsing
            </Button>
          </Link>
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
                      <Link
                        to={`/shop/product/${item.id}`}
                        state={{ category: item.category }}
                      >
                        <Image
                          className="shopping-cart-image"
                          src={item.image}
                        />
                      </Link>
                    </Col>
                    <Col className="item-info">
                      <Row>
                        <span style={{ paddingLeft: 0 }}>
                          <strong>{truncate(item.name)}</strong>
                        </span>
                      </Row>
                      <Row>
                        <i style={{ paddingLeft: 0 }}>
                          ${item.pricePerQuantity.toFixed(2)}
                        </i>
                      </Row>
                      <Form>
                        <InputGroup>
                          <Button
                            className="quantity-button"
                            variant="light"
                            onClick={() =>
                              decrementQuantity(item.id, item.quantity)
                            }
                          >
                            -
                          </Button>
                          <Form.Control
                            value={item.quantity}
                            style={{
                              border: "1px solid #f3f3f3",
                              maxWidth: "50px",
                              textAlign: "center",
                              fontSize: "0.9rem",
                            }}
                            onChange={handleManualQuantity(
                              item.id,
                              item.quantity
                            )}
                          />
                          <Button
                            className="quantity-button"
                            variant="light"
                            onClick={() =>
                              incrementQuantity(item.id, item.quantity)
                            }
                          >
                            +
                          </Button>
                        </InputGroup>
                      </Form>
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
                        <Link to="/shop">
                          <Button variant="dark">Continue Shopping</Button>
                        </Link>
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
