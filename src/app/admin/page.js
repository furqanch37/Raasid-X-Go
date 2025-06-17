'use client';
import AdminHomePage from "./AdminHome/page";
import AdminNav from "./AdminNav/page";       // Sidebar
import TopNav from "./AdminNav/TopNav/TopNav"; // Navbar

import './admin.css';

export default function AdminPage() {
  return (
    <div className="admin-layout">
      <div className="top-nav">
        <TopNav />
      </div>
      <div className="main-layout">
        <div className="sidebar">
          <AdminNav />
        </div>
        <div className="admin-content">
          <AdminHomePage />
        </div>
      </div>
    </div>
  );
}
