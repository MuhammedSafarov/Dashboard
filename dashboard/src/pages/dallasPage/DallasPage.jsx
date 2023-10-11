import React from "react";
import DallasBox from "../../components/DallasBox/DallasBox";
import Recommendation from "../../components/Recommendation/Recommendation";
import "./DallasPage.scss";

const DallasPage = () => {
  return (
    <div className="dallas-container">
      <Recommendation />
      <DallasBox />
    </div>
  );
};

export default DallasPage;
