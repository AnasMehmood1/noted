import React from 'react';
import "./Hero.css";
import Tips from '../Tips/Tips';

const Hero = () => {
  // Retrieve the user's name from localStorage
  const name = localStorage.getItem('name') || 'User'; // Fallback to 'User' if not found

  // Function to get the current greeting based on the time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Function to get formatted date
  const getFormattedDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <>
      <div className="hero-image-container" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(./hero.jpg)',
        backgroundSize: "cover",
        backgroundPosition: 'center 72%',
        height: "50vh",
      }}>
        <div className="arrow">
          <i className="fa-solid fa-angle-left"></i>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="hero-text">
          <h1>{`${getGreeting()}, ${name}`}</h1>
          <div className="date">
            <p>{getFormattedDate()}</p>
          </div>
        </div>
      </div>
      <Tips />
    </>
  )
}

export default Hero;
