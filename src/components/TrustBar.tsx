/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Flame, ShieldCheck, Zap, Sun, Leaf, Sparkles } from "lucide-react";

export default function TrustBar() {
  const trusts = [
    {
      title: "55 Calories",
      subtitle: "Per Cup Roasted",
      desc: "Guilt-free grazing. Swap heavy processed dynamic calorie foods with light air puffed wellness.",
      icon: <Flame className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "High Protein",
      subtitle: "Nature's Fuel",
      desc: "Packed naturally with plant-based amino acids. Essential slow-release food fuel for Gen Z.",
      icon: <Zap className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "Air Toasted",
      subtitle: "Zero Seed Oil Roast",
      desc: "Never oil fried. Slowly popped with hot sterile air to preserve pristine nutritional profiles.",
      icon: <Sun className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "No Preservatives",
      subtitle: "Strict Clean Label",
      desc: "Completely free from chemical additives, artificial binding agents, colorants or msg.",
      icon: <ShieldCheck className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "Lotus Seeds",
      subtitle: "Superfood Origins",
      desc: "Harvested directly from organic fresh water ponds. Rooted deep in traditional Indian science.",
      icon: <Leaf className="w-6 h-6 text-[#D8B06A]" />
    },
    {
      title: "100% Natural",
      subtitle: "Earth Grown Salts",
      desc: "Flavoured using certified handloaded botanical spices and pure cold extracted essences.",
      icon: <Sparkles className="w-6 h-6 text-[#D8B06A]" />
    }
  ];

  return (
    <section className="bg-[#173F7A] py-16 relative overflow-hidden">
      {/* Decorative Gold luxury pattern circles background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#D8B06A10_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#D8B06A10_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle grid of premium text cards */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-6">
          {trusts.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#1c4887] border border-[#D8B06A]/10 hover:border-[#D8B06A]/35 rounded p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center group"
            >
              {/* Gold emblem icon */}
              <div className="mx-auto bg-[#173F7A] w-12 h-12 rounded-full border border-[#D8B06A]/20 flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#C9A564]/10 group-hover:border-[#D8B06A] transition-all duration-300">
                {t.icon}
              </div>

              {/* Title & info */}
              <div>
                <h3 className="font-serif text-[#D8B06A] text-[15px] font-bold tracking-wide">
                  {t.title}
                </h3>
                <p className="text-[#F2EFE6] text-[10.5px] uppercase font-semibold tracking-widest mt-1 opacity-90">
                  {t.subtitle}
                </p>
                <p className="text-[#E7D7C9]/70 text-[10.5px] mt-2.5 leading-relaxed font-normal">
                  {t.desc}
                </p>
              </div>

              {/* Little bottom alignment dots */}
              <div className="w-2 h-0.5 bg-[#D8B06A]/35 mx-auto mt-4 transition-all duration-300 group-hover:w-8 group-hover:bg-[#D8B06A]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
