import React, { useMemo } from "react";
import clsx from "clsx";

/**
 * Phases:
 *  - "closed": envelope closed
 *  - "open": top flap opens, card peeks up slightly
 *  - "slideUp": card slides up further, revealing full height
 *  - "scaleUp": card scales up to 1.3x and centers on screen
 */
export default function EnvelopeClassic({ phase, children }) {
  // optional: scale wrapper responsively
  const style = useMemo(
    () => ({
      "--env-w": "440px",
      "--env-h": "300px",
    }),
    []
  );

  return (
    <div className={clsx("env-wrapper", `phase-${phase}`)} style={style}>
      <div className="lid one" />
      <div className="lid two" />
      <div className="envelope" />
      <div className="letter-viewport">
        <div className="letter">
          {/* Put your card front here */}
          <div className="letter-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
