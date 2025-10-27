import React, { useMemo } from "react";
import clsx from "clsx";

/**
 * Phases:
 *  - "closed": envelope closed
 *  - "open": top flap opens, card peeks up slightly
 *  - "slideUp": card slides up further, revealing full height
 *  - "scaleUp": card scales up to 1.3x and centers on screen
 */
export default function EnvelopeClassic({ phase, children, flipRotation = 0 }) {
  // optional: scale wrapper responsively
  const style = useMemo(
    () => ({
      "--env-w": "540px",
      "--env-h": "420px",
    }),
    []
  );

  // Compute the transform based on phase
  const getTransform = () => {
    const rotate = `rotateY(${flipRotation}deg)`;

    switch (phase) {
      case "closed":
        return `translateY(0) scale(1) ${rotate}`;
      case "open":
        return `translateY(-18%) scale(1.05) ${rotate}`;
      case "slideUp":
        return `translateY(calc(-1 * (var(--env-h, 300px) * 0.9))) scale(1.05) ${rotate}`;
      case "scaleUp":
        return `translateY(calc(-1 * (var(--env-h, 300px) * 0.45))) scale(1.3) ${rotate}`;
      default:
        return `translateY(0) scale(1) ${rotate}`;
    }
  };

  return (
    <div className={clsx("env-wrapper", `phase-${phase}`)} style={style}>
      <div className="lid one" />
      <div className="lid two" />
      <div className="envelope" />
      <div className="letter-viewport">
        <div
          className="letter"
          style={{
            transform: getTransform(),
            transformStyle: "preserve-3d",
            cursor: phase === "scaleUp" ? "pointer" : "default",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
