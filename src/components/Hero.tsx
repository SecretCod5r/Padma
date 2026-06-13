/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowRight, Sparkles, Flame, ShieldAlert } from "lucide-react";
import { FLAVORS } from "../data";
import PackagingMockup from "./PackagingMockup";

interface HeroProps {
  onScrollToFlavours: () => void;
  onScrollToPricing: () => void;
}

export default function Hero({ onScrollToFlavours, onScrollToPricing }: HeroProps) {
  // Let the customer toggle the interactive flavor on the live premium pouch mockup!
  const [selectedHeroFlavorIdx, setSelectedHeroFlavorIdx] = useState(0);
  const currentFlavor = FLAVORS[selectedHeroFlavorIdx];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#091527] via-[#0b1a30] to-[#091527] pt-28 pb-16 flex items-center overflow-hidden text-[#F2EFE6]">
      {/* Dynamic background circular accent that matches flavor */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          top: "20%",
          right: "10%",
          backgroundColor: currentFlavor.id === "peri-peri" ? "#173F7A" : currentFlavor.id === "mango-chilli" ? "#D8B06A" : currentFlavor.id === "dark-chocolate" ? "#735A45" : "#D8B06A"
        }}
      />
      {/* Fine lines background grid representing architectural premium blueprint layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#173F7a03_1px,transparent_1px),linear-gradient(to_bottom,#173F7a03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Editorial Texts Column (Left) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Launch Stamp */}
            <div className="inline-flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 bg-[#D8B06A] rounded-full animate-ping"></span>
              <span className="text-[10px] tracking-[0.25em] font-bold text-[#D8B06A] uppercase">
                India's First Luxury Snack Collection
              </span>
            </div>

            {/* Core Epic Slogan Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] max-w-2xl mx-auto lg:mx-0">
              The Snack That Lets You Eat{" "}
              <span className="relative inline-block italic font-light text-[#D8B06A] px-1">
                Guilt Free
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#D8B06A]/30"></span>
              </span>
              , Every Day.
            </h1>

            {/* Subheadline detail */}
            <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Luxury roasted makhana crafted for the health conscious generation. Air-toasted to flawless crispness, seasoned with premium natural superfoods. Low calorie. High protein. Infinite flavour.
            </p>

            {/* Call to Actions button group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onScrollToPricing}
                className="w-full sm:w-auto px-8 py-4 bg-[#D8B06A] text-[#0b1a30] text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#0b1a30] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded shadow-lg shadow-[#D8B06A]/10 flex items-center justify-center space-x-2.5"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToFlavours}
                className="w-full sm:w-auto px-8 py-4 border border-[#D8B06A]/30 text-[#D8B06A] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D8B06A]/10 hover:border-[#D8B06A] transition-all duration-300 rounded flex items-center justify-center space-x-2"
              >
                <span>Curate Flavours</span>
              </button>
            </div>

            {/* Direct Micro Nutrition Highlight Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-[11px] font-semibold text-[#F2EFE6]/75 tracking-wider uppercase">
              <div className="flex items-center space-x-2">
                <Flame className="w-4.5 h-4.5 text-[#D8B06A] stroke-[1.8]" />
                <span>55 Kcal Per Cup</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-4.5 h-4.5 text-[#D8B06A] stroke-[1.8]" />
                <span>100% Air Toasted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4.5 h-4.5 text-[#D8B06A] stroke-[1.8]" />
                <span>A2 Vedic Ghee Infused</span>
              </div>
            </div>
          </div>

          {/* Interactive Responsive Pouch Showcase Column (Right) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-8 lg:pt-0">
            {/* Visual Backdrops of Gold Circles */}
            <div className="absolute w-72 h-72 border border-[#D8B06A]/20 rounded-full animate-pulse-slow pointer-events-none" />
            <div className="absolute w-96 h-96 border border-[#D8B06A]/10 rounded-full pointer-events-none" />

            {/* Interactive packaging rendering */}
            <PackagingMockup
              flavor={currentFlavor}
              size="lg"
              isFloating={true}
              className="z-10 relative drop-shadow-[0_35px_35px_rgba(23,63,122,0.15)]"
            />

            {/* Interactive Flavour Selector Overlay Pill */}
            <div className="mt-8 bg-[#0b1a30]/80 backdrop-blur-md border border-[#D8B06A]/30 rounded-full p-1.5 flex items-center space-x-1 shadow-lg relative z-20">
              <span className="text-[9px] tracking-wider uppercase font-semibold text-white/60 px-2 pl-3">
                Touch For Flavor Preview:
              </span>
              <div className="flex space-x-1">
                {FLAVORS.map((flavor, index) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedHeroFlavorIdx(index)}
                    className={`w-7 h-7 rounded-full border-2 transition-all duration-300 relative flex items-center justify-center ${
                      selectedHeroFlavorIdx === index
                        ? "border-[#D8B06A] scale-110 shadow-sm"
                        : "border-transparent hover:scale-105"
                    }`}
                    title={flavor.name}
                  >
                    <span
                      className={`w-5 h-5 rounded-full block`}
                      style={{
                        backgroundColor:
                          flavor.id === "himalayan-salt"
                            ? "#F2EFE6"
                            : flavor.id === "classic-ghee"
                            ? "#E7D7C9"
                            : flavor.id === "peri-peri"
                            ? "#173F7A"
                            : flavor.id === "mango-chilli"
                            ? "#D8B06A"
                            : "#2A1D15",
                        border: flavor.id === "himalayan-salt" ? "1px solid #173F7A/20" : "none",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Fine Print disclaimer beneath */}
            <p className="text-[10px] text-white/50 tracking-widest uppercase font-semibold mt-4 text-center">
              Active: {currentFlavor.name} Live Render
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
