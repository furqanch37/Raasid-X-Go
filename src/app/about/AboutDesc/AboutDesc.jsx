import React from 'react';
import "./AboutDesc.css";
import { FaDotCircle } from "react-icons/fa";

const AboutDesc = () => {
  return (
    <div className="about-desc-container">
      <div className="about-title">
        <h1>How We Became <br /> Best Among Others <br /> In The Online Market ?</h1>
      </div>
      <div className="about-text">
        <p>
          Vivamus ex, pellentesque, ratione! <br />
          Consequat dolor, nihil convallis ligula. Cum maxime vivamus iaculis officia amet, <br />
          inventore, possimus, illo, morbi repellat nostrud sodales cras facilis, facilisi maxime vivamus iaculi.
        </p>
      </div>
      <div className="about-points">
        <ul>
          <li><FaDotCircle className="dot-icon" /> Irure auctor magnis parturient quo.</li>
          <li><FaDotCircle className="dot-icon" /> Dolor ducimus imperdiet semper.</li>
          <li><FaDotCircle className="dot-icon" /> Magna nunc repellendus at nec.</li>
          <li><FaDotCircle className="dot-icon" /> Non maecenas cupidatat porta rem.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDesc;
