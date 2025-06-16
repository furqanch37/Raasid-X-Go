import React from 'react';
import "./DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      <div className="discount-content">
        <p className="discount-tag">SPECIAL DISCOUNT</p>
        <h2 className="discount-heading">For All Grocery Products</h2>
        <p className="discount-subtext">Take now 20% off for all grocer product.</p>
        <button className="shop-btn">SHOP NOW →</button>
      </div>
    </div>
  );
};

export default DiscountBanner;
