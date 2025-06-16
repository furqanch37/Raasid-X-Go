import React from 'react';
import "./GoToSuppliers.css";

const GoToSuppliers = () => {
  return (
    <div className="suppliers-container">
      <div className="supplier-card orange-card">
        <img src="/assets/home/GoToSuppliers/one.png" alt="Juices" className="supplier-image" />
        <div className="supplier-content">
          <h3>Fresh Fruits Juice And All Cold Drinks Product</h3>
          <p className="sale-text">Sale! 35% Off</p>
          <p className="supplier-link">GO TO SUPPLIERS →</p>
        </div>
      </div>

      <div className="supplier-card blue-card">
        <img src="/assets/home/GoToSuppliers/two.png" alt="Vegetables" className="supplier-image" />
        <div className="supplier-content">
          <h3>Now Get Everyday Fresh Vegetables Items</h3>
          <p className="sale-text">Sale! 25% Off</p>
          <p className="supplier-link">GO TO SUPPLIERS →</p>
        </div>
      </div>
    </div>
  );
};

export default GoToSuppliers;
