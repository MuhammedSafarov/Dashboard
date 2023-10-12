import React from "react";
import "./Sidebar.scss";
import { FaBookMedical } from "@react-icons/all-files/fa/FaBookMedical";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { BsGraphUp } from "@react-icons/all-files/bs/BsGraphUp";
import { BsPeople } from "@react-icons/all-files/bs/BsPeople";
import { BiBuildings } from "@react-icons/all-files/bi/BiBuildings";
import DropDownBtn from "../../components/DropDownBtn/DropDownBtn";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="logo">
          <FaBookMedical id="med-logo" />
          <div className="logo-name">
            <p>Haven</p>
            <p>Diagnostics</p>
          </div>
        </div>
        <div className="sidebar-navigation">
          <div className="sidebar-sections" id="dashboard">
            <MdDashboard className="icons" />
            <p>Dashboard</p>
          </div>
          <div className="sidebar-sections" id="forecast">
            <BsGraphUp className="icons" />
            <p>Forecast</p>
          </div>
          <div className="sidebar-sections" id="all-offices">
            <BiBuildings className="icons" />
            <p>All Offices</p>
          </div>
          <div className="sidebar-sections" id="employees">
            <BsPeople className="icons" />
            <p>Employees</p>
          </div>
        </div>
      </div>
      <div className="sidebar-footer">
        <img
          src="https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg"
          alt=""
        />
        <div className="dropdown">
          <DropDownBtn className="dropdown" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
