import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Unlock Your Potential with Expert-Led Courses</h1>
        <p className="subtitle">
          Discover thousands of courses taught by industry experts. Learn at
          your own pace and take your skills to the next level.
        </p>
        
        <div className="search">
          <input type="text" placeholder="Search for courses..." />
          <button className="search-button">Search</button>
        </div>
        
        <div className="buttons">
          <button className="browse-button">Browse Courses</button>
          <button className="learn-more-button">Learn More</button>
        </div>
        
        <div className="statistics">
          <div className="stats">
            <h2>50K+</h2>
            <p>Students</p>
          </div>
          <div className="stats">
            <h2>300+</h2>
            <p>Courses</p>
          </div>
          <div className="stats">
            <h2>99%</h2>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="image">
          <img src="src/assets/coursehero.png" alt="Course learning" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
