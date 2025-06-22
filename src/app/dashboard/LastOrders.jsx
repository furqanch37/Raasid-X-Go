import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'; // Feather Icons

const LastOrders = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p className="no-orders-msg">No orders to display.</p>;
  }

  return (
    <>
      {orders.map((order, i) => (
        <div key={i} className="dashboard-order-card">
          <img
            src={order.img}
            alt={order.name}
            className="dashboard-order-img"
            loading="lazy"
          />
          <div className="dashboard-order-info">
            <h4>{order.name}</h4>
            <p>Weight: {order.weight}</p>
            <p className="dashboard-order-qty">
              <FiShoppingCart className="dashboard-cart-icon numbers" />{' '}
              {order.quantity}
            </p>
          </div>
          <span className="dashboard-order-price numbers">
            {order.price} PKR
          </span>
        </div>
      ))}
    </>
  );
};

export default LastOrders;
