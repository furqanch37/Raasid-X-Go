'use client';
import React from 'react';
import './ContactInfo.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen, FaRegClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-card">
        <div className="info-1">
        <div className="icon"><FaMapMarkerAlt /></div>
        <h3>Address</h3>
        </div>
        <p className="subtitle">Visit us at :</p>
        <p>Rawat Technology Park</p>
        <p>G04, Ground Floor</p>
      </div>

      <div className="contact-info-card">
        <div className="info-1">
        <div className="icon"><FaPhoneAlt /></div>
        <h3>24/7 Service</h3>
        </div>
        <p className="subtitle">Call us on :</p>
        <p>Tel : +81-245-54896</p>
        <p>Mob : +81-125-87965</p>
      </div>

      <div className="contact-info-card">
         <div className="info-1">
        <div className="icon"><FaEnvelopeOpen /></div>
        <h3>Drop A Line</h3>
        </div>
        <p className="subtitle">Mail address :</p>
        <p>info@domain.com</p>
        <p>domain@company.com</p>
      </div>

      <div className="contact-info-card">
         <div className="info-1">
        <div className="icon"><FaRegClock /></div>
        <h3>Office Hours</h3>
        </div>
        <p className="subtitle">Opening Time :</p>
        <p>Mon – Fri : 9am – 6pm</p>
        <p>Sunday (Closed)</p>
      </div>
    </section>
  );
};

export default ContactInfo;
