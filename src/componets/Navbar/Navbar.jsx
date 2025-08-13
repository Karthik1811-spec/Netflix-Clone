import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icons from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import drop_down from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browsw by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icons} alt="" className="icons" />
        <p>Children</p>
        <img src={bell} alt="" className="icons" />
        <div className="nav-profile">
          <img src={profile} alt="" className="profile" />
          <img src={drop_down} alt="" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Log out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
