import React from "react";
import "./shop_style.css";
import * as images from "./assets";
import { Carousel, Card, Row, Button } from "react-bootstrap";

function LastStay() {
  return (
    <>
      <h2>
        <strong>From your last stay</strong>
      </h2>
      <Carousel
        interval={null}
        variant="dark"
        prevLabel={null}
        prevIcon={null}
        indicators={null}
        touch={false}
      >
        <Carousel.Item>
          <Row className="align-items-center">
            <div className="col-sm-auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img5} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Chicken & Apple Chicken Sausage
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$9.29</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img6} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      RAOS Chicken Parmesan
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$6.99</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img7} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Applegate Chicken Nuggets
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$12.99</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img8} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Frozen Salmon Fillets (2),6oz/each
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$13.99</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="align-items-center">
            <div className="col-sm-auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img5} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Chicken & Apple Chicken Sausage
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$9.29</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img6} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      RAOS Chicken Parmesan
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$6.99</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-auto">
              {/* eslint-disable-next-line */}
              <a href="#">
                <Card
                  style={{
                    width: "200px",
                    padding: "15px",
                    marginRight: "1%",
                  }}
                >
                  <Card.Img variant="top" src={images.img7} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Applegate Chicken Nuggets
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$12.99</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="col-sm-auto d-flex justify-content-center">
              <Button variant="light">View All</Button>
            </div>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default LastStay;
