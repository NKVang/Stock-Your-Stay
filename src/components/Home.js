import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import * as images from "./assets";
// import { Link } from "react-router-dom";

function App() {
  // const buildDiv = (content) => {
  //   return (
  //     <div className="home-splash-div">
  //       {content === "Go to shop" ? (
  //         <Link to="/shop">
  //           <img src={images.splash1} alt="" className="home-image-div" />
  //         </Link>
  //       ) : (
  //         <Link to="/reservations">
  //           <img src={images.splash2} alt="" className="home-image-div" />
  //         </Link>
  //       )}

  //       {content === "Go to shop" ? (
  //         <Link to="/shop">
  //           <div className="home-splash-text">Go to shop</div>
  //         </Link>
  //       ) : (
  //         <Link to="/reservations">
  //           <div className="home-splash-text">Choose location</div>
  //         </Link>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <Container>
      <Row>
        <Carousel
          fade
          interval={10000}
          variant="dark"
          prevLabel={null}
          prevIcon={null}
          nextLabel={null}
          nextIcon={null}
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <Carousel.Item style={{ minHeight: "auto" }}>
            <img
              className="d-block w-100"
              src={images.carousel1}
              alt={`Slide 1`}
            />
            <Carousel.Caption
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "10px",
              }}
            >
              <h2>Locate Your Destination</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ minHeight: "auto" }}>
            <img
              className="d-block w-100"
              src={images.carousel2}
              alt={`Slide 2`}
            />
            <Carousel.Caption
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "10px",
              }}
            >
              <h2>Browse For Groceries</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      {/* <Row className="d-flex align-items-center justify-content-center">
        {buildDiv("Go to shop")}
        {buildDiv("Choose location")}
      </Row> */}
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={3} className="text-center">
          <h4>
            <u>About Us</u>
          </h4>
          <p>TBA.</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="text-center">
          <h4>
            <u>What We Do</u>
          </h4>
          <p>TBA.</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="text-center">
          <h4>
            <u>Ordering For Your Stay</u>
          </h4>
          <p>TBA.</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="text-center">
          <h4>
            <u>Help Us Stock Your Stay</u>
          </h4>
          <p>TBA.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
