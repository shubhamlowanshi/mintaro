// Footer.js
import React from 'react';
import './Footer.css'; // Don't forget to create this CSS file
import logo from '../assets/logo.png'; 
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        {/* Categories Section */}
        <div className="footer-section categories-section">
          <h4 className="section-titles">CATEGORIES</h4>
          <ul>
            <li><a href="/all-products">All Product</a></li>
            <li><a href="/red-wine">Red Wine</a></li>
            <li><a href="/white-wine">White Wine</a></li>
            <li><a href="/sparkling-wines">Sparkling Wines</a></li>
            <li><a href="/box-sets">Box Sets</a></li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div className="footer-section company-info-section">
          <img src={logo} alt="Mintaro Wines Logo" className="company-logo" />
          <div style={{borderBottom:'1px dashed #727272'}}></div>
         
          <p className="address-label">ADDRESS:</p>
          <p className="address-text">Leasingham Road, Mintaro, SA</p>
          <p className="contact-email"><a href="mailto:sales@mintarowines.com.au">sales@mintarowines.com.au</a></p>
          <p className="contact-phone"><a href="tel:0888439150">(08) 88439150</a></p>
          <div style={{borderBottom:'1px dashed #727272'}}></div>

          <p className="stay-in-touch-label">STAY IN TOUCH :</p>
          <div className="social-links">
            {/* Placeholder for social media icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            {/* You'll need to link Font Awesome or similar icon library for these */}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links-section">
          <h4 className="section-titles">QUICK LINKS</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/red-wine">Red Wine</a></li>
            <li><a href="/white-wine">White Wine</a></li>
            <li><a href="/sparkling-wines">Sparkling Wines</a></li>
            <li><a href="/box-sets">Box Sets</a></li> {/* Assuming these are example quick links */}
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Section */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          © 2024. Mintarowines. Designed By Mindpath. All Rights Reserved.
        </p>
        <div className="legal-links">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;