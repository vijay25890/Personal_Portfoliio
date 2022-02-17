import React from "react";
import "../../components/about/about.css";
import img from "../../img/mernpic-removebg-preview.png";

const About = () => {
  return (
    <div className="h2">
      <div className="title">
        <h4>MY PREFERED STACK</h4>
      </div>
      <div style={{ textAlign: "center" }}>
        <img src={img} />
      </div>
      <div className="main">
        {/* <div className="c">
        <h6 className="cText">C Programming</h6>
        <div className="cmain">
          <div className="CDiv"></div>
        </div>
      </div> */}
        <div className="lang">
          <div className="left">
            <div className="c1">
              <h6 className="cText1">C Programming</h6>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
            <div className="c1">
              <h6 className="cText1">C Programming</h6>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="c1">
              <h6 className="cText1">C Programming</h6>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
            <div className="c1">
              <h6 className="cText1">C Programming</h6>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
