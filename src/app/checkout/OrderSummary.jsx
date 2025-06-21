'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

export default function OrderSummary() {
  const items = useSelector((state) => state.cart.items);

  const getTotalPrice = () => {
    return items
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <aside className="order-summary">
      <h3>Order Summary</h3>

      {items.map((item) => (
        <div className="item" key={item._id}>
          <div className="image-wrapper">
            <img src={item.image} alt={item.name} />
            <span className="item-qty">{item.quantity}</span>
          </div>
          <div className="item-details">
            <div className="item-row">
              <strong>{item.name}</strong>
              <strong>{(item.price * item.quantity).toFixed(2)}PKR</strong>
            </div>
            <p className="desc">{item.description?.slice(0, 100)}...</p>
          </div>
        </div>
      ))}

      <div className="price">
        <p>
          Subtotal <strong className='numbers'>{getTotalPrice()}PKR</strong>
        </p>
        <p className="total-p">
          Total <strong className='numbers'>{getTotalPrice()}PKR</strong>
        </p>
      </div>
    </aside>
  );
}
