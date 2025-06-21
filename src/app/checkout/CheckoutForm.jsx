'use client';

import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function CheckoutForm() {
  return (
    <form className="checkout-form">
      <section>
        <h2>Contact Information</h2>
        <input type="email" placeholder="Email address" required />
      </section>

      <section>
        <h2>Shipping Details</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
      <input
  className="numbers"
  style={{ fontWeight: 100 }}
  type="tel"
  placeholder="Phone Number"
  required
/>

      </section>

      <section>
        <h2>Shipping Method</h2>
        <select required>
          <option value="">Select a shipping method</option>
          <option value="standard">TCS</option>
        </select>
      </section>

      <section>
        <h2>Payment Method</h2>
        <select required>
          <option value="">Select a payment method</option>
          <option value="cod">Cash on Delivery</option>
          <option value="card">Card Payment</option>
        </select>
      </section>

      <div className="order-footer">
        <div className="footer-actions">
          <Link href="/cart" className="return-link">
            <FaArrowLeft className="arrow-icon" /> Return to Cart
          </Link>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
}
