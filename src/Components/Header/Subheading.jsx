import React from "react";
import { images } from "../../Data";
import "./Header.css";

const Subheading = ({ title }) => {
  return (
    <div className="sub-heading" style={{ marginBottom: "1rem" }}>
      <p className="sub-title">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon-img" />
    </div>
  );
};

export default Subheading;
