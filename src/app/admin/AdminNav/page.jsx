'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdCategory } from 'react-icons/md';

import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaShoppingCart,
  FaUserShield,
  FaEnvelope,
  FaCogs,
  FaUserCircle,
  FaExchangeAlt,
  FaBalanceScale,
  FaHome,
  FaPowerOff
} from 'react-icons/fa';
import './adminNav.css';

const AdminNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="mobile-header">
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <img src="/RaasidLogo.svg" alt="Logo" className="mobile-logo" />
      </div>

      <aside className={`admin-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand">
          <img src="/RaasidLogo.svg" alt="Modernize Logo" className="logo" />
          <span className="brand-name">Raasid</span>
        </div>

        <nav className="nav-sections">
          <div className="nav-group">
            <ul>
              <li>
                <Link href="/admin">
                  <FaHome className="icon-three" /> <span>Home</span>
                </Link>
              </li>
            
              <li>
                <Link href="/admin/manage-categories">
                  <FaGlobe className="icon-three" /> <span>Cetagories</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/sellerdata">
                  <FaShoppingCart className="icon-three" /> <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/SeeAllAdmin">
                  <FaUserShield className="icon-three" /> <span>Add Products</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/emails">
                  <FaEnvelope className="icon-three" /> <span>Messages</span>
                </Link>
              </li>
              
               
    
            </ul>
          </div>
        </nav>

      </aside>
    </>
  );
};

export default AdminNav;
