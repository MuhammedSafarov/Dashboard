import React from "react";
import "../DallasBox/DallasBox.scss";
import { Progress } from "antd";
import Recommendation from "../Recommendation/Recommendation";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { BsVirus, BsEmojiSmile } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
import { PiFaceMaskLight } from "react-icons/pi";

const LosAngelesBox = () => {
  return (
    <div className="dallas-container">
      <Recommendation />
      <div className="dallas-box">
        <div className="box-header">
          <h3>Los Angeles Office</h3>
          <button className="detail-btn">View details</button>
        </div>
        <div className="vaccine-info">
          <p>
            <b>37</b> shared desks + <b>22</b> private offices
          </p>
          <p>
            Maximum capacity: <b>95 people</b>
          </p>
        </div>
        <p className="occupancy heading">Current office occupancy:</p>
        <div className="percentage">
          <p className="percent">72%</p>
          <p className="people-count">65 people</p>
        </div>
        <Progress percent={72} showInfo={false} size="small" />
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
        <div className="results">
          <div className="icon">
            <BsVirus />
          </div>
          <div className="result-info">
            <p>Estimated office infection rate:</p>
            <div className="percent">
              <b>0.3% </b>(low)
            </div>
          </div>
        </div>
        <div className="results">
          <div className="icon">
            <BsEmojiSmile />
          </div>
          <div className="result-info">
            <p>Employee satisfaction rate:</p>
            <div className="percent">
              <b>0.3% </b>(low)
            </div>
          </div>
        </div>
        <div className="results">
          <div className="icon">
            <TbVaccine />
          </div>
          <div className="result-info">
            <p>Employee vaccination rate:</p>
            <div className="percent blue">
              <b>10%</b>
            </div>
          </div>
        </div>
        <div className="results">
          <div className="icon">
            <PiFaceMaskLight />
          </div>
          <div className="result-info">
            <p>Mask compliance :</p>
            <div className="percent blue">
              <b>No</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LosAngelesBox;
