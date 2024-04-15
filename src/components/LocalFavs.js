import React from "react";
import "./shop_style.css";
import * as images from "./assets";
import { Carousel, Card, Row, Col, Button } from "react-bootstrap";

function isMobile() {
  return window.innerWidth < 576;
}

function LocalFavs() {
  return (
    <>
      <h2>Local Favorites</h2>
      {isMobile() ? (
        <Carousel interval={null} variant="dark" nextIcon={null} wrap={false}>
          <Carousel.Item>
            <Row className="align-items-center">
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="/product/recwOkdA0wz8ZP2IW">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img1} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Siggi's Mixed Berry Non Fat Yogurt 4 Pack
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="/product/recAlBsh6pftBMWUD">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img2} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Kerrygold Pure Irish Butter
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                <a href="/product/recpvBgJ35kz3DfOa">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img4} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Organic Nonfat Milk, 1 Quart
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
      ) : (
        <Carousel interval={null} variant="dark" indicators={null}>
          <Carousel.Item>
            <Row className="align-items-center">
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="/product/recwOkdA0wz8ZP2IW">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img1} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Siggi's Mixed Berry Non Fat Yogurt 4 Pack
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="/product/recAlBsh6pftBMWUD">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img2} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Kerrygold Pure Irish Butter
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="product/reccDjPkbHZBBDzTU">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img3} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Organic Mozzarella Sticks
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="/product/recpvBgJ35kz3DfOa">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img4} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Organic Nonfat Milk, 1 Quart
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                <a href="/product/recwOkdA0wz8ZP2IW">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img1} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Siggi's Mixed Berry Non Fat Yogurt 4 Pack
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="/product/recAlBsh6pftBMWUD">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img2} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Kerrygold Pure Irish Butter
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col xs={6} md="auto">
                {/* eslint-disable-next-line */}
                <a href="product/reccDjPkbHZBBDzTU">
                  <Card
                    style={{
                      width: "200px",
                      padding: "15px",
                      marginRight: "1%",
                    }}
                  >
                    <Card.Img variant="top" src={images.img3} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "15px" }}>
                        Organic Mozzarella Sticks
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
      )}
    </>
  );
}

export default LocalFavs;
