import React from "react";
import "..//index.css";
import Car from "..//images/icon-luxury.svg";
export default function Luxury() {
  return (
    <div className="card-luxury">
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
      <span className="card-header__heading">Luxury</span>
    </div>
  );
}
function CardContent() {
  return (
    <div className="card-content">
      <span className="card-content__text">
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
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
      <button className="card-buttons__btn__luxury">Learn More</button>
    </div>
  );
}
