import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeClassic from "./components/EnvelopeClassic";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import ThankYou from "./components/ThankYou";
import "./App.css";

export default function App() {
  const [phase, setPhase] = useState("closed");
  const [showBack, setShowBack] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("open"), 1200);
    const t2 = setTimeout(() => setPhase("slideUp"), 1200 + 700);
    const t3 = setTimeout(() => setPhase("scaleUp"), 1200 + 700 + 800);
    return () => (clearTimeout(t1), clearTimeout(t2), clearTimeout(t3));
  }, []);

  const onFlip = () => {
    // Only allow flipping after animation is complete (scaleUp phase)
    if (phase === "scaleUp" && !submitted) {
      setShowBack((s) => !s);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <EnvelopeClassic phase={phase} flipRotation={showBack ? 180 : 0}>
          {/* FRONT/BACK content inside the letter */}
          <div className="card-wrapper">
            {/* Card Front - visible when not flipped, clickable to flip */}
            <div
              className="card-side card-front"
              style={{
                opacity: showBack ? 0 : 1,
                cursor: phase === "scaleUp" && !showBack ? "pointer" : "default",
                pointerEvents: showBack ? "none" : "auto",
              }}
              onClick={!showBack ? onFlip : undefined}
            >
              <CardFront />
            </div>
            {/* Card Back - visible when flipped, needs to be counter-rotated */}
            <div
              className="card-side card-back"
              style={{
                opacity: showBack ? 1 : 0,
                pointerEvents: showBack ? "auto" : "none",
              }}
            >
              <CardBack onSubmit={onSubmit} isSubmitting={isSubmitting} onFlipBack={onFlip} />
            </div>
          </div>
        </EnvelopeClassic>

        <AnimatePresence>
          {submitted && <ThankYou onRestart={() => window.location.reload()} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
