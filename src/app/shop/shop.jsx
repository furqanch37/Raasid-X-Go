'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import './shop.css';

const products = [
  { name: "Chaat Masala", price: "22.00", image: "/assets/chaat_masala.png", oldPrice: "", sale: false },
  { name: "Cloves Powder", price: "30.00", image: "/assets/cloves_powder.png", oldPrice: "", sale: false },
  { name: "Zarda", price: "12.00", oldPrice: "$15.00", image: "/assets/zarda.png", sale: true },
  { name: "Nihari", price: "8.88", image: "/assets/nihari.png", oldPrice: "", sale: false },
  { name: "Bombay Biryani", price: "10.00", image: "/assets/bombay_biryani_masala.png", oldPrice: "", sale: false },
  { name: "Nihari", price: "8.88", image: "/assets/nihari.png", oldPrice: "", sale: false },
  { name: "Cloves Powder", price: "30.00", image: "/assets/cloves_powder.png", oldPrice: "", sale: false },
  { name: "Chaat Masala", price: "22.00", image: "/assets/chaat_masala.png", oldPrice: "", sale: false },
  { name: "Nihari", price: "8.88", image: "/assets/nihari.png", oldPrice: "", sale: false },
];

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
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

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
            <select>
              <option>SHOWING {startIndex + 1}–{startIndex + currentProducts.length} OF {products.length} RESULTS</option>
            </select>
            <select>
              <option>DEFAULT SORTING</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div key={index} className="product-card">
              
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="product-price">
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span>{product.price}PKR</span>
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
