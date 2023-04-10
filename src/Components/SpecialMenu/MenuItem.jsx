import React from "react";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="menuItem">
      <div className="menuItem-head">
        <div className="menuItem-name">
          <p className="item-title">{title}</p>
        </div>

        <div className="menuItem-dash"></div>

        <div className="menuItem-price">
          <p className="item-price">{price}</p>
        </div>
      </div>

      <div className="menuItem-sub">
        <p className="item-sub">{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
