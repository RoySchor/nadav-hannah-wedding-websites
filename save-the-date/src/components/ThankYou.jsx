import React from "react";
import { motion } from "framer-motion";

export default function ThankYou({ onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-8 text-center space-y-4"
    >
      <h3 className="text-lg font-medium">Thank you for sharing your details!</h3>
      <p className="text-sm text-stone-600">Want to fill it out for someone else?</p>
      <button onClick={onRestart} className="rounded-xl bg-stone-800 text-white px-4 py-2">
        Add another
      </button>
    </motion.div>
  );
}
