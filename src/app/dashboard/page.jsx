'use client';

import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Categories from './Categories';
import PopularProducts from './PopularProducts';
import LastOrders from './LastOrders';
import { baseUrl } from '@/app/const';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const lastOrders = [
    { name: 'Red Saffron', weight: '500 gm', quantity: 1, price: 150, img: '/assets/aloo_bhujia.png' },
    { name: 'Fresh Apple', weight: '2 kg', quantity: 1, price: 120, img: '/assets/aloo_bhujia.png' },
  ];

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/category`);
        const data = await res.json();
        if (data.success) {
          setCategories(
            data.categories.map((cat, i) => ({
              title: cat.categoryName,
              image: `/assets/image${(i % 6) + 3}.png`,
              bg: ['#e6e9fb','#e1f1dc','#fff6db','#dbf8ef','#e1f1dc','#fbeaea'][i%6],
            }))
          );
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/products/all`);
        const data = await res.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

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
      </div>
    </div>
  );
};

export default Dashboard;
