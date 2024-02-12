import React from "react";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";

const OrderHistory = ({ historyItems }) => {
  return (
    <Row>
      <Col xs={12} md={8} className="shop-container mx-auto">
        <Container fluid className="shopping-cart-list-container">
          <h3>
            <strong>Order History</strong>
          </h3>
          <Stack gap={2}>
            {historyItems.length === 0 ? (
              <div className="shopping-cart-message">
                <i>Your order history empty</i>
              </div>
            ) : (
              historyItems.map((item) => (
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
                  </Col>
                  <Button variant="success">View</Button>
                </div>
              ))
            )}
          </Stack>
        </Container>
      </Col>
    </Row>
  );
};

export default OrderHistory;
