import React from "react";
import Header from "../../components/Header/Header";
import DallasPage from "../dallasPage/DallasPage";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <DallasPage />
    </div>
  );
};

export default HomePage;
