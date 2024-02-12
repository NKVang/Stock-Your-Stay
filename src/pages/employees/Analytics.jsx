import Chart from "chart.js/auto";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const Analytics = () => {
  let chart1, chart2;
  const showCharts = () => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    chart1 = new Chart(document.getElementById("customers"), {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "customers by year",
            data: data.map((row) => row.count),
          },
        ],
      },
    });

    chart2 = new Chart(document.getElementById("orders"), {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "orders by year",
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  };

  useEffect(() => {
    if (!chart1 && !chart2) showCharts();
    // eslint-disable-next-line
  }, [chart1, chart2]);

  return (
    <>
      <h1 className="">Analytics</h1>
      <div className="border p-4 bg-white">
        <Row>
          <Col>
            <h2 className="">Customers</h2>
            <div className="px-2">
              <canvas id="customers"></canvas>
            </div>
          </Col>
          <Col>
            <h2 className="">Orders</h2>
            <div className="px-2">
              <canvas id="orders"></canvas>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Analytics;
