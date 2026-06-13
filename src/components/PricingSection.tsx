/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, ShieldCheck, Sparkles, Flame } from "lucide-react";
import { PRICING_TIERS } from "../data";
import { PricingTier, CartItem } from "../types";

interface PricingSectionProps {
  onAddTierToCart: (tier: PricingTier) => void;
  cart: CartItem[];
}

export default function PricingSection({ onAddTierToCart, cart }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 bg-[#0b1a30] relative overflow-hidden">
      {/* Dynamic star pattern backdrop */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[radial-gradient(#D8B06A12_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header summary */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
            Prestige Acquisitions • Secure Checkout
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Curate Your Snacking Sanctum
          </h2>
          <div className="w-12 h-1 bg-[#D8B06A] mx-auto mt-4 rounded-full" />
          <p className="text-stone-300 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed pt-2">
            Order as a single pristine pack to discover your palate's desires, or unlock elite wellness levels with our handcrafted slide-out lacquer souvenir box collections.
          </p>
        </div>

        {/* Pricing Tiers Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isRec = tier.badge === "Recommended";
            const isElite = tier.badge === "Elite Wellness";
            const qtyInCart = cart.find((i) => i.id === tier.id)?.quantity || 0;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isRec
                    ? "bg-[#122744] text-white border-2 border-[#D8B06A] shadow-2xl shadow-[#D8B06A]/10 scale-105 z-10"
                    : "bg-[#122744]/40 text-[#F2EFE6] border border-[#D8B06A]/20"
                }`}
              >
                {/* Special Badges position layout */}
                {tier.badge && (
                  <span
                    className={`absolute -top-3.5 left-10 text-[9px] tracking-[0.2em] font-extrabold uppercase px-3 py-1 rounded-full shadow-md ${
                      isRec
                        ? "bg-[#D8B06A] text-[#0b1a30]"
                        : "bg-[#122744] text-[#D8B06A] border border-[#D8B06A]/30 font-bold"
                    }`}
                  >
                    {tier.badge}
                  </span>
                )}

                {/* Pricing Core Headers */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      {tier.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest font-extrabold text-[#D8B06A]">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Pricing detail numerals */}
                  <div className="flex items-baseline space-x-2 pb-5 border-b border-white/10">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                      ₹{tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span className="font-sans line-through text-stone-500 text-sm font-medium">
                        ₹{tier.originalPrice}
                      </span>
                    )}
                    <span className="text-[10.5px] font-medium tracking-wide text-stone-400">
                      / collection bundle
                    </span>
                  </div>

                  {/* Tiny description */}
                  <p className="text-xs leading-relaxed text-stone-300 font-normal">
                    {tier.description}
                  </p>

                  {/* Highlight banner in Elite */}
                  {tier.banner && (
                    <div className="bg-[#D8B06A]/10 border border-[#D8B06A]/30 rounded-lg p-3 flex items-center space-x-2 text-[10.5px] font-semibold text-[#D8B06A]">
                      <Sparkles className="w-4 h-4 shrink-0" />
                      <span>{tier.banner}</span>
                    </div>
                  )}

                  {/* Bullet features list */}
                  <ul className="space-y-3.5 pt-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-xs">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isRec ? "text-[#D8B06A] stroke-[2.5]" : "text-emerald-400 stroke-[2.5]"
                          }`}
                        />
                        <span className="text-stone-300 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acquire/Quick Add cart trigger */}
                <div className="mt-10 space-y-3 pt-6 border-t border-white/10">
                  <button
                    onClick={() => onAddTierToCart(tier)}
                    className={`w-full py-4 text-xs font-bold tracking-[0.25em] uppercase hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 rounded shadow-md ${
                      isRec
                        ? "bg-[#D8B06A] text-[#0b1a30] hover:bg-white"
                        : "bg-[#D8B06A]/10 text-[#D8B06A] border border-[#D8B06A]/30 hover:bg-[#D8B06A] hover:text-[#0b1a30]"
                    }`}
                  >
                    {qtyInCart > 0 ? (
                      <span>Acquired to Bag ({qtyInCart})</span>
                    ) : (
                      <span>Acquire Collection Pack</span>
                    )}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[9px] text-stone-400 font-bold uppercase tracking-widest leading-none">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D8B06A]" />
                    <span>Calculated priority insured delivery</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
