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
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/KJyXyL7iSGUrxnQo4OUgsQ/GRw_XhjwqVUADAKE5zTP1TN8ca0vnJHiJXKuo6OS1UEcuSOetFTAhQUTxnhN0fqWUsPLuyK_Xe_dEwgnLEr1Hz8dzsfKQInnSx6zcJqM5g6iOvaR9TsacWi8bY3TxT7sbTpExMt1AvfMK7t3I8x3eQ/_1X4PW4zWqERLQnBWymgFVkZn6YPwBrOjBEty1UENw8",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "recwOkdA0wz8ZP2IW",
    },
    {
      id: 2,
      name: "Kerrygold Pure Irish Butter",
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/_gX_-zQKxEuQGxmZ8gdz6A/WA2FMbYgIhbjwQQQTm5AqB7GTZxSQZXilNv7_3NZQC04S3Xel2WMxn1qB265lM-ZGhpxp8xN9P5JZK5CDimyfjIWmtnTqSEDZ6wun1xsyYWZf1121hNE2DJ4ycMOOmuvx4JvySJ4The5_XludZRh7A/cEJxlbYgJ-9hXMgBslIHxgTfdPHLozPU2IWrHoW6_gw",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "recAlBsh6pftBMWUD",
    },
    {
      id: 3,
      name: "Organic Mozzarella Sticks",
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/1OYBVcih1qW68Lv7Dpt-OQ/Ndq8pxhWi7zi-1-PGAa3nFTVWuZO9AoTpwt_acnmYZAqodyRVcM3eSPG-JpZT36D-I-Evrnz8RKMRsM-VsgUhxz84UGSHMEZb48z4Rd9tYsYmpolzqNW8OyJJjA9uZkmcHmfiepeZ8p5apXuD4-FlA/1h_kt0ADfnMRfOF7eehuM_b6pwJhL_rfGZeXJiL-adI",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "reccDjPkbHZBBDzTU",
    },
    {
      id: 4,
      name: "Organic Nonfat Milk, 1 Quart",
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/cz1jRAChiKzrpqEm33TQiw/mJPayT43wwCwIW1ESiYfq0bW0k71KGZ3doU1S7JlS0ZT8xOn7bbymqjo5yns8pYH6J18RkK6A7pRbnFZ-SKDUcikP0tkTt1L6hz1ZPJd44-agATU_GsIKppLfQpfmQOZH9W8Vbv6FdJDOheEVDBoFA/hy5kB4KbnwZbA6dKPXDo8MLVgf8GboKM5U3i2WqzooA",
      quantity: 1,
      price: 5.59,
      pricePerQuantity: 5.59,
      rId: "recpvBgJ35kz3DfOa",
    },
    {
      id: 5,
      name: "Chicken & Apple Chicken Sausage",
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/0niphafBWr7O4IZOhTQWEw/NtXyETCxYruWlNJbTuQDJIpYbRNRCxR1j0xBLwPCvO7atkm4D4ZbWV4eIc5OsjH0_Y9jPJkhQ3OKbGhAkHfjy48_oGpt2QLa9eCtTKIEnvojnuJHRox509-LYREFUYbd3ZawDD0ZlrRZvkmP4Fs0KQ/IMiCeLkAVmN5WhpDaTQPlmAvrmULucRzf3nfd7NZjNI",
      quantity: 1,
      price: 9.29,
      pricePerQuantity: 9.29,
      rId: "recVeoABJ2kjHotjo",
    },
    {
      id: 6,
      name: "RAOS Chicken Parmesan",
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/5vcGdFJ4k0l9NLDWvTq7Qg/W1AFpHI_IfCB2wdsi76Zrph5jZrDa9uoKunaKb-xH5QLZzu7fP_AbB-nt0jgsruZ1xRIbFEOFgqCYsNA6KB2uApF3ogLttJLp1P3lkae7Z_QB8WsidTz2zDNrBfrqtsH7fNyLuRrF3Zhs4QYvcd1Ww/znlSbCXWCVxGSDc0mAMwIFde9tKHkBohecRURWeMDAs",
      quantity: 1,
      price: 6.99,
      pricePerQuantity: 6.99,
      rId: "rec5C8Pdv1COwPhtc",
    },
    {
      id: 7,
      name: "Applegate Chicken Nuggets",
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/MfuRI4nkhry_C2Y_lIIJcA/PtoVcvZ7IhFt5CH5A7z6a9Wrz4j5ldlVDNlzONbsXPJ60FWQwu22VvTPEOIPLapSBIUzWelwSH07xohlekd5r9ufVzeqCPNfxV2crpDuGszXVQKNMA02jWmWQVaFsCuquhmeLucoM88-a0dioY-edg/nlgmr8DUCzkW_GTvsL6LJRIvyO0iXi882VmfDsyI4OA",
      quantity: 1,
      price: 12.99,
      pricePerQuantity: 12.99,
      rId: "rec4OGfTPZQYicy77",
    },
    {
      id: 8,
      name: "Frozen Salmon Fillets (2), 6oz/each",
      image: "https://v5.airtableusercontent.com/v3/u/26/26/1710064800000/p6aAhprUArb8E-f6eX1iOQ/sgygAOUKKnPu6Yc5efK79kbuHWEFfDAjts8dqH3yzrnKqLAW3BecMC-QgSK58UAgqLjRXXKcEjV1X7RnhPmRYY_v5-2qshU3N465yGqjA-m_NR4hNcbz4RpxGf-EeIWqU9ovbGl5ZYUIrGKBtF2fVw/vGaK0T9FBs2wPjjSYtizPCht_jspSIPCxTQrPJN0OTQ",
      quantity: 1,
      price: 13.99,
      pricePerQuantity: 13.99,
      rId: "recPzZ6zoACMNM40C",
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
            <h2>Shopping Cart</h2>
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
