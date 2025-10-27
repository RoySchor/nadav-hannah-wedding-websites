import React from "react";
import "./TornImage.css";

export default function TornImage({ src, alt }) {
  return (
    <div className="torn-image-container">
      <img src={src} alt={alt} className="torn-image" draggable={false} />
      {/* Torn edge */}
      <svg className="torn-edge" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0 10 Q 5 0, 10 10 T 30 10 T 50 10 T 70 10 T 90 10 T 110 10 V20 H0 Z"
          className="torn-edge-fill"
        />
      </svg>
    </div>
  );
}
