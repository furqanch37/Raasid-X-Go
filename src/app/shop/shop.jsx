'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import './shop.css';
import { baseUrl } from '@/app/const'; // Make sure path is correct

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className="page-btn arrow-btn"
          onClick={() => onPageChange(currentPage + 1)}
        >
          →
        </button>
      )}
    </div>
  );
};

const Shop = () => {
  const itemsPerPage = 12;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/products/all`);
        const data = await res.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="stylesheet" href="/css/shop.css" />
      </Head>

      <div className="shop-container">
        <div className="shop-header">
          <h2>Shop</h2>
          <div className="shop-filters">
            <select disabled>
              <option>SHOWING {startIndex + 1}–{startIndex + currentProducts.length} OF {products.length} RESULTS</option>
            </select>
            <select>
              <option>DEFAULT SORTING</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div key={product._id || index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="product-price">
                {/* You can use oldPrice logic if your real data includes it */}
                <span>{product.price} PKR</span>
              </div>
              <button className="add-to-cart">ADD TO CART</button>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Shop;
