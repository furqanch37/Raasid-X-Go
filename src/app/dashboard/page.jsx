// Dashboard.jsx
import React from 'react';
import './dashboard.css';
import Categories from './Categories';
import PopularProducts from './PopularProducts';
import LastOrders from './LastOrders';
import Wishlist from './Wishlist';
const categories = [
  { title: 'Fruits', image: '/assets/aloo_bhujia.png' },
  { title: 'Bread', image: '/assets/aloo_bhujia.png' },
  { title: 'Vegetable', image: '/assets/aloo_bhujia.png' },
  { title: 'Fish', image: '/assets/aloo_bhujia.png' },
  { title: 'Meat', image: '/assets/aloo_bhujia.png' },
  { title: 'Drinks', image: '/assets/aloo_bhujia.png' },
  { title: 'Sea Food', image: '/assets/aloo_bhujia.png' },
  { title: 'Ice cream', image: '/assets/aloo_bhujia.png' },
  { title: 'Juice', image: '/assets/aloo_bhujia.png' },
  { title: 'Jam', image: '/assets/aloo_bhujia.png' },
];


const products = [
  { name: 'Strawberry', price: 20.10, img: '/assets/aloo_bhujia.png' },
  { name: 'Strawberry', price: 20.10, img: '/assets/aloo_bhujia.png' },
  { name: 'Cabbage', price: 15.10, img: '/assets/aloo_bhujia.png' },
  { name: 'Brocoly', price: 25.10, img: '/assets/aloo_bhujia.png' },
  { name: 'Orenge', price: 12.10, img: '/assets/aloo_bhujia.png' },
  { name: 'Fresh Apple', price: 18.10, img: '/assets/aloo_bhujia.png' },
];

const lastOrders = [
  { name: 'Red Saffron', weight: '500 gm', quantity: 1, price: 150, img: '/assets/aloo_bhujia.png' },
  { name: 'Friesh Apple', weight: '2 kg', quantity: 1, price: 120, img: '/assets/aloo_bhujia.png' },
];

const wishlistedProducts = [
  { name: 'Strawberry', price: 20.10, img: '/assets/aloo_bhujia.png' },
  { name: 'Brocoly', price: 25.10, img: '/assets/aloo_bhujia.png' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <Categories categories={categories} />
      </div>

      <div className="dashboard-section">
        <PopularProducts products={products} />
      </div>

      <div className="dashboard-bottom-row">
        <div className="dashboard-half dashboard-last-orders">
          <h2 className="dashboard-title">Last Order</h2>
          <LastOrders orders={lastOrders} />
        </div>
        <div className="dashboard-half dashboard-wishlist-section">
          <h2 className="dashboard-title">My Wishlisted Products</h2>
          <Wishlist items={wishlistedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
