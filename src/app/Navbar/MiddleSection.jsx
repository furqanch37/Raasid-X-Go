import React from 'react';
import {  FaUser, FaShoppingBag } from 'react-icons/fa';
import { FiSearch ,FiPhone} from "react-icons/fi";
const MiddleSection = () => {
  return (
    <div className="middle-section">
      <div className="logo"> 
        <img src="/Raasidlogo.svg" alt="Shoppable Grocery Store" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <select>
          <option>All Categories</option>
        </select>
        <button className="search-btn"><FiSearch /></button>
      </div>
      <div className="phone">
          <FiPhone size={22} className='icon-one' />
          <div>
            <small>CALL US NOW</small>
            <strong>+9758-254-753</strong>
          </div>
        </div>
      <div className="contact-icons">
        
        <FaUser className='icon-one' />
        <div className="cart-1">
          <FaShoppingBag className='icon-one' />
          <span className="cart-count">0</span>
          <span className="cart-price">0.00PKR</span>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
