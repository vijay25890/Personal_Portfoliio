import React from "react";
import "../intro/intro.css";
import Me from "../../img/1645001680643__1_-removebg-preview.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Vijay More</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Fullstack Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develope single page applications for customers,
            specializing in creating stylish, modern websites and web services.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
