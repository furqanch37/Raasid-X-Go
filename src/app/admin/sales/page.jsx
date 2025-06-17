'use client';
import React, { useState } from "react";
import Head from "next/head";
import "./orders.css";

const initialOrders = [
  {
    invoice: "1",
    time: "17 Jun, 2025 2:00 PM",
    customer: "Mani pk",
    method: "Cash",
    amount: "187PKR",
    status: "Pending",
  },
  {
    invoice: "2",
    time: "16 Jun, 2025 6:53 PM",
    customer: "Taarak Mehta",
    method: "Cash",
    amount: "50.78PKR",
    status: "Delivered",
  },
  {
    invoice: "3",
    time: "16 Jun, 2025 12:23 PM",
    customer: "rammi rammi",
    method: "Cash",
    amount: "96PKR",
    status: "Processing",
  },
  {
    invoice: "4",
    time: "16 Jun, 2025 12:03 PM",
    customer: "Jobin Mohan",
    method: "Cash",
    amount: "90PKR",
    status: "Cancel",
  },
  {
    invoice: "5",
    time: "16 Jun, 2025 9:43 AM",
    customer: "RAMESH DEVALLA",
    method: "Cash",
    amount: "378PKR",
    status: "Delivered",
  },
  {
    invoice: "6",
    time: "15 Jun, 2025 8:52 PM",
    customer: "add sda",
    method: "Cash",
    amount: "2010PKR",
    status: "Delivered",
  },
  {
    invoice: "7",
    time: "14 Jun, 2025 4:38 PM",
    customer: "Damsol Damsol",
    method: "Cash",
    amount: "50.78PKR",
    status: "Processing",
  },
  {
    invoice: "8",
    time: "14 Jun, 2025 1:59 PM",
    customer: "Dhanapal Kumaravel",
    method: "Cash",
    amount: "498PKR",
    status: "Delivered",
  },
];

const Sales = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Order Time</th>
              <th>Customer Name</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.invoice}</td>
                <td>{order.time}</td>
                <td>{order.customer}</td>
                <td><strong>{order.method}</strong></td>
                <td>{order.amount}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <select
                    className="action-dropdown"
                    value={order.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <option value="Delivered">Delivered</option>
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Cancel">Cancel</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Sales;
