import React from "react";
import Header from "../../layout/Header/Header";
import "./HomePage.scss";
import DallasBox from "../../components/DallasBox/DallasBox";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <DallasBox />
    </div>
  );
};

export default HomePage;
