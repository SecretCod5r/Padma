/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Quote, Activity, Check, CircleAlert, Sparkles } from "lucide-react";
import { PERSONAS } from "../data";

export default function CustomerPersonas() {
  return (
    <section className="py-24 bg-[#0b1a30] relative overflow-hidden">
      {/* Decorative Gold luxury curves */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-tr from-[#D8B06A]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
            The Padma Collective • Live Personas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Curated For Clean Minds
          </h2>
          <div className="w-12 h-1 bg-[#D8B06A] mx-auto mt-4 rounded-full" />
          <p className="text-stone-300 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed pt-2">
            Meet the health-conscious pioneers moving away from seed oils, high-sodium junk, and flashy visual noise. Your body deserves elevated snack pairings.
          </p>
        </div>

        {/* Customer Profiles container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {PERSONAS.map((p, idx) => (
            <div
              key={p.id}
              className="bg-[#122744]/40 border border-[#D8B06A]/20 hover:border-[#D8B06A]/60 rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#173F7A]/5 group relative overflow-hidden"
            >
              {/* Top ambient color bar based on index */}
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
                  idx === 0 ? "from-[#173F7A] to-[#D8B06A]" : "from-[#D8B06A] to-[#E7D7C9]"
                }`}
              />

              {/* Header profile info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-5">
                  {/* Luxury editorial initial initials instead of flaky real photo */}
                  <div className="w-16 h-16 rounded-full bg-[#122744] border-2 border-[#D8B06A] flex items-center justify-center text-white font-serif text-xl font-bold tracking-widest shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    {p.name.substring(0, 2).toUpperCase()}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-serif text-2xl font-bold text-[#F2EFE6] tracking-wide">
                        {p.name}
                      </h3>
                      <span className="text-xs bg-[#D8B06A]/10 text-[#D8B06A] font-bold px-2 py-0.5 rounded">
                        Age: {p.age}
                      </span>
                    </div>
                    <p className="text-xs text-[#D8B06A] font-extrabold uppercase tracking-widest mt-0.5">
                      {p.role}
                    </p>
                  </div>
                </div>

                {/* Aesthetic Quote block */}
                <div className="relative bg-white/5 backdrop-blur-xs rounded-xl p-6 border border-white/10 shadow-sm italic text-stone-300 text-xs sm:text-[13.5px] leading-relaxed">
                  <Quote className="absolute -top-3 -left-2 w-7 h-7 text-[#D8B06A]/30 transform -rotate-12" />
                  <p className="relative z-10 pl-4">
                    "{p.quote}"
                  </p>
                </div>

                {/* Details layout grids */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {/* Habits */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block">
                      Daily Wellness Habits:
                    </span>
                    <ul className="space-y-1.5">
                      {p.habits.map((h, i) => (
                        <li key={i} className="flex items-center space-x-2 text-xs text-stone-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
                          <span className="font-medium text-stone-200">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seeking */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block">
                      Core Snacking Requirement:
                    </span>
                    <div className="flex items-start space-x-2 bg-white/5 border border-white/10 p-3 rounded-lg">
                      <Sparkles className="w-4 h-4 text-[#D8B06A] shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold text-[#F2EFE6] leading-normal">
                        {p.seeking}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom tag alignment */}
              <div className="border-t border-[#D8B06A]/10 pt-6 mt-8 flex items-center justify-between">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold block">
                  Verified Padma Snacker
                </span>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center space-x-1">
                  <span>● Active Member</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
