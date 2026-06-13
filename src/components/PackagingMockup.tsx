/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Flavor } from "../types";

interface PackagingMockupProps {
  flavor: Flavor;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  isFloating?: boolean;
}

export default function PackagingMockup({
  flavor,
  size = "md",
  className = "",
  isFloating = false,
}: PackagingMockupProps) {
  // Determine sizing limits
  const sizeClasses = {
    sm: "w-40 h-56 text-[8px]",
    md: "w-52 h-72 text-[10px]",
    lg: "w-64 h-88 text-xs",
    xl: "w-76 h-[26rem] text-sm",
  };

  const isDarkPack = flavor.id === "peri-peri" || flavor.id === "dark-chocolate";
  const packBg = flavor.id === "peri-peri" ? "bg-[#173F7A]" : flavor.id === "dark-chocolate" ? "bg-[#251A12]" : "bg-[#F2EFE6]";
  const goldColor = "text-[#D8B06A]";
  const subtextMuted = isDarkPack ? "text-slate-300" : "text-slate-600";
  const brandTitle = isDarkPack ? "text-[#D8B06A]" : "text-[#173F7A]";
  const outerBorder = isDarkPack ? "border-[#D8B06A]/30" : "border-[#173F7A]/15";

  return (
    <div
      className={`relative select-none transition-transform duration-700 ease-out transform ${
        isFloating ? "animate-bounce-subtle" : ""
      } ${className}`}
      style={{
        perspective: "1000px",
      }}
    >
      {/* 3D shadows and layout structure */}
      <div
        className={`relative ${sizeClasses[size]} rounded-t-[40px] rounded-b-[45px] ${packBg} border ${outerBorder} shadow-2xl overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(216,176,106,0.15)] hover:-translate-y-2`}
        style={{
          boxShadow: isDarkPack
            ? "0 25px 50px -12px rgba(0,0,0,0.7), inset 0 2px 4px rgba(255,255,255,0.05), inset 0 -4px 10px rgba(0,0,0,0.4)"
            : "0 25px 50px -12px rgba(23,63,122,0.12), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -4px 10px rgba(23,63,122,0.05)",
        }}
      >
        {/* Top Tear Notches & Zip Seal Line */}
        <div className="absolute top-0 left-0 right-0 h-8 flex flex-col items-center justify-start pointer-events-none">
          {/* Tear Notches left & right */}
          <div className="absolute top-5 left-0 w-2 h-1 bg-black/10 rounded-r-sm"></div>
          <div className="absolute top-5 right-0 w-2 h-1 bg-black/10 rounded-l-sm"></div>
          {/* Elegant Zip Line */}
          <div className="w-full border-t border-dashed border-black/10 mt-5"></div>
          <div className="w-4 h-1 rounded-full bg-black/10 mt-1"></div>
        </div>

        {/* Ambient Gloss Highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-t-[40px] rounded-b-[45px]"></div>
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>

        {/* Brand Stamp Header */}
        <div className="text-center pt-5 flex flex-col items-center">
          <span className={`tracking-[0.25em] font-sans font-medium uppercase opacity-80 ${isDarkPack ? "text-[#E7D7C9]" : "text-[#173F7A]"}`}>
            Shuddh • Crunchy • Wellness
          </span>
          <div className="w-6 border-b border-[#D8B06A] mt-1.5 opacity-65"></div>
        </div>

        {/* Luxury Center Seal Core */}
        <div className="flex flex-col items-center text-center my-auto py-2">
          {/* Gold Lotus Leaf Crest SVGs */}
          <div className="w-14 h-14 rounded-full border border-[#D8B06A]/40 flex items-center justify-center p-2 mb-3 bg-gradient-to-b from-[#D8B06A]/5 to-[#D8B06A]/15 backdrop-blur-xs">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D8B06A"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 transform hover:scale-110 transition-transform duration-500"
            >
              {/* Majestic Lotus paths */}
              <path d="M12 21c-2-2.5-5-4.5-5-7.5 0-3.5 2-4.5 5-8 3 3.5 5 4.5 5 7.5 0 3-3 5-5 7.5z" />
              <path d="M12 21c-1-1.5-3-3-3-5 0-2 1-3 3-5 2 2 3 3 3 5 0 2-2 3.5-3 5z" />
              <path d="M12 10c1 1.5 2 1.5 2 3H10c0-1.5 1-1.5 2-3z" />
              <circle cx="12" cy="13" r="1" fill="#D8B06A" />
            </svg>
          </div>

          {/* Core Logo Title */}
          <h3
            className={`font-serif tracking-[0.3em] font-semibold text-2xl uppercase ${brandTitle}`}
            style={{ textShadow: isDarkPack ? "0 2px 4px rgba(0,0,0,0.4)" : "0 1px 2px rgba(23,63,122,0.05)" }}
          >
            PADMA
          </h3>
          <p className="font-sans font-semibold tracking-[0.18em] uppercase text-[9px] mt-1.5 text-[#D8B06A]">
            LUXURY AIR TOASTED MAKHANA
          </p>

          <div className="w-20 border-b border-[#D8B06A]/40 my-3.5"></div>

          {/* Flavor Name in elegant fonts */}
          <p
            className={`font-serif italic font-medium px-2 rounded text-base leading-tight ${
              isDarkPack ? "text-white" : "text-[#173F7A]"
            }`}
          >
            {flavor.name}
          </p>
          <p className={`font-sans text-[8.5px] uppercase tracking-wider mt-1 opacity-75 ${subtextMuted}`}>
            {flavor.tagline}
          </p>
        </div>

        {/* Nutritional Badges Footer */}
        <div className="flex justify-between items-end border-t border-[#D8B06A]/20 pt-3 relative z-10">
          <div className="text-left">
            <span className="block font-sans text-[7.5px] uppercase tracking-widest text-[#D8B06A]">Calories</span>
            <span className={`font-mono text-xs font-semibold ${isDarkPack ? "text-white" : "text-[#173F7A]"}`}>
              {flavor.nutrition.calories}
            </span>
          </div>
          <div className="text-center">
            <span className="block font-sans text-[7.5px] uppercase tracking-widest text-[#D8B06A]">Protein</span>
            <span className={`font-mono text-xs font-semibold ${isDarkPack ? "text-white" : "text-[#173F7A]"}`}>
              {flavor.nutrition.protein}
            </span>
          </div>
          <div className="text-right">
            <span className="block font-sans text-[7.5px] uppercase tracking-widest text-[#D8B06A]">Weight</span>
            <span className={`font-mono text-xs font-semibold ${isDarkPack ? "text-white" : "text-[#173F7A]"}`}>
              85g e
            </span>
          </div>
        </div>
      </div>

      {/* Floating Makhana visual accent on sides (using standard SVGs styled beautifully as makhana kernels) */}
      {isFloating && (
        <>
          <div className="absolute -left-6 top-1/3 w-10 h-9 bg-stone-100 rounded-full shadow-md border border-stone-200/40 flex items-center justify-center p-1.5 transform -rotate-12 animate-float-slow">
            <div className="w-full h-full bg-stone-50 rounded-full border border-stone-300/20 shadow-inner flex items-center justify-center relative">
              <span className="absolute w-2 h-1 bg-stone-400/40 rounded-full top-2 left-3"></span>
              <span className="absolute w-1.5 h-1 bg-amber-800/10 rounded-full bottom-2 right-2"></span>
            </div>
          </div>
          <div className="absolute -right-8 bottom-1/4 w-12 h-11 bg-stone-100 rounded-full shadow-lg border border-stone-200/40 flex items-center justify-center p-2 transform rotate-45 animate-float-delayed">
            <div className="w-full h-full bg-stone-50 rounded-full border border-stone-300/20 shadow-inner flex items-center justify-center relative">
              <span className="absolute w-2 h-2 bg-stone-400/40 rounded-full top-3 right-4"></span>
              <span className="absolute w-3 h-1.5 bg-amber-700/15 rounded-full bottom-2 left-3"></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
