import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <ul className="header-navigation-list">
        <Link className="nav-link" to="/">
          <li className="header-navigation-item">Dallas Office</li>
        </Link>
        <Link className="nav-link" to="/coopel-office">
          <li className="header-navigation-item">Coppel Office</li>
        </Link>
        <Link className="nav-link" to="/losangeles-office">
          <li className="header-navigation-item">Los Angeles Office</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
