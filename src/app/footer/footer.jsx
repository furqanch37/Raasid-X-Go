// components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="main-container">
      <div className="footer-container">
        {/* About Company */}
        <div className="footer-column">
          <h3>ABOUT RAASID</h3>
         <p>
 RAASID blends tradition and innovation to deliver premium, ready-to-enjoy food products that celebrate quality, connection, and flavor.
</p>

          

        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>EXPLORE</h3>
          <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* With Links */}
        <div className="footer-column">
          <h3>EXPLORE</h3>
          <ul>
            <li><Link href="#">Our Story</Link></li>
            <li><Link href="#">Job / Career</Link></li>
            <li><Link href="#">Store Locator</Link></li>
            <li><Link href="#">Contacts Us</Link></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="footer-column">
          <h3>CUSTOMER SERVICES</h3>
          <ul>
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Terms Of Use</Link></li>
            <li><Link href="#">Deliveries & Returns</Link></li>
            <li><Link href="#">Gift Cards</Link></li>
          </ul>
        </div>
      </div>
</div>
      <div className="footer-bottom">
        <div className="footer-socials">
  <a href="#" className="icon" aria-label="Facebook">
    <FaFacebookF />
  </a>
  <a href="#" className="icon" aria-label="Twitter">
    <FaTwitter />
  </a>
  <a href="#" className="icon" aria-label="Instagram">
    <FaInstagram />
  </a>
  <a href="#" className="icon" aria-label="YouTube">
    <FaYoutube />
  </a>
</div>
        <div className="logo">
<img
  src="/RaasidLogo.svg"
  alt="Shoppable Grocery Store"
  style={{ width: "150px", height: "50px" }}
/>

</div>

        <div className="copyright">
          Copyright © 2025 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
