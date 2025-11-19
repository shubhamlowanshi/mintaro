import React from 'react'
import contactlogo from '../assets/contactlogo.jpg'
import { FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import './ContactUs.css'
const Contactus = () => {
  return (
    <>
      <div
            className="banner"
            style={{
    
              backgroundImage: `url(${contactlogo})`,
            }}
          >
    
            <div className="banner-overlay"></div>
    
    
            <h1 className="banner-heading">
             Contact us
            </h1>
          </div>

           <div className="contact-container">
      <h2 className="contact-title">Get In Touch With Us</h2>
      <p className="contact-subtitle">
        If you would like to get in contact with us, you have a number of options<br/> you can call or mail to below option,
        our team will support you as soon as possible.
      </p>

      <div className="contact-wrapper">
       
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Phone" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p><strong>Phone:</strong> +(08) 88439150</p>
          </div>
          <div className="info-item">
            <FaFax className="icon" />
            <p><strong>Fax:</strong> (08) 88439050</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p><strong>Email:</strong> sales@mintarowines.com.au</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p><strong>Office Address:</strong> Leasingham Road, Mintaro, SA</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p><strong>Postal Address:</strong> PO Box 47 Mintaro 5415</p>
          </div>
          <div className="info-item">
            <FaClock className="icon" />
            <p><strong>Working Hours:</strong> Maris – 0414 314 084 (All Hours)</p>
          </div>

          <div className="social-links">
            <span>Follow Us:</span>
            <div className="icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
          
    </>
  )
}

export default Contactus