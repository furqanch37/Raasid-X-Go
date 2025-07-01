'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/app/redux/features/userSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { baseUrl } from '@/app/const';
import './Login.css';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items); // 👈 Access cart from Redux

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        const userRole = Array.isArray(data.user.role)
          ? data.user.role[0]
          : data.user.role || 'user';

        dispatch(login(data.user));

        if (userRole === 'admin' || userRole === 'subadmin') {
          router.push('/admin');
        } else {
          if (cartItems.length === 0) {
            router.push('/home');
          } else {
            router.push('/checkout');
          }
        }
      } else {
        if (data.message?.includes('not registered')) {
          router.push('/signup');
        } else {
          setError(data.message || 'Login failed');
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="login-wrapper">
      <article className="login-card">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username" className="login-label">
            Email Address <span>*</span>
          </label>
          <input
            id="username"
            type="email"
            className="login-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="login-label">
            Password <span>*</span>
          </label>
          <div className="password-field">
            <input
              id="password"
              type={showPwd ? 'text' : 'password'}
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPwd((prev) => !prev)}
              aria-label="Toggle password visibility"
            >
              {showPwd ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">
            Log in
          </button>

          <Link href="/signup" className="forgot-link">
            Don’t have an account? Sign Up
          </Link>
        </form>
      </article>
    </main>
  );
}
