import React from 'react';
import "./AboutImgSec.css";
import { FaPlay } from "react-icons/fa";

const AboutImgSec = () => {
  return (
    <div className="about-img-wrapper">
      <div className="image-container">
        <img
          src="/assets/home/desc.jpg"
          alt="Grocery Background"
          className="background-image"
        />
        <div className="play-button">
          <FaPlay />
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h2>25+</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat-box">
          <h2>5k+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h2>15+</h2>
          <p>Award Achieved</p>
        </div>
        <div className="stat-box">
          <h2>80+</h2>
          <p>Product Varities</p>
        </div>
      </div>
    </div>
  );
};

export default AboutImgSec;
