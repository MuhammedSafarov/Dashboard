import React from "react";
import "./Recommendation.scss";
import { Progress, Space } from "antd";

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
          <div className="dropdown"></div>
        </div>
      </div>
      <Space wrap>
        <Progress type="circle" percent={75} strokeColor={"yellow-green"} />
        <Progress type="circle" percent={75} strokeColor={"yellow-green"} />
        <Progress type="circle" percent={75} strokeColor={"yellow-green"} />
      </Space>
    </div>
  );
};

export default Recommendation;
