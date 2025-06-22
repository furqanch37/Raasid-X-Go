'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import "./styles.css";
import { baseUrl } from '@/app/const';
import { clearCart } from '@/app/redux/features/cartSlice';

export default function CheckoutForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const { userData } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userData) {
      setEmail(userData.email);
      setFullName(`${userData.firstName} ${userData.lastName || ''}`);
    }
  }, [userData]);

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData) {
      alert("Please login before placing an order.");
      router.push('/login');
      return;
    }

    const products = cartItems.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
    }));

    const orderData = {
      user: userData._id, // ✅ Send user ID
      email,
      fullName,
      address,
      city,
      phone,
      shippingMethod,
      paymentMethod,
      products,
      totalAmount: getTotal(),
    };

    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/order/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(clearCart());
        router.push('/dashboard');
      } else {
        alert(data.message || 'Failed to place order.');
      }
    } catch (err) {
      console.error(err);
      alert('Error placing order.');
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Protect route
  if (!userData) {
    router.push('/login');
    return null;
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <section>
        <h2>Contact Information</h2>
        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </section>

      <section>
        <h2>Shipping Details</h2>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="numbers"
          type="tel"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </section>

      <section>
        <h2>Shipping Method</h2>
        <select required value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}>
          <option value="">Select a shipping method</option>
          <option value="TCS">TCS</option>
          <option value="Leopards">Leopards</option>
          <option value="M&P">M&P</option>
          <option value="PostOffice">Post Office</option>
        </select>
      </section>

      <section>
        <h2>Payment Method</h2>
        <select required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
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

          <button type="submit" className="place-order-btn" disabled={loading}>
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      </div>
    </form>
  );
}
