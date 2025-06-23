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
             <li><Link href="/home">Home</Link></li>
  <li><Link href="/about">About</Link></li>
  <li><Link href="/shop">Shop</Link></li>
  <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* With Links */}
        <div className="footer-column">
          <h3>CETAGORIES</h3>
          <ul>
            <li><Link href="#">Berevlgies</Link></li>
            <li><Link href="#">Spices</Link></li>
            <li><Link href="#">Fruits Preserves</Link></li>
            <li><Link href="#">One Day Meals</Link></li>
            <li><Link href="#">Ready to Eat</Link></li>
            <li><Link href="#">Energy Bars</Link></li>
            <li><Link href="#">MRE's</Link></li>
            <li><Link href="#">Food</Link></li>
            <li><Link href="#">Water</Link></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="footer-column">
          <h3>CONTACT DETAILS</h3>
          <ul>
            <li><Link href="#">Rawat Technology Park, Islamabad Pakistan</Link></li>
            <li className="numbers"><Link href="#">+92 370 2333125</Link></li>
            <li><Link href="#">info@raasid.com</Link></li>
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
        <div className="logo-3">
<img
  src="/RaasidLogo.svg"
  alt="Shoppable Grocery Store"
  style={{ width: "50%", height: 'auto' }}
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
