import React, { useState } from "react";
import { Anchor, Button, Form, InputGroup, Table } from "react-bootstrap";
import { orders } from "../../assets/dummy_data/orders";
import "../../assets/styles/employee.css";

const Orders = () => {
  const [tab, setTab] = useState("All");

  const filterOrders = (o) => {
    if (tab === "All") {
      return o;
    } else if (tab === "Completed") {
      return o.filter((order) => order.status === "Completed");
    } else if (tab === "Pending") {
      return o.filter((order) => order.status === "Pending");
    } else if (tab === "Cancelled") {
      return o.filter((order) => order.status === "Cancelled");
    } else {
      return [];
    }
  };

  return (
    <>
      <h1 className="">Orders</h1>
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
              (tab === "Completed"
                ? "border-bottom border-3 border-success-subtle"
                : "")
            }
            onClick={() => {
              setTab("Completed");
            }}
          >
            Completed
          </Anchor>
          <Anchor
            className={
              "px-4 py-3 text-black " +
              (tab === "Pending"
                ? "border-bottom border-3 border-success-subtle"
                : "")
            }
            onClick={() => {
              setTab("Pending");
            }}
          >
            Pending
          </Anchor>
          <Anchor
            className={
              "px-4 py-3 text-black " +
              (tab === "Cancelled"
                ? "border-bottom border-3 border-success-subtle"
                : "")
            }
            onClick={() => {
              setTab("Cancelled");
            }}
          >
            Cancelled
          </Anchor>
        </ul>

        <div className="row px-4 mt-4">
          <InputGroup className="my-2">
            <Form.Control placeholder="Search for an Order.." />
            <Button variant="success">Search</Button>
          </InputGroup>
        </div>

        <div className="px-2 py-4">
          <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>Order #</th>
                <th>Confirmation #</th>
                <th>Order Date</th>
                <th>Total Price</th>
                <th>Completion Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filterOrders(orders).map((order) => {
                return (
                  <tr key={order.orderNum}>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td>{order.orderNum}</td>
                    <td>{order.confirmationNum}</td>
                    <td>{order.date}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.status}</td>
                    <td>
                      <button
                        type="button"
                        className="mock-button"
                        onClick={() => this}
                      >
                        Order Details
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

export default Orders;
