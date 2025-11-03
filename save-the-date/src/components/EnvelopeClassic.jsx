import React, { useMemo, useState, useEffect } from "react";
import clsx from "clsx";

/**
 * Phases:
 *  - "closed": envelope closed
 *  - "open": top flap opens, card peeks up slightly
 *  - "slideUp": card slides up further, revealing full height
 *  - "scaleUp": card scales up to 1.3x and centers on screen
 */
export default function EnvelopeClassic({ phase, children, flipRotation = 0 }) {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScreenSize('mobile');
      } else if (width <= 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Responsive dimensions based on screen size
  const style = useMemo(
    () => {
      if (screenSize === 'mobile') {
        return { "--env-w": "280px", "--env-h": "220px" };
      } else if (screenSize === 'tablet') {
        return { "--env-w": "400px", "--env-h": "320px" };
      }
      return { "--env-w": "540px", "--env-h": "420px" };
    },
    [screenSize]
  );

  // Compute the transform based on phase
  const getTransform = () => {
    const rotate = `rotateY(${flipRotation}deg)`;
    // Reduce horizontal movement on mobile and tablet
    let translateX = "translateX(-75%)";
    let scale = "1.3";

    if (screenSize === 'mobile') {
      translateX = "translateX(-25%)";
      scale = "1.1";
    } else if (screenSize === 'tablet') {
      translateX = "translateX(-40%)";
      scale = "1.2";
    }

    switch (phase) {
      case "closed":
        return `translateY(0) scale(1) ${rotate}`;
      case "open":
        return `translateY(-18%) scale(1.05) ${rotate}`;
      case "slideUp":
        return `translateY(calc(-1 * (var(--env-h, 300px) * 0.9))) scale(1.05) ${rotate}`;
      case "scaleUp":
        return `${translateX} translateY(calc(-1 * (var(--env-h, 300px) * 0.45))) scale(${scale}) ${rotate}`;
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
