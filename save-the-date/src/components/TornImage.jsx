import React from "react";

export default function TornImage({ src, alt }) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-56 object-cover select-none rounded-t-2xl"
        draggable={false}
      />
      {/* Torn edge */}
      <svg
        className="absolute -bottom-2 left-0 w-full h-6"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 10 Q 5 0, 10 10 T 30 10 T 50 10 T 70 10 T 90 10 T 110 10 V20 H0 Z"
          className="fill-stone-50"
        />
      </svg>
    </div>
  );
}
