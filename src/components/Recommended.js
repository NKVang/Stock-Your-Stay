import React from "react";
import "./shop_style.css";
import * as images from "./assets";
import { Carousel, Card, Row, Col, Button } from "react-bootstrap";

function Recommended() {
  return (
    <>
      <h2>
        <strong>Recommended</strong>
      </h2>
      <Carousel
        interval={null}
        variant="dark"
        prevLabel={null}
        prevIcon={null}
        indicators={null}
      >
        <Carousel.Item>
          <Row className="align-items-center">
            <Col xs={6} md="auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img9} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Banana, 1ct
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$0.59</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col xs={6} md="auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img10} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Quinn Peanut Butter Filled Pretzel Nuggets, Gluten Free
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col xs={6} md="auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img11} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Organic Thick & Chunky Medium Salsa
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$3.29</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col xs={6} md="auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img12} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Stacy's Simply Naked Pita Chips, Multigran
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$3.99</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="align-items-center">
            <Col xs={6} md="auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img9} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Banana, 1ct
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$0.59</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col xs={6} md="auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img10} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Quinn Peanut Butter Filled Pretzel Nuggets, Gluten Free
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col xs={6} md="auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img11} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Organic Thick & Chunky Medium Salsa
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$3.29</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col xs={6} md={3} className="d-flex justify-content-center">
              <Button variant="light">View All</Button>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Recommended;
