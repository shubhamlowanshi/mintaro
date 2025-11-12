import React from 'react'
import './Shop.css'
import shopq from '../assets/shop1.jpg'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.jpg'
import discount from '../assets/discount.png'
import { useState } from 'react'
const categories = [
  { name: "All Products", count: 8 },
  { name: "Red Wines", count: 4 },
  { name: "White Wines", count: 2 },
  { name: "Sparkling Wines", count: 1 },
  { name: "Box Sets", count: 1 },
];

const specialties = ["Natural", "Alcohol Free", "Gluten Free", "Low Sodium"];

const products = [
  { name: "LECKIE WINDOW - RESERVE CABERNET SAUVIGNON", price: 40.00, image: b1 },
  { name: "MINTARO PREMIUM SHIRAZ", price: 40.00, image: b2 },
  { name: "ANASTASIAS SPARKLING CABERNET SHIRAZ NV", price: 40.00, image: b3 },
  { name: "FLYING DOCTOR SHIRAZ", price: 40.00, image: b1 },
  { name: "BELLES FEMMES BOX SET", price: 350.00, image: b2 },
  { name: "ANASTASIAS SPARKLING CABERNET SHIRAZ NV", price: 350.00, image: b3 },
  { name: "FLYING DOCTOR SHIRAZ", price: 40.00, image: b1 },
  { name: "BELLES FEMMES BOX SET", price: 350.00, image: b2 },
  { name: "ANASTASIAS SPARKLING CABERNET SHIRAZ NV", price: 350.00, image: b3 },
];

const Shop = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(null);
  const [isGridView, setIsGridView] = useState(true);


  const bestSellerAdUrl = { discount };

  const handleSpecialtyClick = (specialty) => {
    setActiveSpecialty(current => current === specialty ? null : specialty);
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/D0D0D0/333333?text=Wine"; }}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="product-button">SHOP NOW</button>
    </div>
  );
  return (
    <>

      <div
        className="banner"
        style={{

          backgroundImage: `url(${shopq})`,
        }}
      >

        <div className="banner-overlay"></div>


        <h1 className="banner-heading">
          products
        </h1>
      </div>

      <div className="shop-page">
  


        <div className="shop-container">
          <div className="main-content-grid">

            
            <aside className="sidebar">

            
              <div className="widget">
                <h2 className="widget-title">CATEGORY</h2>
                <ul className="category-list">
                  {categories.map((cat) => (
                    <li key={cat.name} className="category-item">
                      <span>{cat.name}</span>
                      <span style={{ color: '#aaa' }}>+</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget specialty-widget">
                <div className="specialty-header">
                  <h2>SHOP BY SPECIALTY</h2>
                </div>
                <div className="specialty-grid">
                  {specialties.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => handleSpecialtyClick(spec)}
                      className={`specialty-button ${activeSpecialty === spec ? 'active' : ''}`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              <div className="widget bestseller-widget">
                <div className="bestseller-header">
                  <h2>BEST SELLERS</h2>
                </div>
                <div className="ad-container" style={{ backgroundImage: `url(${discount})` }}>
                  <div className="ad-overlay"></div>
                  <div className="ad-content">
                    <p style={{ fontSize: '0.875rem' }}>Case Specials</p>
                    <p className="ad-title">all products</p>
                    <p className="ad-subtitle">20% off</p>
                    <button className="ad-button">Shop Now</button>
                  </div>
                </div>
              </div>
            </aside>
            <main className="product-area">

            
              <div className="product-sort-bar">
               
                <div className="sort-group">
                 
                  <span style={{ color: 'var(--text-light)' }}>Sort by:</span>
                  <select className="sort-select">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>

                
                <div className="view-mode-icons">
               
                  <svg onClick={() => setIsGridView(true)} className={isGridView ? 'active-icon' : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>

                 
                  <svg onClick={() => setIsGridView(false)} className={!isGridView ? 'active-icon' : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                </div>
              </div>

            
              <div className="product-grid">
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>

            </main>
          </div>
        </div>
      </div>

    </>
  )
}

export default Shop