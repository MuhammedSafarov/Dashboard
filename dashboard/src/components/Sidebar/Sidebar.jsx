import React from "react";
import "./Sidebar.scss";
import { FaBookMedical } from "@react-icons/all-files/fa/FaBookMedical";

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
            <p>Dashboard</p>
          </div>
          <div className="sidebar-sections" id="forecast">
            <p>Forecast</p>
          </div>
          <div className="sidebar-sections" id="all-offices">
            <p>All Offices</p>
          </div>
          <div className="sidebar-sections" id="employees">
            <p>Employees</p>
          </div>
        </div>
      </div>
      <div className="sidebar-footer">
        <img src="" alt="" />
        <div>My Profile</div>
      </div>
    </div>
  );
};

export default Sidebar;
