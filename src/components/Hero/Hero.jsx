import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <>
    <div className="hero-image-container" style={ {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(./hero.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center 72%',
    height:"50vh",
    marginBottom:"5rem"
  }}>

    <div className="arrow">
    <i class="fa-solid fa-angle-left"></i>
    <i class="fa-solid fa-angle-right"></i>
    </div>
       <div className="hero-text">
        <h1>Good Morning, Anas Mehmood</h1>
        <div className="date">
          <p>Monday, April, 1, 2024</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default Hero
