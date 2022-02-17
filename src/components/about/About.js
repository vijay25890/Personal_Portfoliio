import React from "react";
import "../../components/about/about.css";
import img from "../../img/mernpic-removebg-preview.png";

const About = () => {
  return (
    <div className="h2">
      <div className="title1">
        <h4 className="t">MY PREFERED STACK AND LANGUAGES </h4>
      </div>
      <div style={{ textAlign: "center" }}>
        <img alt="hh" src={img} />
      </div>
      <div className="head">
        <div className="language">
          <div className="left">
            <div className="c1">
              <h5 className="cText1">C Programming</h5>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="c1">
              <h5 className="cText1">C++ Programming</h5>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="head">
        <div className="language">
          <div className="left">
            <div className="c1">
              <h5 className="cText1">Java Programming</h5>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="c1">
              <h5 className="cText1">Mysql Database</h5>
              <div className="cmain1">
                <div className="CDiv1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="dd">
          <div className="c1">
            <h5 className="cText1">Data Structure And Algorithms</h5>
            <div className="cmain1">
              <div className="CDiv1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
