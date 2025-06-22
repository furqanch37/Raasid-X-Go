'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './dashboard.css';
import Categories from './Categories';
import PopularProducts from './PopularProducts';
import LastOrders from './LastOrders';
import { baseUrl } from '@/app/const';

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

const Dashboard = () => {
  const [lastOrders, setLastOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?._id) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${baseUrl}/order/${user._id}`);
        const data = await res.json();

        if (data.success) {
          // Show only the last 5 orders (most recent first)
          const recentOrders = data.orders
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5);

          setLastOrders(recentOrders);
        }
      } catch (err) {
        console.error('❌ Failed to fetch user orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

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
          <h2 className="dashboard-title">Last Orders</h2>
          {loading ? (
            <p style={{ padding: '1rem' }}>Loading orders...</p>
          ) : lastOrders.length > 0 ? (
            <LastOrders orders={lastOrders} />
          ) : (
            <p style={{ padding: '1rem' }}>
              {user?._id ? 'No orders found yet.' : 'Please log in to view your orders.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
