import React from "react";
import "./CardBack.css";

export default function CardBack({ onSubmit, isSubmitting, onFlipBack }) {
  return (
    <form onSubmit={onSubmit} className="card-back-form">
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

      <div className="form-content">
        <h2 className="form-title">We'd love to stay in touch</h2>
        <div className="form-fields">
          <div>
            <label className="form-field-label">Full Name</label>
            <input required name="fullName" className="form-field-input" placeholder="Roy Schor" />
          </div>
          <div>
            <label className="form-field-label">Email</label>
            <input
              required
              type="email"
              name="email"
              className="form-field-input"
              placeholder="jane@gmail.com"
            />
          </div>
          <div>
            <label className="form-field-label">Phone Number</label>
            <input
              required
              type="tel"
              name="phone"
              className="form-field-input"
              placeholder="555 123-4567"
            />
          </div>
          <div>
            <label className="form-field-label">Full Mailing Address</label>
            <textarea
              name="address"
              className="form-field-textarea"
              placeholder="123 Maple Street&#10;City, State 12345"
              rows="3"
            />
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? "Sending…" : "Send"}
          </button>
        </div>
        <p className="form-disclaimer">
          (The form doesn't submit anywhere yet — hook it to Google Sheets later.)
        </p>
      </div>
    </form>
  );
}
