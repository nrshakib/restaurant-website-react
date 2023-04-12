import React from "react";
import "./Awards.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="award-card">
      <img className="award-card-img" src={imgUrl} alt="award" />
      <div className="award-card-content">
        <p className="award-title" style={{ color: "white" }}>
          {title}
        </p>
        <p className="award-subtitle" style={{ color: "yellow" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AwardCard;
