import React from "react";
import "./shop_style.css";
import { Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Success() {
  const history = useNavigate();

  const goToHome = () => {
    history("/");
  };

  return (
    <Row className="success-parent-div">
      <Row className="text-center success-main-div">
        <i class="bi bi-check-circle"></i>
        <h1 id="no-uppercase">Thank you for your order!</h1>
        <p>Your order is confirmed.</p>
        <p>A receipt will be sent to the email provided at checkout.</p>
        <Button
          variant="success"
          style={{ maxWidth: "180px", maxHeight: "50px" }}
          onClick={goToHome}
        >
          Return to Home
        </Button>
      </Row>
    </Row>
  );
}

export default Success;
