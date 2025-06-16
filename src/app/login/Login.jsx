'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';   // ← NEW
import './Login.css';

export default function LoginCard() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <main className="login-wrapper">
      <article className="login-card">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {/* Username / email */}
          <label htmlFor="username" className="login-label">
            Username or email address <span>*</span>
          </label>
          <input
            id="username"
            type="text"
            className="login-input"
            placeholder="you@example.com"
            required
          />

          {/* Password with eye‑toggle */}
          <label htmlFor="password" className="login-label">
            Password <span>*</span>
          </label>
          <div className="password-field">
            <input
              id="password"
              type={showPwd ? 'text' : 'password'}
              className="login-input"
              required
            />

          </div>

          {/* Remember me */}
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="login-btn">
            Log in
          </button>
          
          {/* Lost password */}
          <Link href="/signup" className="forgot-link">
            SignUp
          </Link>
        </form>
      </article>
    </main>
  );
}
