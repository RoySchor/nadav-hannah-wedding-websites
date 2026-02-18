import React from "react";
import TornImage from "./TornImage";
import "./CardFront.css";

export default function CardFront() {
  return (
    <div className="card-front-container">
      <TornImage src="/card.jpg" alt="Save the date" />
      <div className="card-front-content">
        <p className="card-front-subtitle">We are tying the knot</p>
        <p className="card-front-date">June 11-13th, 2027</p>
        <p className="card-front-location">Camp Lindenmere, Poconos, PA</p>
        <p className="card-front-instruction">Tap the card to share your details</p>
      </div>
    </div>
  );
}
