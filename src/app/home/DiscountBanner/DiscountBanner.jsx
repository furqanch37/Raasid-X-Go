import React from 'react';
import "./DiscountBanner.css";
import Link from 'next/link';

const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      <div className="discount-content">
        <p className="discount-tag">SPECIAL DISCOUNT</p>
        <h2 className="discount-heading">For All Grocery Products</h2>
        <p className="discount-subtext">Take now 20% off for all grocer product.</p>
     <Link href="/shop">
  <button className="shop-btn">SHOP NOW →</button>
</Link>
      </div>
    </div>
  );
};

export default DiscountBanner;
