import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <p className="discount-text">SPECIAL DISCOUNT</p>
        <h1 className="banner-heading">
          Fresh And Healthy <br />
          Veggies Organic <br />
          Grocery Store
        </h1>
        <p className="banner-subtext">
          Take Note 20% Off For All Grocery Products
        </p>
        <button className="shop-btn">SHOP NOW →</button>
      </div>
      <div className="banner-image">
        <img src="/assets/home/banner/banner-img.png" alt="Person with basket" />
      </div>
    </div>
  );
};

export default Banner;
