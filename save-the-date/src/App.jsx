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
    const t1 = setTimeout(() => setPhase("open"), 2500);
    const t2 = setTimeout(() => setPhase("letterOut"), 2500 + 800);
    return () => (clearTimeout(t1), clearTimeout(t2));
  }, []);

  const onFlip = () => !submitted && setShowBack((s) => !s);

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
        <EnvelopeClassic phase={phase}>
          {/* FRONT/BACK content inside the letter */}
          <div
            className="w-full h-full [backface-visibility:hidden]"
            onClick={onFlip}
            style={{ transformStyle: "preserve-3d" }}
          >
            {!showBack ? (
              <CardFront />
            ) : (
              <CardBack onSubmit={onSubmit} isSubmitting={isSubmitting} />
            )}
          </div>
        </EnvelopeClassic>

        <AnimatePresence>
          {submitted && <ThankYou onRestart={() => window.location.reload()} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
