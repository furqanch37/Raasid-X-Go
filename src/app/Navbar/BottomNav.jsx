'use client';
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Link from 'next/link';
import { baseUrl } from '@/app/const'; // adjust if path is different
import './navbar.css'; // custom styles

const BottomNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/category`);
        const data = await res.json();
        if (data.success) {
          setCategories(data.categories);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <nav className="bottom-nav">
      {/* Left - Categories button */}
      <div className="dropdown-wrapper">
        <button
          className="categories-btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FaBars style={{ marginRight: '8px' }} />
          CATEGORIES{' '}
          {dropdownOpen ? (
            <FiChevronUp style={{ marginLeft: '6px' }} />
          ) : (
            <FiChevronDown style={{ marginLeft: '6px' }} />
          )}
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <ul className="dropdown-menu">
            {categories.map((cat) => (
              <li key={cat._id}>
                <Link href={`/category/${cat._id}`}>{cat.categoryName}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

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
        <button className="shop-now-btn-1">SHOP NOW</button>
      </Link>
    </nav>
  );
};

export default BottomNav;
