import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const OrderDetails = ({ historyItems }) => {
  const { orderId } = useParams();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const result = historyItems.find((currentValue) => {
    return currentValue.id === parseInt(orderId);
  });

  return (
    <Row>
      <Col xs={12} md={8} className="shop-container mx-auto">
        <Container fluid className="shopping-cart-list-container">
          <div className="d-flex flex-column align-items-center justify-content-center mb-3">
            <h3 className="mb-0">
              <strong>Order Information #{result.id}</strong>
            </h3>
            <small className="bg-success text-white p-1">Completed</small>
          </div>
          <div className="d-flex align-items-start justify-content-between gap-5 mb-3 bg-white p-4 products-comment-order-details">
            <div className="" style={{ width: "50%" }}>
              <h5 className="fw-bold mb-3">Shipping Address</h5>
              {isAuthenticated ? (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0">{user.nickname}</li>
                  <li className="list-group-item px-0">{user.email}</li>
                  <li className="list-group-item px-0">
                    Mamurshahi, Shahbondegi Union, Sherpur, Bogura
                  </li>
                  <li className="list-group-item px-0">Bogura</li>{" "}
                  <li className="list-group-item px-0">Bangladesh</li>
                  <li className="list-group-item px-0">Mobile: 01580530145</li>
                </ul>
              ) : (
                <div>
                  <h6 className="fw-bold text-warning fst-italic">
                    Shipping Address Unavailable
                  </h6>
                </div>
              )}
            </div>
            <div className="" style={{ width: "50%" }}>
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <ul className="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Sub-Total
                  <span>${result.pricePerQuantity}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Home Deliver
                  <span>$0</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Total
                  <span>${result.pricePerQuantity}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Paid
                  <span className="text-success">
                    ${result.pricePerQuantity}
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Due
                  <span className="text-danger">$0.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3 products-comment-order-details">
            <h5 className="fw-bold">Products</h5>
            <table class="table">
              <thead class="">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Image
                      src={result.image}
                      style={{ width: "100px", height: "70px" }}
                    />
                  </td>
                  <td>{result.name}</td>
                  <td>{result.quantity}</td>
                  <td>${result.pricePerQuantity}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 products-comment-order-details">
            <h5 className="fw-bold mb-3">Order Comments</h5>
            <p className="mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="mb-2">
              Aspernatur adipisci optio neque, saepe nulla aliquid? Ipsa minima
              veniam voluptas odio obcaecati, asperiores in, mollitia
              accusantium qui dolorem ut dolore quasi, ullam saepe?
            </p>
            <p>
              Dolor quidem similique, corporis adipisci quam cum, omnis
              doloribus excepturi harum nesciunt repellendus doloremque iusto
              cumque, porro quibusdam.
            </p>
          </div>
          <Link to="/order-histories" className="btn btn-primary mt-5 mb-3">
            Continue
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default OrderDetails;
