import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const LastOrders = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p className="no-orders-msg">No orders to display.</p>;
  }

  return (
    <>
      {orders.map((order, i) => (
        <div key={order._id || i} className="dashboard-order-wrapper">
          <div className="dashboard-order-header">
            <h3 className="dashboard-order-title">
              Order #{order._id.slice(-6).toUpperCase()}
            </h3>
            <span className={`order-status order-${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
          <p className="order-date">
            Placed on: {new Date(order.createdAt).toLocaleDateString()}
          </p>

          {order.products.map((item, j) => (
            <div key={j} className="dashboard-order-card">
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="dashboard-order-img"
                loading="lazy"
              />
              <div className="dashboard-order-info">
                <h4>{item.productId.name}</h4>
                <p className="dashboard-order-qty">
                  <FiShoppingCart className="dashboard-cart-icon numbers" />{' '}
                  {item.quantity}
                </p>
              </div>
              <span className="dashboard-order-price numbers">
                {item.productId.price * item.quantity} PKR
              </span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default LastOrders;
