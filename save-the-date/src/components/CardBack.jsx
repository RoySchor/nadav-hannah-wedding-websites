import React from "react";

export default function CardBack({ onSubmit, isSubmitting, onFlipBack }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col"
    >
      {/* Back button */}
      <button
        type="button"
        onClick={onFlipBack}
        className="self-start mb-3 text-stone-500 hover:text-stone-700 flex items-center gap-1 text-sm transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </button>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-center font-medium text-stone-700 mb-4">We'd love to stay in touch</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-stone-500 mb-1">Name</label>
            <input
              required
              name="name"
              className="w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-400"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-xs text-stone-500 mb-1">Email</label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-400"
              placeholder="jane@email.com"
            />
          </div>
          <div>
            <label className="block text-xs text-stone-500 mb-1">Address</label>
            <input
              name="address"
              className="w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-400"
              placeholder="123 Maple St, City, ST"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 rounded-xl bg-stone-800 text-stone-100 py-2 font-medium disabled:opacity-50"
          >
            {isSubmitting ? "Sending…" : "Send"}
          </button>
        </div>
        <p className="text-[10px] text-center text-stone-400 mt-4">
          (The form doesn't submit anywhere yet — hook it to Google Sheets later.)
        </p>
      </div>
    </form>
  );
}
