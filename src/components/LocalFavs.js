import React from "react";
import "./shop_style.css";
import * as images from "./assets";
import { Carousel, Card, Row, Button } from "react-bootstrap";

function LocalFavs() {
  return (
    <>
      <h2>
        <strong>Local Favorites</strong>
      </h2>
      <Carousel
        interval={null}
        variant="dark"
        prevLabel={null}
        prevIcon={null}
        nextLabel={null}
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
                  <Card.Img variant="top" src={images.img1} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Siggi's Mixed Berry Non Fat Yogurt 4 Pack
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                  <Card.Img variant="top" src={images.img2} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Kerrygold Pure Irish Butter
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                  <Card.Img variant="top" src={images.img3} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Organic Mozzarella Sticks
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                  <Card.Img variant="top" src={images.img4} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Organic Nonfat Milk, 1 Quart
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                  <Card.Img variant="top" src={images.img1} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Siggi's Mixed Berry Non Fat Yogurt 4 Pack
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                  <Card.Img variant="top" src={images.img2} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Kerrygold Pure Irish Butter
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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
                  <Card.Img variant="top" src={images.img3} />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "15px" }}>
                      Organic Mozzarella Sticks
                    </Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>$5.59</Card.Text>
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

export default LocalFavs;
