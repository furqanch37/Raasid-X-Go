'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaUser, FaShoppingBag } from 'react-icons/fa';
import { FiSearch, FiPhone } from "react-icons/fi";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/app/redux/features/userSlice';
import { baseUrl } from '@/app/const';
import './navbar.css';

const MiddleSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user.userData);
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.length;
  const cartTotalPrice = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/category/`);
        const data = await res.json();
        if (data.success) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // 🔁 Handle category dropdown
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // 🔍 Handle search button
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedCategory) {
      params.append('category', selectedCategory);
    }
    if (searchTerm) {
      params.append('search', searchTerm);
    }

    router.push(`/shop?${params.toString()}`);
  };

  // ⛔ Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
  };

  return (
    <div className="middle-section">
      <Link href="/home">
        <div className="logo-1">
          <img src="/RaasidLogo.svg" alt="Raasid" />
        </div>
      </Link>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.categoryName}>
              {cat.categoryName}
            </option>
          ))}
        </select>
        <button className="search-btn" onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>

      <div className="phone">
        <FiPhone size={22} className="icon-one" />
        <div>
          <small>CALL US NOW</small>
          <strong className="numbers">+92 370 2333125</strong>
        </div>
      </div>

      <div className="contact-icons">
        {user ? (
          <div className="user-dropdown" ref={dropdownRef}>
            <div className="user-initial" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {user.firstName?.[0]?.toUpperCase() || 'U'}
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <p className="dropdown-item">Hi, {user.firstName}</p>
                <button className="dropdown-item logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <FaUser className="icon-one" />
          </Link>
        )}

        <div className="cart-1">
          <Link href="/cart">
            <div className="cart-icon-wrapper">
              <FaShoppingBag className="icon-one" />
              <span className="cart-count numbers">{cartCount}</span>
            </div>
          </Link>
          <span className="cart-price numbers">{cartTotalPrice} PKR</span>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
