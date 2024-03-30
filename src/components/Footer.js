import React from "react";
import { Container, Row } from "react-bootstrap";
import "./shop_style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <Container fluid className="site-footer">
      <Row className="justify-content-center">FOLLOW US</Row>
      <Row xs="auto" className="justify-content-center">
        <a
          className="social-media"
          href="https://www.facebook.com/StayMintHouse/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          className="social-media"
          href="https://twitter.com/theminthouse?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          className="social-media"
          href="https://www.instagram.com/staymint/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </Row>
      <Row className="copyright">
        <span className="small-text justify-content-center">
          &copy; 2023, Stock Your Stay.
        </span>
      </Row>
    </Container>
  );
}

export default Footer;
