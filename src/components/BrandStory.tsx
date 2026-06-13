/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Leaf, Star, Sparkles } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="brand-story" className="py-24 bg-[#173F7A] text-white relative overflow-hidden">
      {/* Elegantly positioned subtle circles representing lotus pond ripples */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D8B06A]/10 rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-[#D8B06A]/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sanskrit Calligraphy & Poetic Storytelling */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
                The Sacred Origins • Origins of Wellness
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                Born From The <span className="italic font-normal text-[#D8B06A]">Lotus</span>.
              </h2>
              <div className="w-12 h-0.5 bg-[#D8B06A] mt-4" />
            </div>

            {/* Devnagari elegant stamp accent */}
            <div className="flex items-center space-x-4">
              <div className="px-3.5 py-1.5 border border-[#D8B06A]/30 bg-[#1c4887]/60 text-[#D8B06A] font-serif text-lg tracking-widest rounded">
                पद्म
              </div>
              <p className="text-stone-300 text-xs italic tracking-wide">
                - Padma [Sanskrit]: The sacred lotus flower, emblem of pure cosmic growth.
              </p>
            </div>

            {/* Editorial paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              <p>
                At PADMA, we believe snacking is not merely about quietening a physical craving; it is an act of mindful indulgence. Our brand name derives directly from the Sanskrit word for the Sacred Lotus. Just as the lotus flower grows elegantly out of deep freshwaters in absolute purity, PADMA represents the absolute pinnacle of clean food curation, mindful eating, and elevated wellness.
              </p>
              <p>
                Every single seed of makhana we select represents an eco-friendly loop. We partner directly with family farms in Bihar, India—the heartland of lotus seed cultivation—bringing centuries of harvesting heritage to your modern desk. Slow air-roasting processes ensure our products contain zero trace of industrial seed oils, trans fats, or high glycemic sugars. Swapping mass-produced snacking for PADMA is an act of self-respect.
              </p>
            </div>

            {/* Mini Brand Pillars with neat icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 bg-[#1c4887]/55 border border-[#D8B06A]/15 rounded p-4">
                <Leaf className="w-5 h-5 text-[#D8B06A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-white text-sm font-semibold tracking-wide">
                    Radical Ingredient Integrity
                  </h4>
                  <p className="text-stone-300 text-[11px] mt-1 leading-normal">
                    Real botanical extracts. No synthetics or chemically created taste masks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#1c4887]/55 border border-[#D8B06A]/15 rounded p-4">
                <Sparkles className="w-5 h-5 text-[#D8B06A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-white text-sm font-semibold tracking-wide">
                    Elevated Craftsmanship
                  </h4>
                  <p className="text-stone-300 text-[11px] mt-1 leading-normal">
                    Delicately sealed in light-proof bags that protect the precious crunch and oils.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Minimalist CSS Lotus Pond art box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-96 rounded-2xl border border-[#D8B06A]/30 bg-gradient-to-tr from-[#1c4887] to-[#102e5b] p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              {/* Star sparkles */}
              <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-[#D8B06A] rounded-full animate-ping" />
              <div className="absolute top-24 right-16 w-1 h-1 bg-[#D8B06A]/60 rounded-full" />
              <div className="absolute bottom-32 left-16 w-1 h-1 bg-[#D8B06A]/40 rounded-full" />

              {/* Gold border inner box */}
              <div className="absolute inset-4 border border-[#D8B06A]/10 rounded-xl pointer-events-none" />

              <div className="text-left z-10">
                <span className="block font-sans text-[8px] uppercase tracking-[0.3em] text-[#D8B06A] font-bold">
                  MANUTACTURING STANDARD
                </span>
                <span className="font-serif text-xs italic text-stone-300">
                  Mindfully Designed to Feel Clean & Calm
                </span>
              </div>

              {/* Center majestic gold/navy abstract lotus vector */}
              <div className="my-auto mx-auto relative w-40 h-40 flex items-center justify-center z-10">
                {/* Glowing light behind vector */}
                <div className="absolute w-24 h-24 rounded-full bg-[#D8B06A]/10 blur-xl"></div>
                
                {/* Lotus Abstract lines svg */}
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  className="w-32 h-32 stroke-[#D8B06A]/75"
                  strokeWidth="1.2"
                >
                  {/* Outer petals */}
                  <path d="M50 85 C30 70, 15 50, 15 35 C15 20, 30 25, 50 15 C70 25, 85 20, 85 35 C85 50, 70 70, 50 85" strokeWidth="1" />
                  {/* Mid petals */}
                  <path d="M50 85 C35 70, 25 55, 25 45 C25 35, 35 38, 50 25 C65 38, 75 35, 75 45 C75 55, 65 70, 50 85" />
                  {/* Inner petals */}
                  <path d="M50 85 C42 75, 35 60, 35 52 C35 45, 42 47, 50 35 C58 47, 65 45, 65 52 C65 60, 58 75, 50 85" strokeWidth="1.5" />
                  {/* Water line ripples below */}
                  <path d="M20 90 L80 90" strokeDasharray="3,3" />
                  <path d="M30 94 L70 94" strokeDasharray="5,5" />
                  {/* Rising golden seed beads */}
                  <circle cx="50" cy="12" r="1.5" fill="#D8B06A" />
                  <circle cx="28" cy="24" r="1" fill="#D8B06A" />
                  <circle cx="72" cy="24" r="1" fill="#D8B06A" />
                </svg>
              </div>

              <div className="text-center z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] font-serif text-[#D8B06A] block">
                  100% PURE WATER HARVESTED
                </span>
                <span className="text-[8px] uppercase tracking-widest text-stone-300/60 block mt-0.5">
                  Eco-Certified Single Origin
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
