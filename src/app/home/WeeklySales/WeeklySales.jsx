'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/app/redux/features/cartSlice';
import "./sales.css";
import { baseUrl } from '@/app/const';

export default function WeeklySales() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    router.push('/cart');
  };

  return (
    <section className="weekly-wrapper">
      <div className="weekly-header">
        <h2 className="weekly-title">Weekly Best Sales</h2>
        <a href="/shop" className="view-more">VIEW MORE →</a>
      </div>
      <div className="weekly-grid">
        {products.map((item, idx) => (
          <div key={item._id || idx} className="weekly-card">
            <Link href={`/productdetails?productId=${item._id}`}>
              <div className="weekly-img-box">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="weekly-img"
                />
              </div>
              <h3 className="weekly-name">{item.name}</h3>
              <p className="weekly-price numbers">{item.price} PKR</p>
            </Link>
            <button className="add-cart" onClick={() => handleAddToCart(item)}>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
