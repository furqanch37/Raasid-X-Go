// File: components/Cart.js
import React from 'react';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import './cartstyles.css';

const Cart = () => {
  return (
    <section className="cart-section">
      <div className="container">
        <h1 className="cart-title">Cart</h1>
        <div className="cart-wrapper">
          <div className="cart-left">
            <table className="cart-table">
              <thead>
               <tr className="tr-row" style={{ borderBottom: "1px solid hsla(0, 0%, 7%, 0.11)" }}>

                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-info">
                    <img src="/assets/chaat_masala.png" alt="Roast Potato" className="product-img" />
                    <div className="product-details">
                      <h3>Chaat Masala</h3>
                      <p className="new-price">40.00PKR</p>
                      <p className="product-desc">
                        Nulla repudiandae? Purus. Lectus ultrices minus, natoque laudantium! Vehicula occaecat ea hendrerit sequi incididunt turpis...
                      </p>
                      <div className="quantity-control">
                        <button><FaMinus /></button>
                        <input type="text" value="1" readOnly />
                        <button><FaPlus /></button>
                      </div>
                      <button className="remove-btn">Remove item</button>
                    </div>
                  </td>
                  <td className="product-total">40.00PKR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cart-right">
            <div className="cart-totals">
              <h3>Cart Totals</h3>
            
              <div className="subtotal">
                <span>Subtotal</span>
                <span>40.00PKR</span>
              </div>
              <div className="total">
                <strong>Total</strong>
                <strong>40.00PKR</strong>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
