import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FiChevronDown } from "react-icons/fi"; 
import Link from 'next/link';
const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <button className="categories-btn">
      <FaBars style={{ marginRight: "8px" }} />
  CATEGORIES <FiChevronDown style={{ marginLeft: "6px" }} />
      </button>
      <ul className="nav-links">
          <li><Link href="/home">HOME</Link></li>
  <li><Link href="/about">ABOUT US</Link></li>
  <li><Link href="/shop">SHOP</Link></li>
  <li><Link href="/contact">CONTACT</Link></li>
      </ul>
      <Link href="/shop">
  <button className="shop-now-btn">SHOP NOW</button>
</Link>
    </nav>
  );
};

export default BottomNav;
