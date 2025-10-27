import React from "react";
import TornImage from "./TornImage";

export default function CardFront() {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden">
      <TornImage src="/card.jpg" alt="Save the date" />
      <div className="px-6 pb-6 pt-4 text-center text-stone-700">
        <p className="tracking-[0.2em] uppercase text-xs mb-1">Save the Date</p>
        <p className="text-xl font-medium">August 10, 2026</p>
        <p className="text-sm italic text-stone-500">"Somewhere in the PA woods"</p>
        <p className="mt-4 text-sm">Tap the card to share your details</p>
      </div>
    </div>
  );
}
