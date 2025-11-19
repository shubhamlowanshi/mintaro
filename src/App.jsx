import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./componetns/Navbar";
import Footer from "./componetns/Footer";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Contactus from "./pages/Contactus";
import Blog from "./pages/Blog";
import HomePage from "./pages/HomePage"; 
import Newcom from "./componetns/newcom";


function App() {
  return (
    <Router>
      {/* <Newcom/> */}
      {/* Top Strip */}
      <div
        style={{
          width: "auto",
          height: "42px",
          color: "#FFFFFF",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        <div style={{ paddingTop: "8px", position: "relative" }}>
          Visit Our Cellar Door - Book Now
        </div>
      </div>

  
      <Navbar />

   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
       <div className="newsletter-banner">
                    <div className="newsletter-overlay">
                        <div className="newsletter-text-content">
                            <h2 className="newsletter-title">Subscribe To The Newsletter</h2>
                            <p className="newsletter-description">
                                Be sure to subscribe to our newsletter to keep up to date
                                with our new releases events and member specials.
                            </p>
                        </div>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter Email here...." className="newsletter-input" />
                            <button type="submit" className="subscribe-button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
     
      <Footer />
    </Router>
  );
}

export default App;
