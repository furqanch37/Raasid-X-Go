'use client';
import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingBag } from 'react-icons/fa';
import { FiSearch, FiPhone } from "react-icons/fi";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { baseUrl } from '@/app/const'; 

const MiddleSection = () => {
  const [categories, setCategories] = useState([]);

  // Get cart items from Redux store
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.length; // unique products in cart
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

  return (
    <div className="middle-section">
      <Link href="/home">
        <div className="logo-1">
          <img src="/RaasidLogo.svg" alt="Raasid" />
        </div>
      </Link>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <select>
          <option>All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id}>{cat.categoryName}</option>
          ))}
        </select>
        <button className="search-btn"><FiSearch /></button>
      </div>

      <div className="phone">
        <FiPhone size={22} className="icon-one" />
        <div>
          <small>CALL US NOW</small>
          <strong className='numbers'>+92 370 2333125</strong>
        </div>
      </div>

      <div className="contact-icons">
        <Link href="/login">
          <FaUser className="icon-one" />
        </Link>
        <div className="cart-1">
          <Link href="/cart">
            <FaShoppingBag className="icon-one" />
          </Link>
          <span className="cart-count">{cartCount}</span>
          <span className="cart-price-numbers" >{cartTotalPrice}PKR</span>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
