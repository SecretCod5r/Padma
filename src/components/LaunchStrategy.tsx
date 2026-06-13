/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  TrendingUp, 
  Target, 
  LineChart, 
  Calendar, 
  MapPin, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Users, 
  DollarSign, 
  CheckCircle2,
  Lock,
  Compass,
  ArrowUpRight
} from "lucide-react";

export default function LaunchStrategy() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "big-idea",
      title: "The Big Idea",
      subtitle: "The snack that lets Gen Z eat guilt-free, every day.",
      category: "POSITIONING & PROBLEM",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-6">
            <span className="text-xs bg-[#D8B06A]/10 text-[#D8B06A] border border-[#D8B06A]/20 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
              Positioning
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-tight">
              Padma Makhana: India's most luxe healthy snack for the health-conscious generation.
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">!</span>
                <p className="text-stone-300 text-xs sm:text-sm">
                  <span className="text-white font-semibold">The Problem:</span> Gen Z loves snacking but hates the guilt. Mass chips deliver 500+ empty calories. Protein bars are expensive, synthetic, and chalky.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <p className="text-stone-300 text-xs sm:text-sm">
                  <span className="text-white font-semibold">The Solution:</span> Padma makhana. Air-toasted premium lotus seeds. Only 55 calories per cup. High-protein, zero-guilt, and infinite craveable flavor options.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#122744]/40 border border-[#D8B06A]/20 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8B06A]/5 rounded-full blur-xl pointer-events-none" />
            <h4 className="font-serif text-white text-base font-semibold border-b border-white/5 pb-3">
              Core Brand Meaning
            </h4>
            
            <blockquote className="italic text-stone-300 text-xs sm:text-sm leading-relaxed border-l-2 border-[#D8B06A] pl-4">
              "Padma is lotus in Sanskrit. The lotus seed grows exclusively in pristine water — embodying our Shuddh promise of absolute purity."
            </blockquote>

            <div className="space-y-3 text-xs pt-2">
              <div className="flex justify-between border-b border-white/5 py-1 text-stone-400">
                <span>Brand Voice:</span>
                <span className="text-white font-semibold">Luxe, Approachable & Gym-savvy</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-1 text-stone-400">
                <span>Raw Material:</span>
                <span className="text-white font-semibold">Harvested from family farms in Bihar</span>
              </div>
              <div className="flex justify-between py-1 text-stone-400">
                <span>Process:</span>
                <span className="text-white font-semibold">Slow air-toasted, zero chemical preservatives</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "market-opp",
      title: "Market Opportunity",
      subtitle: "Capturing a fast-growing FMCG segment.",
      category: "NUMERICAL EVIDENCE",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#122744]/45 border border-[#D8B06A]/20 p-5 rounded-xl space-y-1">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#D8B06A]">₹3,200 Cr</div>
              <p className="text-[10px] sm:text-xs text-stone-300">
                India's healthy snack market size (2024). A massive playground.
              </p>
            </div>
            <div className="bg-[#122744]/45 border border-[#D8B06A]/20 p-5 rounded-xl space-y-1">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#D8B06A]">22% CAGR</div>
              <p className="text-[10px] sm:text-xs text-stone-300">
                Fastest growing segment within India's FMCG landscape.
              </p>
            </div>
            <div className="bg-[#122744]/45 border border-[#D8B06A]/20 p-5 rounded-xl space-y-1">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#D8B06A]">68% Demand</div>
              <p className="text-[10px] sm:text-xs text-stone-300">
                Of Gen Z actively seeking healthy snack choices to replace deep-fried products.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#122744]/20 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h4 className="font-serif text-white text-sm font-semibold">
                Market Segments Comparison Value
              </h4>
              <span className="text-[10px] text-stone-400 italic">Values in Crores (Cr)</span>
            </div>

            {/* Simulated interactive premium bar charts matching slide 3 */}
            <div className="space-y-5">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white">Makhana Market (Underbranded opportunity)</span>
                  <span className="text-[#D8B06A] font-bold">₹800 Cr</span>
                </div>
                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#D8B06A] to-[#E7D7C9] h-full rounded-full w-[80%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-300">Popcorn (Established segment)</span>
                  <span className="text-stone-300 font-bold">₹530 Cr</span>
                </div>
                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#122744] h-full rounded-full w-[53%]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-300">Protein Bars (Chalky alternative)</span>
                  <span className="text-stone-300 font-bold">₹400 Cr</span>
                </div>
                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#122744]/60 h-full rounded-full w-[40%]" />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 text-center italic pt-2">
              Sources: IMARC Group, Statista India, Nielsen 2024
            </p>
          </div>
        </div>
      )
    },
    {
      id: "launch-phases",
      title: "Launch Strategy Playbook",
      subtitle: "Inspired by Rhode Skin's influencer-first launch model.",
      category: "THE THREE-PHASE ROADMAP",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-stretch">
          {/* Phase 1 */}
          <div className="bg-[#122744]/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#D8B06A]/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#D8B06A] font-bold uppercase tracking-wider bg-[#D8B06A]/10 px-2.5 py-1 rounded">
                  Phase 1 (Pre-Launch)
                </span>
                <span className="text-xs text-stone-400 font-mono">Weeks 1–2</span>
              </div>
              <h4 className="font-serif text-white text-base font-bold">Mystery Seeding</h4>
              <ul className="space-y-2.5 text-xs text-stone-300">
                <li className="flex items-start space-x-2">
                  <span className="text-[#D8B06A] mt-0.5">•</span>
                  <span>Unbranded mystery pouches sent directly to 20 elite health micro-influencers.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D8B06A] mt-0.5">•</span>
                  <span>No upfront explanations — just custom tea cards promising: "something crisp is coming."</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D8B06A] mt-0.5">•</span>
                  <span>Instagram digital waitlist and premium sign-up keycode portal goes live.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/5 text-[10px] text-[#D8B06A] tracking-widest uppercase font-bold text-center">
              100% Social Seeding
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#122744]/80 border border-[#D8B06A]/40 rounded-xl p-5 flex flex-col justify-between shadow-xl relative scale-105 md:scale-100 z-10">
            <div className="absolute top-0 right-4 -translate-y-1/2 bg-[#D8B06A] text-[#0b1a30] text-[9px] uppercase tracking-widest font-extrabold px-3 py-0.5 rounded-full shadow">
              Big Event
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded">
                  Phase 2 (Day 0)
                </span>
                <span className="text-xs text-stone-300 font-mono">Week 3</span>
              </div>
              <h4 className="font-serif text-[#D8B06A] text-base font-bold">The Reveal Burst</h4>
              <ul className="space-y-2.5 text-xs text-stone-200">
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-0.5">•</span>
                  <span>All seeded influencers publish synchronized unboxing simultaneously on Instagram.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-0.5">•</span>
                  <span>Padma Instagram goes completely live with full aesthetic luxury identity layouts.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-0.5">•</span>
                  <span>First 100 customer orders get a free mystery flavor bottle in their package.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/5 text-[10px] text-white tracking-widest uppercase font-bold text-center">
              Viral Reveal
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#122744]/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#D8B06A]/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#D8B06A] font-bold uppercase tracking-wider bg-[#D8B06A]/10 px-2.5 py-1 rounded">
                  Phase 3 (Post-Launch)
                </span>
                <span className="text-xs text-stone-400 font-mono">Weeks 4–8</span>
              </div>
              <h4 className="font-serif text-white text-base font-bold">Build the Flywheel</h4>
              <ul className="space-y-2.5 text-xs text-stone-300">
                <li className="flex items-start space-x-2">
                  <span className="text-[#D8B06A] mt-0.5">•</span>
                  <span>Reposting all user-generated content (UGC) and desk setup posts continuously.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D8B06A] mt-0.5">•</span>
                  <span>Time-locked drops tied specifically to gym season and traditional Navratri moments.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#D8B06A] mt-0.5">•</span>
                  <span>Launch referral automated discount program to reward repeat healthy snackers.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/5 text-[10px] text-[#D8B06A] tracking-widest uppercase font-bold text-center">
              Sustained Growth
            </div>
          </div>
        </div>
      )
    },
    {
      id: "distribution",
      title: "Commercial Strategy",
      subtitle: "Sleek pricing & digital-first multichannel scaling.",
      category: "PRICING & CHANNELS",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-full">
          {/* PRICING */}
          <div className="lg:col-span-5 bg-[#122744]/45 border border-[#D8B06A]/20 p-6 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#D8B06A] font-bold">
                PRICING INTENT
              </span>
              <h4 className="font-serif text-white text-lg font-bold">Affordable Luxury Positioning</h4>
              <p className="text-stone-300 text-xs leading-relaxed">
                Positioned strategically above mass chips but comfortably below high-end protein supplements.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                <span>50g Single Serve</span>
                <span className="text-white font-bold text-sm">₹199</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                <span>150g Premium Value Pack</span>
                <span className="text-white font-bold text-sm">₹499</span>
              </div>
              <div className="flex items-center justify-between pb-2 text-xs">
                <span>Mixed Flavor Box (5 Launch Packs)</span>
                <span className="text-[#D8B06A] font-bold text-sm">₹999</span>
              </div>
            </div>

            <div className="text-[10.5px] text-stone-400 italic bg-white/5 p-3 rounded">
              "Low overheads digital structure allows high-grade ingredients like cold-pressed oils."
            </div>
          </div>

          {/* DISTRIBUTION ROADMAP */}
          <div className="lg:col-span-7 bg-[#122744]/20 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-[#D8B06A] font-bold block mb-4">
              DISTRIBUTION ROADMAP
            </span>
            
            <div className="relative border-l border-white/10 pl-5 space-y-5">
              <div className="relative">
                <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-[#D8B06A] ring-4 ring-[#D8B06A]/10" />
                <h5 className="font-serif text-[#F2EFE6] text-xs font-semibold">Month 1 (Launch)</h5>
                <p className="text-stone-300 text-[11px] mt-0.5">
                  Exclusive Brand Website + Direct-to-consumer Instagram Shop checkout.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-stone-500" />
                <h5 className="font-serif text-[#F2EFE6] text-xs font-semibold">Months 2–3 (Quick Commerce)</h5>
                <p className="text-stone-300 text-[11px] mt-0.5">
                  Strategic integrations on Blinkit, Zepto, and Swiggy Instamart for instant dispatch.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-stone-600" />
                <h5 className="font-serif text-[#F2EFE6] text-xs font-semibold">Months 3–4 (E-Commerce)</h5>
                <p className="text-stone-300 text-[11px] mt-0.5">
                  Entry into curated Amazon and Flipkart Premium Health sections.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-stone-700" />
                <h5 className="font-serif text-[#F2EFE6] text-xs font-semibold">Month 5+ (Offline Touchpoints)</h5>
                <p className="text-stone-300 text-[11px] mt-0.5">
                  Physical availability in Premium Gyms, Yoga Studios, and niche cosmetic centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "success-metrics",
      title: "Measuring Success",
      subtitle: "Firmly defined quantitative milestones (Month 1 to 6).",
      category: "KPIS & TRACTION GOALS",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch h-full">
          <div className="bg-[#122744]/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
            <span className="text-stone-400 text-[10px] tracking-wider uppercase">Social Audience</span>
            <div className="my-3 font-serif text-3xl font-bold text-[#D8B06A]">50K</div>
            <p className="text-[11px] text-stone-300">
              Curation-first Instagram followers targeted by Month 3.
            </p>
          </div>

          <div className="bg-[#122744]/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
            <span className="text-stone-400 text-[10px] tracking-wider uppercase">Launch Day Orders</span>
            <div className="my-3 font-serif text-3xl font-bold text-[#D8B06A]">500+</div>
            <p className="text-[11px] text-stone-300">
              Orders targeted in our immediate first launch week burst.
            </p>
          </div>

          <div className="bg-[#122744]/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
            <span className="text-stone-400 text-[10px] tracking-wider uppercase">Site Target Conversion</span>
            <div className="my-3 font-serif text-3xl font-bold text-[#D8B06A]">4.5%</div>
            <p className="text-[11px] text-stone-300">
              Optimized conversion rate metric on brand digital portal.
            </p>
          </div>

          <div className="bg-[#122744]/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
            <span className="text-stone-400 text-[10px] tracking-wider uppercase">Retention Rate</span>
            <div className="my-3 font-serif text-3xl font-bold text-[#D8B06A]">35%</div>
            <p className="text-[11px] text-stone-300">
              Repeat digital buyers rate reached by month 6 post-launch.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "timeline",
      title: "Tactical Timeline",
      subtitle: "Execute on a structured brand seeding calendar.",
      category: "LAUNCH MANAGEMENT GANTT",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-stretch">
          <div className="bg-[#122744]/30 border border-white/5 rounded-xl p-5 space-y-4">
            <div className="pb-3 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-[#D8B06A]">Months 1–2</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Current</span>
            </div>
            <h5 className="font-serif text-white text-sm font-semibold">Awareness Building</h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B06A]" />
                <span>20 key luxury health influencer posts</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B06A]" />
                <span>Reach target: 10K organic impressions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B06A]" />
                <span>Harvesting 500 waitlist registrations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B06A]" />
                <span>Launch of direct community chat link</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#122744]/30 border border-white/5 rounded-xl p-5 space-y-4">
            <div className="pb-3 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-stone-300">Months 3–4</span>
              <span className="text-[10px] text-stone-400">Scheduled</span>
            </div>
            <h5 className="font-serif text-white text-sm font-semibold">Frictionless Channels</h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                <span>Instant dispatch on major quick-comms</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                <span>Second major flavour formulation drop</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                <span>UGC and photo review campaign live</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                <span>Aiming for 25K Instagram followers</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#122744]/30 border border-white/5 rounded-xl p-5 space-y-4">
            <div className="pb-3 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-stone-300">Months 5–6</span>
              <span className="text-[10px] text-stone-400">Scheduled</span>
            </div>
            <h5 className="font-serif text-white text-sm font-semibold">Corporate Scaling</h5>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                <span>Niche gym/workout center contracts</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                <span>Amazon Prime verified brand listing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                <span>Referral and VIP loyal keys distribution</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                <span>Targeting total ₹15 Lakhs monthly revenue</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="strategy-deck" className="py-24 bg-[#091526] relative overflow-hidden border-y border-[#D8B06A]/10">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#D8B06A05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
              Prestige Dossier • Official Presentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white">
              Launch & <span className="italic font-normal text-[#D8B06A]">Marketing</span> Strategy
            </h2>
            <div className="w-12 h-0.5 bg-[#D8B06A]" />
          </div>
          
          <p className="text-stone-400 text-xs sm:text-sm font-normal max-w-md leading-relaxed mt-4 md:mt-0">
            Slide presentation based on the official brand dossier curated by <span className="text-[#D8B06A] font-semibold">Raaghvi Gautam</span>. Toggle slides below to inspect the commercial plan.
          </p>
        </div>

        {/* DEC CONTAINER */}
        <div className="bg-[#0b1a30] rounded-2xl border border-[#D8B06A]/30 overflow-hidden shadow-2xl relative">
          
          {/* Header area of the interactive slide */}
          <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 bg-[#091526]/80 text-xs">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8B06A]" />
              <span className="text-[#D8B06A] font-bold uppercase tracking-widest">{slides[activeSlide].category}</span>
            </div>
            <div className="text-stone-400 font-mono tracking-wider">
              Slide {activeSlide + 1} of {slides.length}
            </div>
          </div>

          {/* Slide display viewport */}
          <div className="p-8 sm:p-10 min-h-[380px] flex flex-col justify-between">
            <div className="space-y-2 mb-8">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight">
                {slides[activeSlide].title}
              </h3>
              <p className="text-[12px] sm:text-xs text-stone-400">
                {slides[activeSlide].subtitle}
              </p>
            </div>

            {/* Active Content Body */}
            <div className="flex-grow">
              {slides[activeSlide].content}
            </div>
          </div>

          {/* Slider Controllers */}
          <div className="p-6 border-t border-white/5 bg-[#091526]/80 flex items-center justify-between">
            {/* Steps bar indicator representation */}
            <div className="hidden sm:flex items-center space-x-1.5">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1 px-3 rounded-full transition-all duration-300 ${
                    i === activeSlide ? "bg-[#D8B06A] w-6" : "bg-white/10 hover:bg-white/20"
                  }`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3 ml-auto">
              <button
                onClick={handlePrev}
                className="p-2 sm:px-4 sm:py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-bold transition duration-200 flex items-center space-x-1 hover:text-[#D8B06A]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-xs uppercase tracking-widest">Back</span>
              </button>
              
              <button
                onClick={handleNext}
                className="p-2 sm:px-4 sm:py-2 bg-[#D8B06A] text-[#0b1a30] rounded-lg font-bold hover:bg-white transition duration-200 flex items-center space-x-1"
              >
                <span className="hidden sm:inline text-xs uppercase tracking-[0.15em]">Next</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Quick Summary Card */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#122744]/20 border border-[#D8B06A]/10 p-6 rounded-xl">
          <div className="flex items-start space-x-3.5">
            <Compass className="w-5 h-5 text-[#D8B06A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-white text-xs font-semibold tracking-wide uppercase">Dossier Access Details</h4>
              <p className="text-stone-300 text-[11px] mt-1 leading-relaxed">
                This presentation compiles analytical FMCG strategy, market estimates, pricing frameworks, and target rollout channels created to drive investment validation for the PADMA brand.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3.5 border-t border-white/5 md:border-t-0 md:border-l md:border-white/5 md:pl-6 pt-4 md:pt-0">
            <Award className="w-5 h-5 text-[#D8B06A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-white text-xs font-semibold tracking-wide uppercase">Brand Authenticity Standard</h4>
              <p className="text-stone-300 text-[11px] mt-1 leading-relaxed">
                We maintain direct transparency of scientific lab nutrition (55 kcal/cup) and Sanskrit heritage origins, creating a distinctive luxury identity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
