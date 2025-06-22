import React from 'react';
import "./GoToSuppliers.css";

const GoToSuppliers = () => {
  return (
    <div className="suppliers-container">
      <div className="supplier-card orange-card">
        <img src="/assets/home/GoToSuppliers/one.png" alt="Juices" className="supplier-image" />
        <div className="supplier-content">
          <h3>Fresh Juices & Mineral Water from Raasid</h3>
          <p className="sale-text">Special Offer! 35% Off</p>
          <p className="supplier-link">GO TO SUPPLIERS →</p>
        </div>
      </div>

      <div className="supplier-card blue-card">
        <img src="/assets/home/GoToSuppliers/two.png" alt="Spices" className="supplier-image" />
        <div className="supplier-content">
          <h3>Pure & Blended Spices and Ready Meals</h3>
          <p className="sale-text">Exclusive! 25% Off</p>
          <p className="supplier-link">GO TO SUPPLIERS →</p>
        </div>
      </div>
    </div>
  );
};

export default GoToSuppliers;
