import React from "react";
import TornImage from "./TornImage";
import "./CardFront.css";

const cardSrc = new URL("/card.jpg", import.meta.env.BASE_URL).href;

export default function CardFront() {
  return (
    <div className="card-front-container">
      <TornImage src={cardSrc} alt="Save the date" />
      <div className="card-front-content">
        <p className="card-front-subtitle">Save the Date</p>
        <p className="card-front-date">August 10, 2026</p>
        <p className="card-front-location">"Somewhere in the PA woods"</p>
        <p className="card-front-instruction">Tap the card to share your details</p>
      </div>
    </div>
  );
}
