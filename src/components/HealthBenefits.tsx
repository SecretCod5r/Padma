/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Flame, Activity, CheckCircle, Heart, Leaf, ShieldAlert } from "lucide-react";

export default function HealthBenefits() {
  const benefits = [
    {
      title: "Low Calorie",
      tagline: "Weight Management Master",
      desc: "Our air-puff technique results in expanded seeds that are incredibly filling yet carry only 55 calories per cup. Swap typical starch-heavy snacks and lower deep organic visceral fat layers easily.",
      icon: <Flame className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "Protein Rich",
      tagline: "Lean muscle & post-workout",
      desc: "Packed with premium essential amino acids that fuel lean muscle repair and synthesis. An excellent protein source for vegetarians, fitness goers, and high-performance corporate athletes.",
      icon: <Activity className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "Gluten Free",
      tagline: "Ultra-clean bowel comfort",
      desc: "Naturally 100% gluten-free and easily digested. Ideal for people with wheat sensitivities, coeliac conditions, or anyone practicing a clean, low-bloating daily diet regime.",
      icon: <CheckCircle className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "High Soluble Fibre",
      tagline: "Robust digestive gut health",
      desc: "High dietary fibre content ensures smooth food transit, protects gut microbiomes, and delivers a sustained feeling of satiety. Perfect to curb sudden midnight cortisol cravings.",
      icon: <ShieldAlert className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "100% Natural Superfood",
      tagline: "The rich power of Euryale Ferox",
      desc: "Makhana contains powerful natural compound antioxidants like kaempferol, known for cell damage prevention, inflammation reduction, and slow aging benefits.",
      icon: <Leaf className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "Zero Preservatives",
      tagline: "No artificial dyes or sodium masks",
      desc: "Our recipes never contain hydrogenated fats, seed-oil stabilizers, fillers, or high-fructose corn syrup. We preserve crunch purely via airtight botanical nitrogen seals.",
      icon: <Heart className="w-6 h-6 text-[#D8B06A]" />
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0b1a30] relative overflow-hidden">
      {/* Decorative vertical lines background */}
      <div className="absolute inset-0 bg-[#D8B06a01] bg-[linear-gradient(to_right,#D8B06a02_1px,transparent_1px)] bg-[size:10rem_10rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
            Nutritional Superfood Curation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The Science Inside Padma
          </h2>
          <div className="w-12 h-1 bg-[#D8B06A] mx-auto mt-4 rounded-full" />
          <p className="text-stone-300 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed pt-2">
            Superfoods shouldn't require complex translation. We keep things clean, transparent, and backed by both ancient Ayurvedic insights and modern nutritional science.
          </p>
        </div>

        {/* Benefits Cards Grid Layout - Elegant bento grid like boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-[#122744]/40 border border-[#D8B06A]/20 hover:border-[#D8B06A]/60 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#D8B06A]/5 group relative"
            >
              {/* Top graphic border hover trace */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#D8B06A] transition-all duration-300 rounded-t-xl" />

              <div>
                {/* Gold rim decorative icon badge */}
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center p-2 mb-6 group-hover:bg-[#D8B06A]/10 group-hover:border-[#D8B06A] transition-all duration-300">
                  {b.icon}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#F2EFE6] tracking-wide mb-1 leading-tight group-hover:text-[#D8B06A] transition-colors duration-200">
                  {b.title}
                </h3>
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest block mb-4">
                  {b.tagline}
                </p>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>

              {/* Readability underline indicator */}
              <div className="w-10 border-b border-[#D8B06A]/20 mt-6 group-hover:w-full group-hover:border-[#D8B06A]/60 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Dynamic callout box at bottom of section */}
        <div className="mt-16 bg-white/5 rounded-xl border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-white text-lg font-bold">
              Looking for single-source laboratory transparency?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm font-normal">
              We publish independent batch pesticide and metal clearance lab sheets. Absolute food safety you can verify.
            </p>
          </div>
          <button
            onClick={() => {
              alert("🔍 Quality Lab Sheet PDF successfully requested and sent to your browser console logs!");
              console.log("📄 PADMA Lab Clearance Report. Batch ID: PDM-2026-MAK. Status: 100% Passed. Zero heavy metals, zero pesticide. Pure grade.");
            }}
            className="px-6 py-3 border border-[#D8B06A] text-[#D8B06A] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D8B06A] hover:text-[#0b1a30] transition-all duration-300 rounded whitespace-nowrap"
          >
            Download Lab Audit
          </button>
        </div>

      </div>
    </section>
  );
}
