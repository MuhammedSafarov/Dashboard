import React from "react";
import "./DallasBox.scss";
import { Progress } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

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
      <p className="occupancy heading">Current office occupancy:</p>
      <div className="percentage">
        <p className="percent">50%</p>
        <p className="people-count">48 people</p>
      </div>
      <Progress percent={50} showInfo={false} size="small" />
      <p className="heading">Criteria for increasing occupancy:</p>
      <div className="guideline">
        <div className="guideline-first-part">
          <p className="guideline-name">Haeven guidelines</p>
          <QuestionCircleOutlined />
        </div>
        <div className="guideline-second-part red">Not met</div>
      </div>
      <div className="guideline">
        <div className="guideline-first-part">
          <p className="guideline-name">Country/State guidelines</p>
          <QuestionCircleOutlined />
        </div>
        <div className="guideline-second-part green">Met</div>
      </div>
    </div>
  );
};

export default DallasBox;
