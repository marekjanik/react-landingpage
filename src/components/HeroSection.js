import React from "react";
import { Button } from "./Button";
import Socials from "./Socials/Socials";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero-image" src="images/hero.jpg" alt="hero" />
      <h1 className="hero-title">WEB DESIGN</h1>
      <p className="hero-text">What is your vision?</p>
      <div className="hero-btn">
        <Button
          className="btn-mobile"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
      <div className="hero-socials">
        <Socials></Socials>
      </div>
    </div>
  );
}

export default HeroSection;
