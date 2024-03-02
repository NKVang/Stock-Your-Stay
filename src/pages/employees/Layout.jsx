import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "../../assets/styles/employee.css";
import EmployeeHeader from "../../components/EmployeeHeader";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <EmployeeHeader
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      <Container fluid className="bg-light">
        <Row>
          <Col className="d-none d-xl-block" xs={1} xl={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          {showSidebar && <Sidebar />}
          <Col xl={10} id="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
