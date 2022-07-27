import React from "react";
import "..//index.css";
import Car from "..//images/icon-suvs.svg";
export default function Suvs() {
  return (
    <div className="card-suvs">
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
      <span className="card-header__heading">Suvs</span>
    </div>
  );
}
function CardContent() {
  return (
    <div className="card-content">
      <span className="card-content__text">
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
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
      <button className="card-buttons__btn__suvs">Learn More</button>
    </div>
  );
}
