import React from "react";
// import MHlogo from "./assets/MHlogo.webp";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./shop_style.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import { EmployeeLoginNav } from "./EmployeeLogin";

const Header = (props) => {
  const location = useLocation();

  // function to check if currnet path is /checkout-success
  const notCheckoutSuccess = () => {
    return location.pathname !== "/checkout-success";
  };

  // cart quantity, show only if not in path /checkout-success
  const cartQuantity = notCheckoutSuccess()
    ? props.getCartQuantity || JSON.parse(localStorage.getItem("cartQuantity"))
    : null;
  return (
    <Container fluid className="site-header">
      <Row className="center-align">
        <Col xs={10}>
          <svg
            width="262"
            height="25"
            viewBox="0 0 262 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M219.894 1.043c-3.672.525-5.604 1.26-7.153 2.73-1.236 1.172-1.705 2.292-1.723 3.99 0 1.12.07 1.434.47 2.134.627 1.05 1.514 1.767 2.837 2.31 1.497.595 3.08.892 7.57 1.4 4.821.56 6.127.84 7.327 1.557 1.288.77 1.723 1.47 1.723 2.782 0 3.115-2.906 4.69-8.701 4.742-4.804.035-7.641-1.102-8.894-3.587-.209-.42-.4-.787-.435-.822-.035-.035-.609.07-1.288.244-1.409.35-1.444.438-.748 1.855 1.044 2.1 3.202 3.517 6.422 4.217 2.036.455 6.718.525 9.032.158 4.108-.648 6.562-2.31 7.293-4.935.783-2.782-.157-5.25-2.402-6.404-2.071-1.05-2.941-1.242-9.189-1.977-6.823-.788-8.145-1.418-8.145-3.815 0-1.907 1.114-2.992 3.898-3.797 2.907-.84 5.9-.752 8.859.21 1.566.525 2.854 1.557 3.463 2.747.191.385.366.735.4.77.105.123 2.524-.56 2.524-.7 0-.49-1.218-2.362-1.984-3.062-1.131-1.032-3.289-2.065-5.03-2.415-1.357-.262-5.134-.472-6.126-.332zm-59.255.577c-2.802.613-4.926 1.698-6.579 3.36-1.932 1.96-2.941 4.252-3.115 7.07-.366 5.914 3.324 10.673 9.433 12.178 1.253.315 2.053.385 4.002.385 2.942-.017 4.404-.35 6.875-1.575 6.857-3.394 8.597-12.948 3.324-18.197-1.288-1.278-3.446-2.468-5.587-3.045-1.931-.525-6.335-.63-8.353-.175zm7.483 2.573c3.585.91 6.092 3.185 6.77 6.212.261 1.137.227 3.272-.069 4.444-.679 2.642-2.454 4.83-4.839 6.002-1.81.893-3.463 1.26-5.691 1.26-3.393 0-6.3-1.067-8.266-3.045-1.741-1.767-2.506-3.674-2.524-6.334-.017-4.654 3.168-7.979 8.441-8.819 1.427-.21 4.803-.07 6.178.28zM0 13.018v11.548h2.959l.034-9.011.053-9.011 4.281 8.959 4.299 8.976 1.723.052 1.723.053 4.246-8.854c2.332-4.882 4.299-8.889 4.386-8.942.07-.052.14 3.938.14 8.854v8.942l1.391-.053 1.393-.052V1.557h-3.864l-4.63 9.659c-2.558 5.319-4.698 9.676-4.75 9.676-.053 0-2.193-4.375-4.77-9.711L3.952 1.469H0v11.549zm37.246-.006V24.56h2.785V1.463h-2.785v11.549zm13.224.006v11.548h2.96v-9.833c0-8.592.034-9.8.243-9.59.14.14 3.341 4.55 7.118 9.8l6.857 9.536 2.106.052 2.123.053V1.469H68.92l-.035 9.974-.052 9.974-7.188-9.974-7.205-9.974h-3.97v11.549zm27.499-10.33v1.225h10.268V24.56h2.959V3.913h10.268v-2.45H77.969v1.225zm42.293 10.33v11.548h2.958V13.718h17.752l.035 5.372.052 5.389 1.445.052 1.427.053V1.452l-1.427.052-1.445.053-.052 4.847-.035 4.864H123.22V1.469h-2.958v11.549zm64.57-3.294c0 8.942.052 9.52.992 11.391.888 1.785 2.141 2.765 4.403 3.483 1.149.35 1.654.402 4.177.402 3.063 0 4.107-.175 5.674-.892 1.931-.91 3.237-2.625 3.846-5.075.261-1.067.296-2.205.313-9.344V1.553L202.81 1.5l-1.427-.052-.052 8.101c-.07 8.82-.07 8.802-1.114 10.5-1.131 1.819-3.516 2.571-7.083 2.239-2.733-.263-4.282-1.383-5.03-3.675-.383-1.085-.4-1.452-.453-9.151l-.052-7.997h-2.767v8.26zm55.338 3.288V24.56h20.884v-2.45h-17.925v-8.224h15.663v-2.45h-15.663V3.913h17.577v-2.45H240.17v11.549z"
              fill="currentcolor"
            ></path>
          </svg>
        </Col>
        <Col xs={1} className="d-flex justify-content-end">
          <Link to="/shopping-cart" className="shopping-cart-header">
            {cartQuantity > 0 ? (
              <>
                <Badge
                  badgeContent={cartQuantity}
                  color="primary"
                  overlap="circular"
                >
                  <ShoppingCartIcon />
                </Badge>
                {/* <span className="p-1 header-cart-quantity">{cartQuantity}</span> */}
              </>
            ) : (
              <ShoppingCartOutlinedIcon />
            )}
          </Link>
        </Col>
        <Col xs={1} className="d-flex justify-content-start">
          <Nav>
            <NavDropdown title={<i className="bi bi-list"></i>}>
              <Row>
                <Link to="/">Home</Link>
              </Row>
              <Row>
                <Link to="/shop">Shop</Link>
              </Row>
              <Row>
                <Link to="/location-stay">Location Stay</Link>
              </Row>
              <Row>
                <Link to="/reservations">Reservations</Link>
              </Row>
              <Row>
                <Link to="/view-all">View All</Link>
              </Row>
              <Row>
                <Link to="/shopping-cart">Shopping Cart</Link>
              </Row>
              <Row>
                <Link to="/order-histories">Order History</Link>
              </Row>
              <Row>
                <Link to="/signup">Signup</Link>
              </Row>
              <Row>
                <Link to="/settings">Settings</Link>
              </Row>

              <EmployeeLoginNav />
            </NavDropdown>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
