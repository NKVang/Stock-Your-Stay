import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "../../assets/styles/employee.css";
import EmployeeHeader from "../../components/EmployeeHeader";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  return (
    <>
      <EmployeeHeader />
      <Container fluid className="bg-light">
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
