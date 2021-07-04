import React from "react";
import "./Header.css";
import headerImage from "./headerpicture.svg";

const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        src={headerImage}
        className={`head-image ${
          headerExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
        alt="headimage"
      />
      <h1
        className={`head-text ${
          headerExpanded ? "head-text-expanded" : "head-text-contracted"
        }`}
      >
        {headTitle}
      </h1>
    </div>
  );
};

export default Header;
