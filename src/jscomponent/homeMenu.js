import React from "react";

const CockTail = () => {
  return (
    // <!-- Cocktail
    <div className="sorted">
      <div className="wrapper-second">
        <h3>CockTail</h3>
        <i className="fas fa-cocktail"></i>
      </div>
      <div id="Cocktail" className="main-wrapper"></div>
    </div>
  );
};

const Shot = () => {
  return (
    // Shot
    <div className="sorted">
      <div className="wrapper-second">
        <h3>Shot</h3>
        <i className="fas fa-glass-whiskey"></i>
      </div>
      <div id="Shot" className="main-wrapper"></div>
    </div>
  );
};

const OrdinaryDrink = () => {
  return (
    //Ordinary Drink
    <div className="sorted">
      <div className="wrapper-second">
        <h3>Ordinary Drink</h3>
        <i className="fas fa-glass-martini-alt"></i>
      </div>
      <div id="OrdinaryDrink" className="main-wrapper"></div>
    </div>
  );
};

const CoffeTea = () => {
  return (
    // <!-- Coffe Tea
    <div className="sorted">
      <div className="wrapper-second">
        <h3>Coffe / Tea</h3>
        <i className="fas fa-coffee"></i>
      </div>
      <div id="CoffeTea" className="main-wrapper-khusus"></div>
    </div>
  );
};

const Surprise = () => {
  return (
    // Surprise
    <div className="sorted">
      <div className="wrapper-second">
        <h3>Rarely Noticed</h3>
        <i className="fas fa-beer"></i>
      </div>
      <div id="Surprise" className="main-wrapper-khusus"></div>
    </div>
  );
};

export { CockTail, Shot, OrdinaryDrink, CoffeTea, Surprise };
