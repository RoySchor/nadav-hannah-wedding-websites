import React from "react";
// eslint-disable-next-line no-unused-vars -- used as motion.div in JSX
import { motion } from "framer-motion";

/**
 * Envelope anatomy (front view):
 * - Base: rounded white rectangle
 * - Side flaps: left/right triangles (static)
 * - Bottom flap: bottom triangle (static)
 * - Top flap: top triangle that ROTATES around the top edge (this is the lid)
 * - Liner: gold area visible under the top flap
 *
 * CLOSED  = top flap at rotateX(0)
 * OPEN    = top flap at rotateX(-180)
 */
export default function Envelope({ isOpen, children }) {
  return (
    <div className="relative" style={{ perspective: 1200 }}>
      {/* Base / body */}
      <div className="relative w-full aspect-[5/3] rounded-xl border border-stone-200 shadow-2xl overflow-hidden bg-white" />

      {/* Gold liner (only visible when flap opens) */}
      <div className="pointer-events-none absolute inset-x-[6%] top-[4%] h-[42%] rounded-t-[12px] bg-gradient-to-br from-yellow-200/80 via-yellow-300/60 to-yellow-500/30" />

      {/* Side flaps (static) */}
      <svg
        className="pointer-events-none absolute inset-0"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
      >
        {/* left and right triangles meeting at center-bottom */}
        <polygon points="0,0 50,32 0,60" className="fill-white stroke-stone-200" />
        <polygon points="100,0 100,60 50,32" className="fill-white stroke-stone-200" />
        {/* bottom flap */}
        <polygon points="0,60 100,60 50,32" className="fill-white stroke-stone-200" />
      </svg>

      {/* Card slot (where the card slides) */}
      <div className="absolute left-[6%] right-[6%] top-[16%] bottom-[12%] pointer-events-none">
        {children}
      </div>

      {/* TOP FLAP (animated) — origin at the very top so it flips open upward */}
      <motion.div
        className="absolute inset-0 origin-top"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 0 }} // start CLOSED
        animate={{ rotateX: isOpen ? -180 : 0 }} // open flips upward
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
      >
        <svg viewBox="0 0 100 60" className="w-full h-full block" preserveAspectRatio="none">
          {/* top triangle (lid) pointing DOWN when closed */}
          <polygon points="0,0 100,0 50,32" className="fill-white stroke-stone-200" />
        </svg>
      </motion.div>
    </div>
  );
}
