/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Instagram, TreePine, Facebook, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#091526] text-white pt-20 pb-10 relative overflow-hidden border-t-2 border-[#D8B06A]/30">
      {/* Blueprint lines on dark blue space */}
      <div className="absolute inset-0 bg-[#D8B06a02] bg-[linear-gradient(to_right,#D8B06a03_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Core links layout groups */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
          {/* Logo and short bio */}
          <div className="space-y-5">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-[0.3em] text-[#D8B06A]">
                PADMA
              </h2>
              <span className="text-[9px] tracking-[0.35em] text-[#E7D7C9] uppercase block font-semibold mt-1">
                Shuddh • Lux • Crunch
              </span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed font-light">
              India's first ultra-luxury healthy food snack brand. Slowly roasted water-harvested lotus seeds designed elegantly in clean, pristine style bags for modern health champions.
            </p>
            {/* Social handles visual icons */}
            <div className="flex space-x-4 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#D8B06A] hover:border-[#D8B06A] transition-colors duration-300 bg-white/5"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#D8B06A] hover:border-[#D8B06A] transition-colors duration-300 bg-white/5"
                title="Connect on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links nav standard */}
          <div className="space-y-4">
            <h4 className="font-serif text-[#D8B06A] text-[14px] font-bold tracking-wider uppercase">
              The Collection
            </h4>
            <div className="w-8 h-0.5 bg-[#D8B06A]/30" />
            <nav className="flex flex-col space-y-2.5 text-xs text-stone-300 font-light font-sans tracking-wide">
              <a href="#flavours" className="hover:text-[#D8B06A] transition-colors">Himalayan Salt</a>
              <a href="#flavours" className="hover:text-[#D8B06A] transition-colors">Vedic Ghee Popped</a>
              <a href="#flavours" className="hover:text-[#D8B06A] transition-colors">Smoked African Chili</a>
              <a href="#flavours" className="hover:text-[#D8B06A] transition-colors">Mango & Mild Paprika</a>
              <a href="#flavours" className="hover:text-[#D8B06A] transition-colors">70% Salted Dark Noir</a>
            </nav>
          </div>

          {/* Support links */}
          <div className="space-y-4">
            <h4 className="font-serif text-[#D8B06A] text-[14px] font-bold tracking-wider uppercase">
              Client Care & Lab
            </h4>
            <div className="w-8 h-0.5 bg-[#D8B06A]/30" />
            <nav className="flex flex-col space-y-2.5 text-xs text-stone-300 font-light font-sans tracking-wide">
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  alert("📄 Batch metal analysis sheet sent to your storage list!");
                }}
                className="hover:text-[#D8B06A] transition-colors"
              >
                Pesticide & Metal Audits
              </a>
              <a href="#why-padma" className="hover:text-[#D8B06A] transition-colors">Bio Comparison Sheets</a>
              <a href="#" className="hover:text-[#D8B06A] transition-colors">Sanskrit Origin Story</a>
              <a href="#" className="hover:text-[#D8B06A] transition-colors">Corporate Gifting Elite</a>
              <a href="#" className="hover:text-[#D8B06A] transition-colors">FAQ & Crunch Club</a>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-[#D8B06A] text-[14px] font-bold tracking-wider uppercase">
              The Lotus Sanctum
            </h4>
            <div className="w-8 h-0.5 bg-[#D8B06A]/30" />
            
            <div className="space-y-3.5 text-xs text-stone-300 font-light">
              <p className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D8B06A] shrink-0 mt-0.5" />
                <span>Lotus Sanctum HQ, 4th Floor, Pali Hill Road, Bandra West, Mumbai, 400050.</span>
              </p>
              <p className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#D8B06A] shrink-0" />
                <a href="mailto:care@padma.co" className="hover:text-[#D8B06A] transition-colors">care@padma.co</a>
              </p>
              <p className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D8B06A] shrink-0" />
                <a href="tel:+9122849202" className="hover:text-[#D8B06A] transition-colors">+91 22 849 202</a>
              </p>
            </div>
          </div>

        </div>

        {/* Middle decorative citation bar */}
        <div className="border-t border-b border-white/5 py-4 flex flex-col md:flex-row items-center justify-between text-[10.5px] text-stone-400 font-bold uppercase tracking-widest gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4.5 h-4.5 text-[#D8B06A]" />
            <span>FSSAI Certified Premium Curation. License: #10026384291</span>
          </div>
          <div className="flex space-x-4">
            <span>● 100% Recyclable Pouches</span>
            <span>● Direct-Trade Family Popped</span>
          </div>
        </div>

        {/* Copyright and legal standard */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-400 font-light gap-4">
          <p>© {currentYear} PADMA Snacking Co. All rights reserved. Registered, Mumbai. India.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#D8B06A] transition-colors pt-1">Privacy Standard</a>
            <a href="#" className="hover:text-[#D8B06A] transition-colors pt-1">Sale Covenants</a>
            <a href="#" className="hover:text-[#D8B06A] transition-colors pt-1">Sitemap Index</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
