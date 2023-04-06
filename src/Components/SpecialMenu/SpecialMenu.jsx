import React from "react";
import "./SpecialMenu.css";
import { images, data } from "../../Data";
import Subheading from "../Header/Subheading";
import MenuItem from "./MenuItem";

const SpecialMenu = () => {
  return (
    <div className="specialMenu" id="menu">
      <div className="specialMenu-title">
        <Subheading title="Menu that fits Your Palatte." />
        <h1 className="specialHeadText">Today's Special</h1>
      </div>

      <div className="specialMenu-menu">
        <div className="specialMenu-juice">
          <p className="menu-heading">Juice</p>
          <div className="menu-items">
            {data.juice.map((juice, index) => (
              <MenuItem
                title={juice.title}
                price={juice.price}
                tags={juice.tags}
              />
            ))}
          </div>
        </div>

        <div className="menu-img">
          <img src={images.menu} alt="menu-img" />
        </div>

        <div className="specialMenu-coctails">
          <p className="menu-heading">Coctails</p>
          <div className="menu-items">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                title={cocktails.title}
                price={cocktails.price}
                tags={cocktails.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <button type="button" className="custom-button">
        View More
      </button>
    </div>
  );
};

export default SpecialMenu;
