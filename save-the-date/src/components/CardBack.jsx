import React from "react";
import "./CardBack.css";

export default function CardBack({ onSubmit, isSubmitting, onFlipBack }) {
  return (
    <div className="card-back-form">
      {/* Back button */}
      <button type="button" onClick={onFlipBack} className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="back-button-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </button>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeBOHZPU_VMMgh621pS4oMFOFJj0Cf2nT0dNXXZIts8TkdPUg/viewform?embedded=true"
        className="google-form-iframe"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
