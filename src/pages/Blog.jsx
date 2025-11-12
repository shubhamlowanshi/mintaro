import React from 'react'
import './Blog.css'
import blog from '../assets/blog.png';
import v1 from '../assets/v1.png';
import v2 from '../assets/v2.png';
import v3 from '../assets/v3.png';
import v4 from '../assets/v4.png';
import v5 from '../assets/v5.jpg';
import v6 from '../assets/v6.png';
import v7 from '../assets/v7.png';
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  const wineData = [
  { id: 1, img: v1, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 2, img: v2, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 3, img: v3, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 4, img: v4, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 5, img: v5, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 6, img: v6, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 7, img: v7, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 8, img: b1, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 9, img: b2, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 10, img: b3, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 11, img:v1, title: "LOREM IPSUM DOLOR SIT AME" },
  { id: 12, img: v2, title: "LOREM IPSUM DOLOR SIT AME" },
];

  return (
    <>
      <div
        className="banner"
        style={{

          backgroundImage: `url(${blog})`,
        }}
      >

        <div className="banner-overlay"></div>


        <h1 className="banner-heading">
         Blog
        </h1>
      </div>

       <div className="wine-section">
      <div className="wine-grid">
        {wineData.map((item) => (
          <div className="wine-card" key={item.id}>
            <img src={item.img} alt={item.title} className="wine-image" />
            <div className="wine-content">
              <h3>{item.title}</h3>
              <p>
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry.
              </p>
              <a href="#" className="read-more">
                Read More <FaArrowRightLong className="arrow-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <button className="view-more-btn">View More</button>
      </div>
    </div>
    </>
  )
}

export default Blog