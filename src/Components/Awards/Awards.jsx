import React from "react";
import "./Awards.css";
import { images, data } from "../../Data";
import Subheading from "../Header/Subheading";
import AwardCard from "./AwardCard";
// import AwardCard from "./AwardCard";

const Awards = () => {
  return (
    <div className="awards" id="awards">
      <div className="award-info">
        <Subheading title="Awards and Recognitions" />
        <h1 className="header-text"> Our Awards</h1>
        <div className="award-items">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="award-img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Awards;
