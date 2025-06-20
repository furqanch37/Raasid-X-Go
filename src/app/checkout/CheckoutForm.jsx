'use client';

import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link"; // ✅ Import Link from Next.js

export default function CheckoutForm() {
  return (
    <form className="checkout-form">
      <section>
        <h2>Contact information</h2>
        <input type="email" placeholder="Email address" required />
      </section>

      <section>
        <h2>Billing address</h2>
        <select required>
          <option>United States (US)</option>
        </select>
        <div className="input-row">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Apartment, suite, etc." />
        <div className="input-row">
          <input type="text" placeholder="City" required />
          <select>
            <option>California</option>
          </select>
        </div>
        <div className="input-row">
          <input type="text" placeholder="ZIP Code" required />
          <input type="tel" placeholder="Phone (optional)" />
        </div>
      </section>

      <div className="order-footer">
  

        <div className="footer-actions">
          {/* ✅ Use Link for client-side navigation */}
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
