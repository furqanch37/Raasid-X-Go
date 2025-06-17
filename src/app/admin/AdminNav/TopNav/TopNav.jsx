'use client';
import React from 'react';
import './TopNav.css';
import { FaSearch } from 'react-icons/fa';
import { FiBell, FiMoreVertical } from "react-icons/fi";
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Link from 'next/link';

const TopNav = () => {
  return (
    <header className="topnav">
      <div className="topnav-more">
        <FiMoreVertical className="topNavIcon" />
      </div>

      <div className="topnav-left">
        <FaSearch className="icon-three" />
        <div className="topnav-link"><Link className='topnav-link-main' href="/admin">Home</Link></div>
        <div className="topnav-link"><Link className='topnav-link-main' href="/admin">Cetagories</Link></div>
        <div className="topnav-link"><Link className='topnav-link-main' href="/admin/resolution-center">Products</Link></div>
        <div className="topnav-link"><Link className='topnav-link-main' href="/admin/AddAdmin">Add Products</Link></div>
        <div className="topnav-link"><Link className='topnav-link-main' href="/admin/emails">Messages</Link></div>
      </div>

      <div className="topnav-right">
        <div className="topnavbar-icons">
          <Link href="/admin/messages">
            <div className="icon-with-badge-topnav">
              <HiOutlineChatBubbleLeftRight className="icon-topnav" />
              <span className="badge-topnav">2</span>
            </div>
          </Link>

          <Link href="/admin/notifications">
            <div className="icon-with-dot-topnav">
              <FiBell className="icon-topnav" />
              <span className="dot-topnav"></span>
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default TopNav;
