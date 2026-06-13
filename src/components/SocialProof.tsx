/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, MessageCircle, Heart, Instagram } from "lucide-react";
import { REVIEWS } from "../data";

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#0b1a30] relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D8B06A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BIG STATEMENT STATS PANEL - LUXURY HEADING */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center border-b border-white/10 pb-16 mb-20">
          
          <div className="space-y-1">
            <span className="block font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              4.9<span className="text-[#D8B06A]">/</span>5
            </span>
            <div className="flex justify-center space-x-1 py-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D8B06A] text-[#D8B06A]" />
              ))}
            </div>
            <span className="block text-[10px] sm:text-xs text-stone-400 font-bold uppercase tracking-widest">
              Aggregate Snacker Rating
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              10,000+
            </span>
            <div className="h-5 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Subscribed</span>
            </div>
            <span className="block text-[10px] sm:text-xs text-stone-400 font-bold uppercase tracking-widest">
              Active Daily Snackers
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              100%
            </span>
            <div className="h-5 flex items-center justify-center">
              <span className="text-[#D8B06A] font-bold text-[11px] uppercase tracking-wide">VEGAN & AMINO CLEAN</span>
            </div>
            <span className="block text-[10px] sm:text-xs text-stone-400 font-bold uppercase tracking-widest">
              Seed Oil Free Standard
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              A2
            </span>
            <div className="h-5 flex items-center justify-center">
              <span className="text-[#D8B06A] font-serif font-semibold text-xs animate-bounce-subtle">पद्म</span>
            </div>
            <span className="block text-[10px] sm:text-xs text-stone-400 font-bold uppercase tracking-widest">
              Vedic Heritage Infused
            </span>
          </div>

        </div>

        {/* CUSTOMER REVIEWS PORTRAYAL */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
            Love Letters • verified reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The Padma Experience
          </h2>
          <div className="w-12 h-1 bg-[#D8B06A] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className={`rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative ${
                r.highlight
                  ? "bg-[#122744]/70 border-2 border-[#D8B06A] shadow-md"
                  : "bg-[#122744]/20 border border-white/10"
              }`}
            >
              {/* Star line */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D8B06A] text-[#D8B06A]" />
                    ))}
                  </div>
                  {/* Small Instagram icon/stamp */}
                  {r.source.includes("Instagram") ? (
                    <Instagram className="w-4 h-4 text-[#D8B06A]" />
                  ) : (
                    <span className="text-[8.5px] bg-white/5 border border-white/10 text-stone-300 font-bold px-1.5 py-0.5 rounded">
                      Secured
                    </span>
                  )}
                </div>

                {/* Body quote text */}
                <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed font-normal italic">
                  "{r.text}"
                </p>
              </div>

              {/* Reviewer Details footer */}
              <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center">
                <div>
                  <h4 className="font-serif text-[#F2EFE6] text-sm font-bold tracking-wide leading-tight">
                    {r.name}
                  </h4>
                  <span className="text-[10.5px] text-stone-400 font-medium tracking-wide">
                    @{r.handle}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-bold">
                    Profile status
                  </span>
                  <span className="text-[9.5px] font-semibold text-[#D8B06A] uppercase">
                    {r.source}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social hashtag footer quote */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-stone-400 text-xs tracking-widest uppercase font-semibold">
            Post an aesthetic portrait of your pack with <span className="text-[#D8B06A] font-bold">#PadmaCrunch</span> to claim early entry keycodes.
          </p>
        </div>

      </div>
    </section>
  );
}
