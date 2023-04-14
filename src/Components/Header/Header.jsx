import React from "react";
import { images } from "../../Data";
import Subheading from "./Subheading";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="wrapper">
        <Subheading title="Taste the New Flavour"  />
        <h1 className="header-h1">The Key to Fine Dining</h1>
        <p className="header-text" style={{ margin: "2rem 0" }}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          voluptatum blanditiis ut dolores accusantium, totam expedita sapiente
          suscipit culpa ducimus perferendis sit ipsa impedit nam incidunt
          beatae reiciendis, eligendi iste autem at eveniet. Perferendis eum
          totam aut dolore excepturi tempore quos ut, odit optio iusto omnis
          quaerat voluptates mollitia ipsum sit quia, commodi labore facilis
          doloribus animi iure distinctio facere.
        </p>
        <button type="button" className="header-button">
          Explore Menu
        </button>
      </div>

      <div>
        <img className="header-img" src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
