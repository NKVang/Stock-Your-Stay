import React, { useState } from "react";
import { Anchor, Button, Form, InputGroup } from "react-bootstrap";
import "../../assets/styles/employee.css";

const Rooms = () => {
  const [tab, setTab] = useState("All");

  // eslint-disable-next-line
  const filterRooms = (r) => {
    if (tab === "All") {
      return r;
    } else if (tab === "Active") {
      return r.filter((customer) => customer.status === "Active");
    } else if (tab === "Inactive") {
      return r.filter((customer) => customer.status === "Inactive");
    } else {
      return [];
    }
  };

  return (
    <>
      <h1 className="">Rooms</h1>
      <div className="border p-2 bg-white">
        <ul className="nav border-bottom ps-4">
          <Anchor
            className={
              "px-4 py-3 text-black " +
              (tab === "All"
                ? "border-bottom border-3 border-success-subtle"
                : "")
            }
            onClick={() => {
              setTab("All");
            }}
          >
            All
          </Anchor>
          <Anchor
            className={
              "px-4 py-3 text-black " +
              (tab === "Active"
                ? "border-bottom border-3 border-success-subtle"
                : "")
            }
            onClick={() => {
              setTab("Active");
            }}
          >
            Active
          </Anchor>
          <Anchor
            className={
              "px-4 py-3 text-black " +
              (tab === "Inactive"
                ? "border-bottom border-3 border-success-subtle"
                : "")
            }
            onClick={() => {
              setTab("Inactive");
            }}
          >
            Inactive
          </Anchor>
        </ul>

        <div className="row px-4 mt-4">
          <InputGroup className="my-2">
            <Form.Control placeholder="Search for a Room.." />
            <Button variant="success">Search</Button>
          </InputGroup>
        </div>

        <div className="px-2 py-4 text-center">
          Table Goes here
          {/* <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>Confirmation #</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Activity Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filterCustomers(customers).map((customer) => {
                return (
                  <tr key={customer.confirmationNum}>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td>{customer.confirmationNum}</td>
                    <td>{customer.firstName + " " + customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phoneNum}</td>
                    <td>{customer.status}</td>
                    <td>
                      <button
                        type="button"
                        className="mock-button"
                        onClick={() => this}
                      >
                        Customer Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
        </div>

        <div className="hstack">
          <div className="ms-auto me-4">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a
                    className="page-link text-success"
                    href="/"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-success" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-success" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-success" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-success"
                    href="/"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
