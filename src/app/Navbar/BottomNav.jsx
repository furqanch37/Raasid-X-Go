'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

const BottomNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bottom-nav">
      {/* Left - Categories button */}
      <button className="categories-btn">
        <FaBars style={{ marginRight: "8px" }} />
        CATEGORIES <FiChevronDown style={{ marginLeft: "6px" }} />
      </button>

      {/* Burger Icon (Mobile Only) */}
      <div className="bottom-burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars size={22} />
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link href="/home">HOME</Link></li>
        <li><Link href="/about">ABOUT US</Link></li>
        <li><Link href="/shop">SHOP</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
      </ul>

      {/* Shop Now Button */}
      <Link href="/shop">
        <button className="shop-now-btn">SHOP NOW</button>
      </Link>
    </nav>
  );
};

export default BottomNav;
