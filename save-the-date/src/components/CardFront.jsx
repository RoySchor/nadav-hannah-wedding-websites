import React from "react";
import TornImage from "./TornImage";
import "./CardFront.css";

export default function CardFront() {
  return (
    <div className="card-front-container">
      <TornImage src="/nadav-hannah-wedding-websites/card.jpg" alt="Save the date" />
      <div className="card-front-content">
        <p className="card-front-subtitle">Save the Date</p>
        <p className="card-front-date">August 10, 2026</p>
        <p className="card-front-location">"Somewhere in the PA woods"</p>
        <p className="card-front-instruction">Tap the card to share your details</p>
      </div>
    </div>
  );
}
