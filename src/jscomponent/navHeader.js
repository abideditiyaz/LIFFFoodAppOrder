import React from "react";

const headerNav = () => {
  return (
    // Menu Navigation
    <header>
      <div className="top-banner">
        <h1>MinumSkuy</h1>
      </div>
      <nav>
        <div id="getHomeButton" className="home menu-boxes">
          <i className="fas fa-utensils fa-lg"></i>
          <caption>Home</caption>
        </div>
        <div id="getHistoryButton" className="history menu-boxes">
          <i className="fas fa-cloud-meatball fa-lg"></i>
          <caption>Recent</caption>
        </div>
        <div id="getProfileButton" className="account menu-boxes">
          <i className="fas fa-user-circle fa-lg"></i>
          <caption>Account</caption>
        </div>
      </nav>
    </header>
  );
};

export default headerNav;
