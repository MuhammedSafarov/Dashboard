import React from "react";
import { Progress } from "antd";
import Recommendation from "../Recommendation/Recommendation";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { BsVirus, BsEmojiSmile } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
import { PiFaceMaskLight } from "react-icons/pi";
import "../DallasBox/DallasBox.scss";

const CoopelBox = () => {
  return (
    <div className="dallas-container">
      <Recommendation />
      <div className="dallas-box">
        <div className="box-header">
          <h3>Coopel Office</h3>
          <button className="detail-btn">View details</button>
        </div>
        <div className="vaccine-info">
          <p>
            <b>5</b> shared desks + <b>14</b> private offices
          </p>
          <p>
            Maximum capacity: <b>52 people</b>
          </p>
        </div>
        <p className="occupancy heading">Current office occupancy:</p>
        <div className="percentage">
          <p className="percent">15%</p>
          <p className="people-count">7 people</p>
        </div>
        <Progress percent={15} showInfo={false} size="small" />
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

export default CoopelBox;
