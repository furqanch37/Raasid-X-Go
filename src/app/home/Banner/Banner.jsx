import React from "react";
import "./Banner.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <p className="discount-text">RAASID PROMISE</p>
        <h1 className="banner-heading">
          Authentic Taste, <br />
          Natural Ingredients <br />
          Crafted for You
        </h1>
        <p className="banner-subtext">
          Enjoy premium ready-to-eat meals, juices, spices & more – delivered nationwide.
        </p>
        <Link href="/shop">
          <button className="shop-btn">SHOP NOW →</button>
        </Link>
      </div>
      <div className="banner-image">
        <img src="/assets/home/banner/banner-img.png" alt="Raasid Food Product Display" />
      </div>
    </div>
  );
};

export default Banner;
