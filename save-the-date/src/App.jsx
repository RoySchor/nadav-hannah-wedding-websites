import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeClassic from "./components/EnvelopeClassic";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import ThankYou from "./components/ThankYou";

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
    <div className="min-h-dvh bg-stone-50 flex items-center justify-center px-4 py-10">
      <div className="w-[min(480px,96vw)]">
        <EnvelopeClassic phase={phase} flipRotation={showBack ? 180 : 0}>
          {/* FRONT/BACK content inside the letter */}
          <div className="w-full h-full relative" onClick={onFlip}>
            {/* Card Front - visible when not flipped */}
            <div
              className="absolute inset-0"
              style={{
                opacity: showBack ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            >
              <CardFront />
            </div>
            {/* Card Back - visible when flipped, needs to be counter-rotated */}
            <div
              className="absolute inset-0"
              style={{
                transform: "scaleX(-1)", // Counter the parent's 180° rotation mirroring
                opacity: showBack ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              <CardBack onSubmit={onSubmit} isSubmitting={isSubmitting} />
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
