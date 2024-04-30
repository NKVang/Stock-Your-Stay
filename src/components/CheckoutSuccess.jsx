import React, { useEffect, useState } from "react";
import "./shop_style.css";
import { Container, Row, Col } from "react-bootstrap";
import * as images from "./assets";
import { truncate } from "./Functions";

function CheckoutSuccess() {
  const [orderDetails, setOrderDetails] = useState(null);

  // fetch order details from server
  useEffect(() => {
    try {
      fetch("/order")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Server error");
          }
          return response.json();
        })
        .then((data) => {
          setOrderDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

    // clear local storage after successful order
    localStorage.clear(localStorage.getItem("cartItems"));
    localStorage.clear(localStorage.getItem("cartQuantity"));
  }, []);

  // switch function to display card brand
  function displayCardBrand(cardBrand) {
    switch (cardBrand) {
      case "visa":
      case "visa_debit":
        return images.visa;
      case "mastercard":
      case "mastercard_debit":
      case "mastercard_prepaid":
        return images.mastercard;
      case "amex":
        return images.amex;
      case "discover":
        return images.discover;
      case "diners":
        return images.diners;
      case "jcb":
        return images.jcb;
      default:
        return;
    }
  }

  // display receipt/invoice type form after successful checkout
  return (
    <Container className="success-parent-div">
      <h3 id="no-uppercase">Thank you for your order!</h3>
      <Row className="success-main-div">
        {/* shows order summary, order num, date, and special instructions */}
        <h6>
          Order Summary
          <hr />
        </h6>
        <Col className="order-details-col">
          <p className="order-details-title">Order</p>
          <p className="order-details-title">Paid on</p>
          <p className="order-details-title">Special Instructions</p>
        </Col>
        <Col xs lg={9}>
          <p>#{orderDetails?.id}</p>
          <p>{orderDetails?.date}</p>
          <p>{orderDetails?.specialInstructions}</p>
        </Col>

        {/* empty margin */}
        <div style={{ marginBottom: "50px" }}></div>

        {/* items row, shows all items purchased w/ name, qty, & price */}
        <h6>
          Items
          <hr />
        </h6>
        <ul style={{ listStyleType: "none" }}>
          {orderDetails?.items?.map((item, index) => (
            <li key={index} className="order-details-list">
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      maxWidth: "50px",
                      maxHeight: "auto",
                      marginRight: "10px",
                    }}
                  />
                  <b>
                    {window.innerWidth < 576 ? truncate(item.name) : item.name}
                  </b>
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  paddingLeft: "5px",
                }}
              >
                Qty {item.quantity}
              </span>
            </li>
          ))}
        </ul>
        <h6>
          <hr />
        </h6>

        {/* total paid row */}
        <p className="order-details-item">
          <b>Total Paid</b>
          <span>${orderDetails?.total}</span>
        </p>

        {/* card brand and last 4 row */}
        <p className="order-details-item" style={{ marginTop: "30px" }}>
          <span>
            <b>Paid With</b>
          </span>
          <span>
            <img
              src={displayCardBrand(orderDetails?.cardBrand)}
              style={{
                width: "40px",
                marginRight: "5px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
                borderRadius: "2px",
              }}
              alt={orderDetails?.cardBrand}
            />
            **** {orderDetails?.cardLast4}
          </span>
        </p>

        {/* empty margin */}
        <div style={{ marginBottom: "50px" }}></div>
      </Row>
    </Container>
  );
}

export default CheckoutSuccess;
