import React from "react";
import "./HomePage.css";
import vedio from "../assets/homeVedio.mp4";
import maskgroup from "../assets/maskgroup.png";
import about1 from "../assets/about1.png";
import grapes from "../assets/grape.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.jpg";
import g2 from "../assets/g2.png";
import g3 from '../assets/g3.jpg';
import left from "../assets/left.jpg";
import dcase from "../assets/dcase.png";
import image1 from "../assets/ig1.jpg";
import image2 from "../assets/ig2.jpg";
import image3 from "../assets/ig3.jpg";
import image4 from "../assets/ig4.jpg";
import image5 from "../assets/ig5.jpg";
import redWineBottle from "../assets/new2.png";
import whiteWineBottle from "../assets/new3.png";
import winehouse from '../assets/winehouse.png';
import winery from '../assets/winery.png';
import winesale from '../assets/winesale.png';
import foodrink from '../assets/foodrink.jpg';
import newg from '../assets/newg.png';
import bootlebox from '../assets/bootlebox.jpg';
import client from '../assets/client.jpg';
const HomePage = () => {
    return (
        <>
            <section className="hero-section">
                
                <video className="hero-video" autoPlay muted loop playsInline>
                    <source src={vedio} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            
                <div className="hero-content">
                    <h1>WINE FOR EVERYONE</h1>
                    <p>Just Drink And Feel Yourself In Heaven</p>
                    <button>SHOP NOW</button>
                </div>

                <img src={maskgroup} alt="mask" className="mask-image" />
            </section>

            <section className="brand-section">
                <h2>MINTARO WINES</h2>
            </section>
            <section className="about-us-section">
                <div className="about-us-content-container">
                  
                    <div className="about-us-visuals">
                        
                        <div className="image-collage">
                            <img src={about1} alt="Bottles" className="image-main" />

                        </div>
                    </div>

                    
                    <div className="about-us-text">
                        <h2 className="about-us-heading">ABOUT US</h2>
                        <h3 className="about-us-subheading">A Boutique Winery With Family Tradition</h3>
                        <p className="about-us-paragraph">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className="about-us-paragraph">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        </p>
                        <button className="about-us-button">LEARN MORE ABOUT US</button>
                    </div>
                </div>
            </section>
            <section className="products-showcase-section">
                <h2 className="showcase-heading">THE MINTARO WINES</h2>
                <div className="product-cards-container">

                 
                    <div className="product-card card-llama-valley">
                        <div className="card-text-content">
                            <h3>MINTARO <br /> LLAMA VALLEY</h3>
                            <p>A young, well-structured wine, with plenty of signs of a well-produced wine at a good value. Medium-Bodied.</p>
                            <button className="shop-now-button">SHOP NOW</button>
                        </div>
                     
                        <img src={b1} alt="Mintaro Llama Valley Wine Bottle" className="bottle-image " />
                    </div>

                   
                    <div className="product-card card-mintaro-estate">
                      
                        <img src={b3} alt="Mintaro Estate Wine Bottle 1" className="bottle-image" />
                        <p className="card-title">MINTARO ESTATE</p>
                    </div>

                
                    <div className="product-card card-mintaro-estate gray-bg">
                       
                        <img src={b2} alt="Mintaro Estate Wine Bottle 2" className="bottle-image" />
                        <p className="card-title">MINTARO ESTATE</p>
                    </div>

                </div>
                <img src={grapes} alt="Grapes" className="grapes-visual" />

            </section>

            <section className="natural-products-section">
                <div className="natural-products-content-wrap">

                   
                    <div className="natural-products-left">
                        <div className="top-images-row">
                            
                            <img src={g3} alt="Grapes Close Up" className="grapes-close-up-image" />
                            <img src={left} alt="Vineyard View" className="vineyard-image" />
                        </div>

                        <div className="text-content-left">
                            <h2 className="natural-heading">GENUINE AND <br /> NATURAL PRODUCTS</h2>
                            <p className="natural-paragraph">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>

                      
                        <img src={g2} alt="Assorted Grapes" className="grapes-bottom-visual" />
                    </div>


                    <div className="natural-products-right">
                        <p className="natural-paragraph-right">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <button className="shop-now-button natural-button">SHOP NOW</button>
                        <h2 className="mintaro-vertical-text">MINTARO</h2>
                    </div>

                </div>
            </section>



            <section className="shop-mintaro-wines-section">
                <h2 className="shop-mintaro-heading">SHOP MINTARO WINES</h2>
                <div className="shop-wine-cards-container">

                   
                    <div className="shop-wine-card">
                      
                        <img src={b1} alt="Mintaro Llama Valley Red Blend" className="shop-wine-bottle-image" />
                        <h3 className="shop-wine-title">MINTARO LLAMA VALLEY <br /> RED BLEND</h3>
                        <button className="shop-now-button">SHOP NOW</button>
                    </div>

                    
                    <div className="shop-wine-card">
                     
                        <img src={dcase} alt="Mintaro Llama Valley White Blend Box" className="shop-wine-box-image" />
                        <h3 className="shop-wine-title">MINTARO LLAMA VALLEY <br /> WHITE BLEND</h3>
                        <button className="shop-now-button">SHOP NOW</button>
                    </div>

                   
                    <div className="shop-wine-card">
                    
                        <img src={b2} alt="Mintaro Estate Chardonnay Viognier" className="shop-wine-bottle-image" />
                        <h3 className="shop-wine-title">MINTARO ESTATE <br /> CHARDONNAY VIOGNIER</h3>
                        <button className="shop-now-button">SHOP NOW</button>
                    </div>

                </div>
                <a href='' className="view-all-link">
                    <span style={{ textDecoration: 'underline', color: 'black' }}>VIEW ALL</span>
                </a>
            </section>


            <section className="hero-and-icons-section">
             
                <div className="hero-banner">
                    <div className="hero-banner-content">
                   
                        <div className="hero-visuals">
                            <img src={redWineBottle} alt="Mintaro Red Wine" className="hero-bottle red-bottle" />
                            <img src={whiteWineBottle} alt="Mintaro White Wine" className="hero-bottle white-bottle" />
                            <img src={redWineBottle} alt="Wine Glass" className="hero-glass" />
                        </div>

                     
                        <div className="hero-text-cta">
                           
                            <img src={newg} alt="Decorative Grapes" className="decorative-grapes-top" />
                            <p className="hero-suggestion">Suggestion For You</p>
                            <h1 className="hero-main-title">Organic Winery</h1>
                            <p className="hero-subtitle">Find & Buy Premium Fine Wines Here!</p>
                            <button className="shop-now-button">SHOP NOW</button>
                        </div>

                       
                        <img src={grapes} alt="Decorative Grapes Bunch" className="decorative-grapes-bottom" />
                    </div>
                </div>

              
                <div className="icon-grid-section">
                    <div className="icon-grid-wrapper">
                        <div className="icon-item">
                            <img src={foodrink} alt="Food & Drink" className="icon-image" />
                            <p className="icon-label">FOOD & DRINK</p>
                        </div>
                        <div className="icon-item">
                            <img src={winery} alt="Winery" className="icon-image" />
                            <p className="icon-label">WINERY</p>
                        </div>
                        <div className="icon-item">
                            <img src={winehouse} alt="Mintaro Wines" className="icon-image" />
                            <p className="icon-label">Mintaro Wines</p>
                        </div>
                        <div className="icon-item">
                            <img src={winesale} alt="Wine House" className="icon-image" />
                            <p className="icon-label">WINE HOUSE</p>
                        </div>
                        <div className="icon-item">
                            <img src={winehouse} alt="Winesale" className="icon-image" />
                            <p className="icon-label">WINESALE</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="testimonial-section">
            
                <div className="grape-graphic left"></div>
                <div className="grape-graphic right"></div>

                <div className="testimonial-container">
                
                    <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>

                  
                    <div className="quote-icon">”</div>
                  
                    <p className="review-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>


                    <div className="client-info">

                        <img src={client} alt="Client Photo" className="client-photo" />
                        <p className="client-name">Mark Jefferson</p>
                    </div>

                
                    <button className="nav-arrow prev-arrow">
                        &lt;
                    </button>
                    <button className="nav-arrow next-arrow">
                        &gt;
                    </button>
                </div>
            </section>

            <section className="blog-section">
                {/* Section Title */}
                <h2 className="blog-section-title">OUR BLOGS</h2>

                {/* Single Blog Post Preview */}
                <div className="blog-post-card">
                    {/* Blog Image (Left Side) */}
                    <div className="blog-image-wrapper">
                        {/* Replace the src with your blog post image */}
                        <img src={bootlebox} alt="How To Make Handmade Wine" className="blog-image" />
                    </div>

                    {/* Blog Content (Right Side) */}
                    <div className="blog-content">
                        <h3 className="blog-post-title">How To Make Handmade Wine</h3>
                        <p className="blog-post-excerpt">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make.
                        </p>
                        {/* Call to Action Button */}
                        <a href="#" className="read-more-button">READ MORE</a>
                    </div>
                </div>

                {/* View All Link */}
                <div className="view-all-wrapper">
                    <a href="/all-blogs" className="view-all-link">VIEW ALL</a>
                </div>
            </section>      


            <section className="mintaro-content-section">

                <div className="instagram-section">
                    <h3 className="instagram-title">INSTAGRAM</h3>

                    <div className="instagram-grid">
                        <img src={image1} alt="Woman tasting wine" className="insta-image" />
                        <img src={image2} alt="Grape harvest on a tractor" className="insta-image" />
                        <img src={image3} alt="Woman working in vineyard" className="insta-image" />
                        <img src={image4} alt="Woman tasting wine in a suit" className="insta-image" />
                        <img src={image5} alt="Woman tasting wine at sunset" className="insta-image" />
                    </div>

                    <button className="follow-button">
                        <i className="fa-brands fa-instagram"></i> FOLLOW MINTAROWINES
                    </button>
                </div>
            </section>

        </>
    );
};

export default HomePage;
