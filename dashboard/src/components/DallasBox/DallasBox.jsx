import React from "react";
import "./DallasBox.scss";

const DallasBox = () => {
  return (
    <div className="dallas-box">
      <div className="box-header">
        <h3>Dallas Office</h3>
        <button className="detail-btn">View details</button>
      </div>
      <div className="vaccine-info">
        <p>
          <b>40</b> shared desks + <b>39</b> private offices
        </p>
        <p>
          Maximum capacity: <b>96 people</b>
        </p>
      </div>
      
    </div>
  );
};

export default DallasBox;
