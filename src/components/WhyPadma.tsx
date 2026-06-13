/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, X, Star } from "lucide-react";

export default function WhyPadma() {
  const comparisonData = [
    {
      metric: "CAL / SERVING",
      padma: { text: "55 kcal", positive: true, highlight: "Lowest calories" },
      lays: { text: "160 kcal", positive: false },
      popcorn: { text: "130 kcal", positive: false },
      ritebite: { text: "180 kcal", positive: false },
      bc4700: { text: "60 kcal", positive: true }
    },
    {
      metric: "PROTEIN",
      padma: { text: "4g", positive: true, highlight: "High bio-absorbable" },
      lays: { text: "2g", positive: false },
      popcorn: { text: "3g", positive: false },
      ritebite: { text: "10g", positive: true },
      bc4700: { text: "4g", positive: true }
    },
    {
      metric: "PRICE (₹)",
      padma: { text: "₹180–220", positive: true, highlight: "Affordable luxury" },
      lays: { text: "₹20–50", positive: false },
      popcorn: { text: "₹30–60", positive: false },
      ritebite: { text: "₹90–140", positive: false },
      bc4700: { text: "₹200–250", positive: false }
    },
    {
      metric: "NATURAL?",
      padma: { text: "Yes", positive: true },
      lays: { text: "No", positive: false },
      popcorn: { text: "Partial", positive: false },
      ritebite: { text: "No", positive: false },
      bc4700: { text: "Yes", positive: true }
    },
    {
      metric: "AESTHETIC BRAND?",
      padma: { text: "Yes", positive: true, highlight: "Editorial/Rhode Style" },
      lays: { text: "Somewhat", positive: false },
      popcorn: { text: "No", positive: false },
      ritebite: { text: "No", positive: false },
      bc4700: { text: "Somewhat", positive: false }
    }
  ];

  return (
    <section id="why-padma" className="py-24 bg-[#0b1a30] relative overflow-hidden">
      {/* Editorial Watermark background */}
      <div className="absolute right-0 top-1/4 opacity-2 pointer-events-none text-[#D8B06A]">
        <span className="font-serif text-[12rem] font-bold select-none uppercase tracking-[0.2em] pointer-events-none">
          LOTUS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slogan Head */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
            Pure Comparison • Absolute Transparency
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Why Padma Wins
          </h2>
          <div className="w-12 h-1 bg-[#D8B06A] mx-auto mt-4 rounded-full" />
          <p className="text-stone-300 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed pt-2">
            Padma's edge: lower calories than chips, cleaner than bars, and a luxury brand identity no makhana brand has attempted yet.
          </p>
        </div>

        {/* COMPARISON GRAPHIC CONTAINER */}
        <div className="overflow-x-auto rounded-xl border border-[#D8B06A]/20 shadow-xl bg-[#091526]/80 backdrop-blur-md">
          <table className="w-full text-left border-collapse min-w-[850px]">
            {/* Table Header Row */}
            <thead>
              <tr className="border-b border-[#D8B06A]/20 bg-[#091526] text-[#F2EFE6]">
                <th className="py-6 px-6 font-serif text-xs font-bold tracking-wider w-1/6">
                  BRAND / PRODUCT
                </th>
                <th className="py-6 px-6 relative w-1/6 bg-[#122744] text-center">
                  {/* Highlight bar topmost */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D8B06A]" />
                  <div className="flex items-center justify-center space-x-1 py-1 text-[#D8B06A] tracking-[0.1em] font-serif text-sm font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#D8B06A] stroke-[#D8B06A]" />
                    <span className="uppercase">padma makhana</span>
                  </div>
                </th>
                <th className="py-6 px-6 text-center text-[#F2EFE6]/70 font-sans tracking-wider text-xs uppercase font-semibold w-1/6">
                  Lay's chips
                </th>
                <th className="py-6 px-6 text-center text-[#F2EFE6]/70 font-sans tracking-wider text-xs uppercase font-semibold w-1/6">
                  Popcorn (Act II)
                </th>
                <th className="py-6 px-6 text-center text-[#F2EFE6]/70 font-sans tracking-wider text-xs uppercase font-semibold w-1/6">
                  RiteBite protein bar
                </th>
                <th className="py-6 px-6 text-center text-[#F2EFE6]/70 font-sans tracking-wider text-xs uppercase font-semibold w-1/6">
                  4700BC makhana
                </th>
              </tr>
            </thead>

            {/* Table Body rows */}
            <tbody className="divide-y divide-[#D8B06A]/10 text-xs text-[#F2EFE6]">
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/5 transition-colors duration-200 group"
                >
                  {/* Metric column */}
                  <td className="py-5 px-6 font-semibold text-[#F2EFE6]/90 tracking-wide text-xs">
                    {row.metric}
                  </td>

                  {/* PADMA WINNING CELL KEY ROW */}
                  <td className="py-5 px-6 text-center bg-[#D8B06A]/5 text-[#F2EFE6] font-medium border-x border-[#D8B06A]/20 relative">
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <div className="flex items-center space-x-1 font-bold text-white text-[13px]">
                        <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                        <span>{row.padma.text}</span>
                      </div>
                      {row.padma.highlight && (
                        <span className="text-[9px] text-[#D8B06A] font-bold uppercase tracking-wider">
                          {row.padma.highlight}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Lays cell */}
                  <td className="py-5 px-6 text-center text-[#F2EFE6]/60">
                    <div className="flex items-center justify-center space-x-1">
                      {row.lays.positive ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-[#F2EFE6]/40" />
                      )}
                      <span>{row.lays.text}</span>
                    </div>
                  </td>

                  {/* Popcorn cell */}
                  <td className="py-5 px-6 text-center text-[#F2EFE6]/60">
                    <div className="flex items-center justify-center space-x-1">
                      {row.popcorn.positive ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-[#F2EFE6]/40" strokeWidth={1.5} />
                      )}
                      <span>{row.popcorn.text}</span>
                    </div>
                  </td>

                  {/* Ritebite cell */}
                  <td className="py-5 px-6 text-center text-[#F2EFE6]/60">
                    <div className="flex items-center justify-center space-x-1">
                      {row.ritebite.positive ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-[#F2EFE6]/40" strokeWidth={1.5} />
                      )}
                      <span>{row.ritebite.text}</span>
                    </div>
                  </td>

                  {/* 4700BC makhana cell */}
                  <td className="py-5 px-6 text-center text-[#F2EFE6]/60">
                    <div className="flex items-center justify-center space-x-1">
                      {row.bc4700.positive ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-[#F2EFE6]/40" strokeWidth={1.5} />
                      )}
                      <span>{row.bc4700.text}</span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Highlight footer notes */}
        <div className="mt-8 text-center">
          <p className="text-[10px] sm:text-xs text-[#D8B06A]/75 tracking-wider uppercase font-semibold">
            ★ Comparison based on typical branded snacks sold in India (Audit 2026)
          </p>
        </div>

      </div>
    </section>
  );
}
