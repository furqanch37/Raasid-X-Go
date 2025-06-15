'use client';
import React from 'react';
import './ContactSection.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaBehance } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <h2>Contact And Get In <br />Reach Us !</h2>
        <p>
          Vivamus ex, pellentesque, ratione! Consequat dolor, nihil convallis ligula.
          Cum maxime vivamus iaculis officia amet, inventore, possimus, illo, morbi
          repellat nostrud sodales cras facilis, facilisi maxime vivam.
        </p>

        <p className="social-label">Follow us on social media :</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaWhatsapp />
        </div>

        <div className="map-container">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10601.41597216204!2d73.195094!3d33.4913652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff16f1be5b4d7%3A0xd2724b0b85ca3ae4!2sRawat%20Technology%20Park!5e0!3m2!1sen!2s!4v1718371456762!5m2!1sen!2s"
  loading="lazy"
  allowFullScreen=""
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your message (optional)" rows="5"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
