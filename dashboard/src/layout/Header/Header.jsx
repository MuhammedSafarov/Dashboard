import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <ul className="header-navigation-list">
        <li className="header-navigation-item">Dallas Office</li>
        <li className="header-navigation-item">Coppel Office</li>
        <li className="header-navigation-item">Los Angeles Office</li>
      </ul>
    </header>
  );
};

export default Header;
