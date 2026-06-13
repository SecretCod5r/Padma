/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Plus, Check, Star, Info, X } from "lucide-react";
import { FLAVORS } from "../data";
import { Flavor, CartItem } from "../types";
import PackagingMockup from "./PackagingMockup";

interface FlavourCollectionProps {
  onAddToBag: (flavor: Flavor) => void;
  cart: CartItem[];
}

export default function FlavourCollection({ onAddToBag, cart }: FlavourCollectionProps) {
  const [selectedNutritionFlavor, setSelectedNutritionFlavor] = useState<Flavor | null>(null);

  // Check if a specific pack flavor is already in the bag
  const getQuantityInCart = (flavorId: string) => {
    const item = cart.find((i) => i.id === flavorId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="flavours" className="py-24 bg-[#0b1a30] relative overflow-hidden">
      {/* Decorative radial accents */}
      <div className="absolute w-[400px] h-[400px] bg-[#D8B06A]/10 rounded-full blur-[100px] top-1/4 -left-48 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-[#173F7A]/10 rounded-full blur-[100px] bottom-1/4 -right-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with fine copy */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
            Signature Snack Editions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The Live Launch Flavours
          </h2>
          <div className="w-12 h-1 bg-[#D8B06A] mx-auto mt-4 rounded-full" />
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed pt-2">
            Five highly curated botanical and superfood flavour recipes. Slowly toasted in small batches, air puffed to a majestic lightness. Exquisite. Clean. Absolute.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 items-stretch">
          {FLAVORS.map((flavor) => {
            const qty = getQuantityInCart(flavor.id);
            const isDark = flavor.id === "peri-peri" || flavor.id === "dark-chocolate";

            return (
              <div
                key={flavor.id}
                className="bg-[#122744]/40 border border-[#D8B06A]/20 hover:border-[#D8B06A]/60 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#D8B06A]/5 group relative"
              >
                {/* Popularity star on dark chocolate */}
                {flavor.rating === 5.0 && (
                  <div className="absolute top-4 right-4 bg-[#D8B06A] text-[#0b1a30] text-[8px] tracking-widest font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm z-10 flex items-center space-x-1">
                    <Star className="w-2 h-2 fill-[#0b1a30]" />
                    <span>Perfection</span>
                  </div>
                )}

                {/* Micro Packaging Mockup Center stage container */}
                <div className="w-full flex justify-center py-6 relative overflow-hidden rounded bg-stone-300/5 mb-4 transition-colors duration-300 group-hover:bg-[#122744]/70">
                  <PackagingMockup flavor={flavor} size="sm" isFloating={false} />
                </div>

                {/* Card Text Descriptions */}
                <div className="space-y-2.5 flex-1 flex flex-col justify-start">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-[#F2EFE6] text-lg font-bold leading-tight group-hover:text-[#D8B06A] transition-colors duration-200">
                      {flavor.name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-300 font-normal leading-relaxed min-h-[50px]">
                    {flavor.description}
                  </p>

                  {/* Highlights Bullet Tags */}
                  <div className="flex flex-wrap gap-1 py-1">
                    {flavor.highlights.slice(0, 2).map((hl, i) => (
                      <span
                        key={i}
                        className="text-[9px] bg-white/5 border border-white/10 text-white/80 px-2 py-0.5 rounded-md font-semibold tracking-wide"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>

                  {/* Nutrition Highlights preview row */}
                  <div className="grid grid-cols-2 gap-2 border-t border-b border-white/10 py-2.5 my-1">
                    <div className="text-left">
                      <span className="block text-[8px] text-stone-400 uppercase tracking-widest">
                        Calories Per Cup
                      </span>
                      <span className="font-mono text-xs font-bold text-white">
                        {flavor.nutrition.calories}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[8px] text-stone-400 uppercase tracking-widest">
                        A2 Protein
                      </span>
                      <span className="font-mono text-xs font-bold text-white">
                        {flavor.nutrition.protein}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Cart/Nutrition Interactive buttons */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-white">
                      ₹{flavor.price}
                      <span className="text-[10px] font-sans font-medium text-stone-400 block -mt-1">
                        Pristine 85g Pack
                      </span>
                    </span>

                    {/* Nutrition detail modal sheet trigger icon */}
                    <button
                      onClick={() => setSelectedNutritionFlavor(flavor)}
                      className="p-1.5 text-stone-400 hover:text-white hover:bg-white/5 rounded"
                      title="View complete macro composition"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Bag trigger */}
                  <button
                    onClick={() => onAddToBag(flavor)}
                    className={`w-full py-2.5 text-[10.5px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded flex items-center justify-center space-x-2 ${
                      qty > 0
                        ? "bg-[#D8B06A] text-[#0b1a30] hover:bg-[#cdaf75]"
                        : "bg-[#D8B06A]/10 text-[#D8B06A] border border-[#D8B06A]/30 hover:bg-[#D8B06A] hover:text-[#0b1a30]"
                    }`}
                  >
                    {qty > 0 ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added ({qty})</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add To Bag</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* FULL DETAILED NUTRITION DIALOG OVERLAY */}
      {selectedNutritionFlavor && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedNutritionFlavor(null)}
        >
          <div
            className="bg-[#0d1e36] border border-[#D8B06A]/30 p-6 rounded-lg w-full max-w-sm shadow-2xl relative text-[#F2EFE6]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pop Close */}
            <button
              onClick={() => setSelectedNutritionFlavor(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-[#F2EFE6]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Flavor identity in popup */}
            <div className="text-center pb-4 border-b border-white/10">
              <span className="text-[9px] tracking-widest text-[#D8B06A] font-extrabold uppercase">
                Botanical Nutrition Sheet
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-1">
                {selectedNutritionFlavor.name}
              </h3>
              <p className="text-xs text-stone-300 italic mt-0.5">
                "{selectedNutritionFlavor.tagline}"
              </p>
            </div>

            {/* Nutrition Facts style Grid */}
            <div className="py-5 space-y-3">
              <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1.5 font-medium">
                <span className="text-stone-300">Serving Size</span>
                <span className="font-sans text-white font-bold">1 Cup (approx. 28g)</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1.5">
                <span className="font-bold text-[#D8B06A]">Calories</span>
                <span className="font-mono text-sm font-bold text-[#D8B06A]">
                  {selectedNutritionFlavor.nutrition.calories}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1.5">
                <span className="text-stone-300 font-semibold">Protein</span>
                <span className="font-mono text-white font-bold">
                  {selectedNutritionFlavor.nutrition.protein}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1.5">
                <span className="text-stone-300 font-semibold">Healthy Fats</span>
                <span className="font-mono text-white font-medium">
                  {selectedNutritionFlavor.nutrition.fat}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1.5">
                <span className="text-stone-300 font-semibold">Carbohydrates</span>
                <span className="font-mono text-white font-medium">
                  {selectedNutritionFlavor.nutrition.carbs}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1.5">
                <span className="text-emerald-400 font-semibold">Dietary Fibre</span>
                <span className="font-mono text-emerald-300 font-bold">4.2g (Pure Soluble)</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-1">
                <span className="text-stone-300 font-semibold">Trans Fat</span>
                <span className="font-mono text-white">0g (Absolutely Clean)</span>
              </div>
            </div>

            {/* Quality Seals list */}
            <div className="bg-white/5 rounded p-3 text-[10.5px] text-stone-300 leading-relaxed space-y-1.5 border border-white/5">
              <p className="flex items-start">
                <span className="text-[#D8B06A] mr-1.5">✓</span>
                <span>Crafted under ultra-sanitary nitrogen gas flush for supreme raw natural crisp retention.</span>
              </p>
              <p className="flex items-start">
                <span className="text-[#D8B06A] mr-1.5">✓</span>
                <span>Processed at standard cold environments keeping minerals in active states.</span>
              </p>
            </div>

            {/* Modal close bottom */}
            <button
              onClick={() => setSelectedNutritionFlavor(null)}
              className="w-full mt-5 py-2.5 bg-[#D8B06A] text-[#0b1a30] text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 rounded"
            >
              Acknowledge Spec Sheet
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
