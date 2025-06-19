'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import "./sales.css";
import { baseUrl } from '@/app/const'; // Adjust if path differs

export default function WeeklySales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/products/all`);
        const data = await res.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="weekly-wrapper">
      <div className="weekly-header">
        <h2 className="weekly-title">Weekly Best Sales</h2>
        <a href="/shop" className="view-more">VIEW MORE →</a>
      </div>
      <div className="weekly-grid">
        {products.map((item, idx) => (
          <div className="weekly-card" key={item._id || idx}>
            <div className="weekly-img-box">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="weekly-img"
              />
            </div>
            <h3 className="weekly-name">{item.name}</h3>
            <p className="weekly-price">{item.price} PKR</p>
          </div>
        ))}
      </div>
    </section>
  );
}
