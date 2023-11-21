import React from "react";
import "./shop_style.css";
import * as images from "./assets";
import { Carousel, Card, Row, } from "react-bootstrap";

function SubCat1() {
    return (
        <>
            <h2>
                <strong>Sub-Category 1</strong>
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
                                    Sub-Category Item 1
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "13px" }}>$4.99</Card.Text>
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
                                <Card.Img variant="top" src={images.img1} />
                                <Card.Body className="text-center">
                                    <Card.Title style={{ fontSize: "15px" }}>
                                    Sub-Category Item 2
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "13px" }}>$4.99</Card.Text>
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
                                <Card.Img variant="top" src={images.img1} />
                                <Card.Body className="text-center">
                                    <Card.Title style={{ fontSize: "15px" }}>
                                    Sub-Category Item 3
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "13px" }}>$4.99</Card.Text>
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
                                <Card.Img variant="top" src={images.img1} />
                                <Card.Body className="text-center">
                                    <Card.Title style={{ fontSize: "15px" }}>
                                    Sub-Category Item 4
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "13px" }}>$4.99</Card.Text>
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
                                    Sub-Category Item 4
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "13px" }}>$4.99</Card.Text>
                                </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default SubCat1;