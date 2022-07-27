import React from "react";
import "..//index.css";
import Car from "..//images/icon-sedans.svg";

export default function Sedans() {
  return (
    <div className="card-sedans">
      <CardImage />
      <CardHeader />
      <CardContent />
      <CardButton />
    </div>
  );
}
function CardHeader() {
  return (
    <div className="card-header">
      <span className="card-header__heading">Sedans</span>
    </div>
  );
}
function CardContent() {
  return (
    <div className="card-content">
      <span className="card-content__text">
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </span>
    </div>
  );
}
function CardImage() {
  return (
    <div className="card-image">
      <img src={Car} alt="Sedan logo"></img>
    </div>
  );
}
function CardButton() {
  return (
    <div className="card-buttons">
      <button className="card-buttons__btn__sedans">Learn More</button>
    </div>
  );
}
