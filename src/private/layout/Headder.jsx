import React from "react";
import { NavLink } from "react-router-dom";

function Headder() {
  return (
    <div
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          className="navbar-brand m-0"
          href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
          target="_blank"
        >
          <img
            src="../assets/img/logo-ct.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold text-white">
            Material Dashboard 2
          </span>
        </a>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link text-white  "
              to="/"
            >
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">dashboard</i>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/table">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">table_view</i>
              </div>
              <span className="nav-link-text ms-1">Tables</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/order">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">receipt_long</i>
              </div>
              <span className="nav-link-text ms-1">Order</span>
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
              Account pages
            </h6>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/profile">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">person</i>
              </div>
              <span className="nav-link-text ms-1">Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headder;
