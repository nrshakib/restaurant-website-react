import React from "react";
import "./FindUs.css";
import { images } from "../../Data";
import Subheading from "../Header/Subheading";

const FindUs = () => {
  return (
    <div className="findUs" id="contact">
      <div className="wrapper-info">
        <Subheading title="Contact" />
        <h1 className="contact-heading" style={{ marginBottom: "2.5rem" }}>
          Find Us
        </h1>
        <div className="wrapper-content">
          <p className="address">79,Charles Street,Burmingham,UK</p>

          <p className="opening">Opening Hours</p>

          <p className="opening-time">Mon-Fri: 10.00 am - 9.00 pm</p>
          <p className="opening-time">Sat-Sun: 11.00 am - 10.00 pm</p>
        </div>
        <button className="custom-button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>
      <div className="wrapper-img">
        <img src={images.findus} alt="find-Us" />
      </div>
    </div>
  );
};

export default FindUs;
