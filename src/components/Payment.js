import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Payment = ({ purchasedItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalPrice = purchasedItems.reduce((total, item) => {
      return total + item.pricePerQuantity;
    }, 0);
    setTotalPrice(totalPrice.toFixed(2));
  }, [purchasedItems]);

  const onPay = (e) => {
    e.preventDefault();
  };

  const redirectOrderHistory = () => {
    navigate("/order-histories");
  };

  return (
    <Row>
      <Col xs={12} md={6} className="shop-container">
        <Container fluid className="shopping-cart-list-container">
          <h3>
            <strong>Selected Products</strong>
          </h3>
          <Stack gap={2}>
            {purchasedItems.map((item) => (
              <div
                key={item.id}
                className="purchased-item d-flex justify-content-between"
              >
                <Col xs="auto">
                  <Image className="purchased-cart-image" src={item.image} />
                </Col>
                <Col className="item-info">
                  <Row>
                    <h6 style={{ paddingLeft: 0 }}>
                      <strong>{item.name}</strong>
                    </h6>
                  </Row>
                  <Row>
                    <i style={{ paddingLeft: 0 }}>$ {item.pricePerQuantity}</i>
                  </Row>
                </Col>
              </div>
            ))}
          </Stack>
        </Container>
      </Col>

      {/* Right column */}
      <Col xs={12} md={6} className="shop-container">
        <Form className="payment-form" onSubmit={onPay}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Shipping address</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            <Form.Select aria-label="Default select example" className="my-1">
              <option>United States</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control type="text" placeholder="Address" />
            <Form.Text className="text-muted">
              Enter address manually.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Payment Information</Form.Label>
            <Form.Control
              type="number"
              placeholder="1234 1234 1234 1234"
              className="mb-1"
            />
            <InputGroup>
              <Form.Control aria-label="expiration" placeholder="MM / YY" />
              <Form.Control aria-label="cvc" placeholder="CVC" />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Billing address is same as shipping"
            />
          </Form.Group>
          <h5 className="text-center font-bold" style={{ fontWeight: "bold" }}>
            Total: ${totalPrice}
          </h5>
          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%" }}
            onClick={redirectOrderHistory}
          >
            Pay
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Payment;
