import {
  faBoxOpen,
  faChartLine,
  faHouse,
  faTruckMoving,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import "../assets/styles/employee.css";

const Sidebar = () => {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky"></div>
        <Nav.Item className="border-bottom m-2">
          <Nav.Link href="/employee" className="link-dark ">
            <div className="hstack">
              <div>Orders</div>
              <div className="ms-auto">
                <FontAwesomeIcon icon={faBoxOpen} />
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-bottom m-2">
          <Nav.Link href="/employee/inventory" className="link-dark ">
            <div className="hstack">
              <div>Inventory</div>
              <div className="ms-auto">
                <FontAwesomeIcon icon={faTruckMoving} />
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-bottom m-2">
          <Nav.Link href="/employee/rooms" className="link-dark ">
            <div className="hstack">
              <div>Rooms</div>
              <div className="ms-auto">
                <FontAwesomeIcon icon={faHouse} />
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-bottom m-2">
          <Nav.Link href="/employee/customers" className="link-dark ">
            <div className="hstack">
              <div>Customers</div>
              <div className="ms-auto">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="border-bottom m-2">
          <Nav.Link href="/employee/analytics" className="link-dark ">
            <div className="hstack">
              <div>Analytics</div>
              <div className="ms-auto">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
