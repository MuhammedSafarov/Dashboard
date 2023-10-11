import React from "react";
import "./Recommendation.scss";
import { Progress, Space } from "antd";
import RangeSlider from "../Slider/RangeSlider";
import DropDownBtn from "../DropDownBtn/DropDownBtn";

const Recommendation = () => {
  return (
    <div className="recommendation-container">
      <h3>Forecast & recommandations</h3>
      <p className="occupancy heading">Currently recommended occupancy :</p>
      <div className="percentage">
        <p className="percent">39%</p>
        <p className="people-count">37 people</p>
      </div>
      <Progress percent={39} showInfo={false} size="small" />
      <div className="target-container">
        <p className="heading target">Occupancy targets:</p>
        <div className="count">
          <div id="number">75</div>
          <div className="dropdown">
            <DropDownBtn />
          </div>
        </div>
      </div>
      <div className="weeks">
        <div className="week">4 weeks</div>
        <div className="week">8 weeks</div>
        <div className="week">12 weeks</div>
      </div>
      <Space className="circle-div" wrap>
        <Progress
          className="percentage-circle"
          type="circle"
          percent={80}
          strokeColor={"orange"}
        />
        <Progress
          className="percentage-circle"
          type="circle"
          percent={88}
          strokeColor={"green"}
        />
        <Progress
          className="percentage-circle"
          type="circle"
          percent={95}
          strokeColor={"green"}
        />
      </Space>
      <div className=" vaccination heading">
        Maximum recommendedoccupancy for vaccination rate and mask compliance
        rate:
      </div>
      <div className="vaccine info">
        <p className="info">Employees Vaccinated:</p>
        <div className="vaccine-percent">
          <div className="percent">38%</div>
          <div className="percent">(34 people)</div>
        </div>
      </div>
      <RangeSlider />
      <p id="current-rate">Current vaccination rate: 10% (9 people)</p>
      <div className="vaccine info">
        <p className="info">Employees using masks:</p>
        <div className="vaccine-percent">
          <div className="percent">30%</div>
          <div className="percent">(26 people)</div>
        </div>
      </div>
      <RangeSlider />
      <div className="summary">
        Current recommended occupancy would be <b>47% (45 people)</b> if your
        vaccination rate was <b>38%</b> and your mask compliance rate was{" "}
        <b>30%</b>
      </div>
    </div>
  );
};

export default Recommendation;
