import React from "react";

const HeaderNav = () => {
  return (
    // Menu Navigation
    <header>
      <div className="top-banner">
        <h1>MinumSkuy</h1>
      </div>
      <nav>
        <div id="getHomeButton" className="home menu-boxes">
          <i className="fas fa-utensils fa-lg"></i>
          <span>Home</span>
        </div>
        <div id="getHistoryButton" className="history menu-boxes">
          <i className="fas fa-cloud-meatball fa-lg"></i>
          <span>Recent</span>
        </div>
        <div id="getProfileButton" className="account menu-boxes">
          <i className="fas fa-user-circle fa-lg"></i>
          <span>Account</span>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
