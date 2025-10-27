import React from "react";
import { motion } from "framer-motion";
import "./ThankYou.css";

export default function ThankYou({ onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="thank-you-container"
    >
      <h3 className="thank-you-title">Thank you for sharing your details!</h3>
      <p className="thank-you-message">Want to fill it out for someone else?</p>
      <button onClick={onRestart} className="thank-you-button">
        Add another
      </button>
    </motion.div>
  );
}
