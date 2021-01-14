import React from "react";
import "./../App";
import {Link} from 'react-router-dom';

const HeaderNav = () => {
  return (
    // Menu Navigation
    <header>
      <div className="top-banner">
        <h1>MinumSkuy</h1>
      </div>
      <nav>
        <Link style={{color: "black"}} to="/">
        <div id="getHomeButton" className="home menu-boxes">
          <i className="fas fa-utensils fa-lg"></i>
          <span>Home</span>
        </div>
        </Link>
        <div id="getHistoryButton" className="history menu-boxes">
          <i className="fas fa-cloud-meatball fa-lg"></i>
          <span>Recent</span>
        </div>
        <Link style={{color: "black"}} to="/ProfileUser">
        <div id="getProfileButton" className="account menu-boxes">
          <i className="fas fa-user-circle fa-lg"></i>
          <span>Account</span>
        </div>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderNav;
