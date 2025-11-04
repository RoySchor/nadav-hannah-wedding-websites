import React from "react";
import "./TornImage.css";

export default function TornImage({ src, alt }) {
  return (
    <div className="torn-image-container">
      <img src={src} alt={alt} className="torn-image" draggable={false} />
    </div>
  );
}
