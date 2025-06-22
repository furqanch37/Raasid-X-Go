'use client';
import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PopularProducts = ({ products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -250 : 250,
        behavior: 'smooth',
      });
    }
  };

  return (
    <><div className="dashboard-products-header">
          <h2 className="dashboard-title">Popular Products</h2>
         <div className='flexed-div'> <a href="#" className="dashboard-view-more">View More</a>
             <div className="categories-controls">
          <button onClick={() => scroll('left')} className="scroll-btn">
            <FiChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="scroll-btn">
            <FiChevronRight size={20} />
          </button>
        </div></div>
     
        </div>
        
    <div className="products-wrapper">
      <div className="dashboard-products" ref={scrollRef}>
        {products.map((prod, i) => (
          <div key={i} className="dashboard-product-card">
            <img src={prod.img} alt={prod.name} className="dashboard-product-img" />
            <h4 className="dashboard-product-name">{prod.name}</h4>
            <p className="dashboard-product-desc">Lorem ipsum dolor sit amet,</p>
            <div className="dashboard-price-add">
              <span className="dashboard-product-price numbers">
                {prod.price.toFixed(2)}PKR
              </span>
              <button className="dashboard-add-btn">+</button>
            </div>
            <button className="dashboard-wishlist-btn">🤍</button>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default PopularProducts;
