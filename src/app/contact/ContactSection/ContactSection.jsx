'use client';
import React, { useState } from 'react';
import './ContactSection.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaBehance } from 'react-icons/fa';
import { baseUrl } from '@/app/const';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(`${baseUrl}/inquiry/submitinquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to submit inquiry');
      }

      const data = await res.json();
      if (data.success) {
        setSuccess('Your inquiry has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      } else {
        setError('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-left">
        <h2>Contact & Connect <br />with Raasid</h2>
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or partnership inquiries,
          feel free to reach out. At Raasid, we’re committed to delivering excellence in every interaction.
        </p>

        <p className="social-label">Follow us on social media :</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaWhatsapp />
        </div>

        <div className="map-container">
         <div className="map-container">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6642.733224474369!2d71.9888661!3d33.9961758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ded30309a9590b%3A0x1e9981a72f6446f9!2sASC%20Centre!5e0!3m2!1sen!2s!4v1719833894344!5m2!1sen!2s"
  title="MRE Project Location"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

</div>

        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Your phone" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Your message (optional)" rows="5" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'SUBMIT'}</button>

          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
