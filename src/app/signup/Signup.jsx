'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';   // ← NEW
import './Signup.css';

export default function SignUpCard() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <main className="login-wrapper">
      <article className="login-card">
        <h2 className="login-title">SignUp</h2>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {/* Username / email */}
           <label htmlFor="username" className="login-label">
            Name <span>*</span>
          </label>
          <input
            id="name"
            type="text"
            className="login-input"
            placeholder=""
            required
          />
          <label htmlFor="username" className="login-label">
            email address <span>*</span>
          </label>
          <input
            id="email"
            type="text"
            className="login-input"
            placeholder="you@gmail.com"
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
            Sign Up
          </button>

          {/* Lost password */}
          <Link href="/forgot-password" className="forgot-link">
            Already have an account? Login
          </Link>
        </form>
      </article>
    </main>
  );
}
