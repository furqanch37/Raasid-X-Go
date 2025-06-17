import React from 'react';
import {  FaUser, FaShoppingBag } from 'react-icons/fa';
import { FiSearch ,FiPhone} from "react-icons/fi";
import Link from 'next/link';
const MiddleSection = () => {
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
          <option>Spices</option>
          <option>Fruits Preserves</option>
          <option>One Day Meals</option>
          <option>Ready to Eat</option>
          <option>Gronola Bars</option>
          <option>MRE's</option>
          <option>Berevlgies</option>
          <option>Food</option>
          <option>Water</option>
        </select>
        <button className="search-btn"><FiSearch /></button>
      </div>
      <div className="phone">
          <FiPhone size={22} className='icon-one' />
          <div>
            <small>CALL US NOW</small>
            <strong>+92 370 2333125</strong>
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
          <span className="cart-count">0</span>
          <span className="cart-price">0.00PKR</span>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
