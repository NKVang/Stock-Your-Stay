import React, { useState } from 'react';
import EmployeeHeader from './EmployeeHeader';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Container, Col, Button, Row} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import EmployeeTable from './EmployeeTable';
import './employee_style.css'
import EmployeeButton from './EmployeeButtons';

const Employee = () => {
  return (
    <>
    <EmployeeHeader />
    <Container fluid style={{ margin: 0, padding: 0 }} className="center-align">
      <Row>
        <Col xs="auto">
          <Row className="page-button">
            <Button size="lg" variant="light">
              Orders
            </Button>
          </Row>
          <Row className="page-button">
            <Button size="lg" variant="light">
              Inventory
            </Button>
          </Row>
          <Row className="page-button">
            <Button size="lg" variant="light">
              Rooms
            </Button>
          </Row>
        </Col>
        <Col xs={9} className="d-flex justify-content-end flex-column align-items-center mx-auto">
            <h1>Orders</h1>
            <EmployeeButton />
          < EmployeeTable />
        </Col>
      </Row>
    </Container>
    </>
    
      
  );
};

export default withAuthenticationRequired(Employee, {
  onRedirecting: () => <div>Loading...</div>,
});
