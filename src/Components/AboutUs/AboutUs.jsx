import React from "react";
import { images } from "../../Data";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs" id="about">
      {/* <div className="aboutUs-overlay">
        <img src={images.G} alt="g letter" />
      </div> */}
      <div className="aboutUs-content">
        <div className="about-us">
          <h1 className="headText">About Us</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon-img" />
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            ipsum eveniet facilis praesentium officia suscipit laboriosam
            deserunt accusantium. Expedita, voluptatibus!
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>
        <div className="aboutUs-knife">
          <img src={images.knife} alt="about-knife" />
        </div>
        <div className="about-history">
          <h1 className="headText">Our History</h1>
          <img src={images.spoon} alt="about-spoon" className="spoon-img" />
          <p className="history-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a
            facere ratione tempora repellat porro, harum dicta optio deserunt,
            numquam vero eaque nam nostrum sunt? Omnis.
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
