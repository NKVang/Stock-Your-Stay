import React, { useState } from "react";
import { Anchor, Button, Form, InputGroup, Table } from "react-bootstrap";
import { customers } from "../../assets/dummy_data/customers";
import "../../assets/styles/employee.css";

const Customers = () => {
  const [tab, setTab] = useState("All");

  const filterCustomers = (c) => {
    if (tab === "All") {
      return c;
    } else if (tab === "Active") {
      return c.filter((customer) => customer.status === "Active");
    } else if (tab === "Inactive") {
      return c.filter((customer) => customer.status === "Inactive");
    } else {
      return [];
    }
  };

  return (
    <>
      <h1 className="">Customers</h1>
      <div className="border p-2 bg-white">
        <div className="table-nav-wrapper">
          <ul className="flex flex-col py-3 border-bottom ps-4">
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
        </div>

        <div className="row px-4 mt-4">
          <InputGroup className="my-2">
            <Form.Control placeholder="Search for a Customer.." />
            <Button variant="success">Search</Button>
          </InputGroup>
        </div>

        <div className="px-2 py-4 table-wrapper">
          <Table hover>
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
          </Table>
        </div>

        <div className="hstack">
          <div className="ms-auto me-4">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a
                    className="page-link text-success"
                    href="/employee/customers"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-success" href="/employee/customers">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-success" href="/employee/customers">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-success" href="/employee/customers">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link text-success"
                    href="/employee/customers"
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

export default Customers;
