import React from "react";
import "./Chef.css";
import { images } from "../../Data";
import Subheading from "../Header/Subheading";

const Chef = () => {
  return (
    <div className="chef" id="chef">
      <div className="chef-img">
        <img src={images.chef} alt="chef" />
      </div>
      <div>
        <div className="chef-info">
          <Subheading title="Chef's World" className="sub-title" />
          <h1 className="chef-header">What We Believe In</h1>
        </div>
        <div className="chef-content">
          <div className="chef-content-quote">
            <img src={images.quote} alt="quote" />
            <p className="chef-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            </p>
          </div>
          <p className="chef-text-quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum officiis qui aliquid voluptatum. Culpa voluptates magnam
          </p>
        </div>
        <div className="chef-sign">
          <p>Kevin Luo</p>
          <p> Chef & Founder</p>
          <img src={images.sign} alt="signature" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
