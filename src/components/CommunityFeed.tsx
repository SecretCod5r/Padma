/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, Instagram, Heart, Sparkles, MessageCircle, ArrowRight, Check, X } from "lucide-react";
import { INSTAGRAM_POSTS } from "../data";

export default function CommunityFeed() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedInstaPostId, setSelectedInstaPostId] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
    } else {
      alert("Please specify a genuine, formatted email address to receive VIP codes!");
    }
  };

  return (
    <section className="py-24 bg-[#0b1a30] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* COMBINED GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* JOIN CLUB FORM COLUMN (LEFT 5 COLUMNS) */}
          <div className="lg:col-span-5 space-y-8 bg-gradient-to-tr from-[#122744] to-[#1a385f] text-[#F2EFE6] p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden border border-[#D8B06A]/20">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#D8B06A]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#D8B06A] uppercase block">
                Exclusive Cult Circle • 100% Free
              </span>
              <h2 className="font-serif text-3xl font-light tracking-tight text-white leading-tight">
                Join The <span className="italic font-normal text-[#D8B06A]">Crunch Club</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#D8B06A]" />
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light pt-2">
                Join our premium culinary members list to receive early access invites to secure botanical flavor drops, private discounted coupons, and early VIP invitations to high-end Delhi and Bombay gourmet launches.
              </p>
            </div>

            {/* List offerings */}
            <div className="space-y-3.5 relative z-10 pt-2 text-xs">
              <div className="flex items-start space-x-3 text-stone-200">
                <Check className="w-4.5 h-4.5 text-[#D8B06A] shrink-0 stroke-[2.5]" />
                <span>Special invitations to unlisted makhana test flavours</span>
              </div>
              <div className="flex items-start space-x-3 text-stone-200">
                <Check className="w-4.5 h-4.5 text-[#D8B06A] shrink-0 stroke-[2.5]" />
                <span>Complimentary gold-plated clips when buying over 3 sacks</span>
              </div>
              <div className="flex items-start space-x-3 text-stone-200">
                <Check className="w-4.5 h-4.5 text-[#D8B06A] shrink-0 stroke-[2.5]" />
                <span>Zero spam guarantee. Clean. Mindful. Uncluttered.</span>
              </div>
            </div>

            {/* Interactive Subscription state form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="relative z-10 pt-4 space-y-3">
                <div className="space-y-1.5">
                  <label htmlFor="crunch-email" className="block text-[9.5px] uppercase tracking-widest text-[#D8B06A] font-bold">
                    Email Address:
                  </label>
                  <input
                    id="crunch-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. vyom@gmail.com"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/15 hover:border-[#D8B06A]/40 focus:border-[#D8B06A] rounded text-white text-xs outline-none tracking-wide transition-all duration-300 placeholder:text-stone-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D8B06A] text-[#0b1a30] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-white hover:text-[#0b1a30] active:scale-[0.98] transition-all duration-300 rounded flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Request VIP Access Keycode</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="relative z-10 bg-[#D8B06A]/10 border border-[#D8B06A]/40 p-6 rounded-xl text-center space-y-3 animate-fade-in">
                <div className="mx-auto w-10 h-10 bg-[#D8B06A] text-[#0b1a30] rounded-full flex items-center justify-center font-bold text-lg shadow">
                  ✓
                </div>
                <h4 className="font-serif text-[#D8B06A] text-lg font-bold">
                  You are officially Registered.
                </h4>
                <p className="text-stone-200 text-xs leading-relaxed font-light">
                  A high-grade member invitation letter and standard ₹150 first order cash coupon code have been successfully queued and sent to your email! Welcome to the sanctum.
                </p>
              </div>
            )}
          </div>

          {/* INSTAGRAM GRID FEED COLUMN (RIGHT 7 COLUMNS) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs tracking-[0.3em] font-extrabold text-[#D8B06A] uppercase block">
                Visual Cinder • Aesthetic Curation
              </span>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-white">
                The Instagram Feed
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm font-normal">
                Tag your office desk setup, matcha morning routines or active meditation snack pouches at <span className="font-bold text-[#D8B06A]">@padma.snackbar</span> to be represented of our editorial brand universe.
              </p>
            </div>

            {/* Grid of posts */}
            <div className="grid grid-cols-2 gap-4">
              {INSTAGRAM_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedInstaPostId(post.id)}
                  className="bg-[#122744]/40 rounded-xl p-5 border border-[#D8B06A]/20 hover:border-[#D8B06A]/60 cursor-pointer flex flex-col justify-between h-48 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D8B06A]/5 group relative overflow-hidden"
                >
                  {/* Decorative faint camera lenses block */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Header info */}
                  <div className="flex items-center justify-between text-stone-400 z-10">
                    <span className="text-[10px] bg-white/5 text-[#F2EFE6] font-bold px-2 py-0.5 rounded-full border border-white/10 tracking-wider">
                      {post.category}
                    </span>
                    <Instagram className="w-4 h-4 text-stone-400 group-hover:text-[#D8B06A] transition-colors" />
                  </div>

                  {/* Placeholder abstract text graphic representation representation */}
                  <p className="text-stone-200 italic text-[11.5px] leading-relaxed relative z-10">
                    "{post.imageText}"
                  </p>

                  {/* Likes and interact row */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-3 z-10 mt-2">
                    <span className="text-[10.5px] font-semibold text-[#D8B06A] tracking-wider uppercase">
                      {post.tag}
                    </span>
                    <div className="flex items-center space-x-1.5 text-rose-400 text-xs font-semibold">
                      <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* INSTAGRAM EXPAND PREVIEW DIALOG */}
      {selectedInstaPostId && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedInstaPostId(null)}
        >
          <div
            className="bg-[#0d1e36] border border-[#D8B06A]/30 p-6 rounded-lg w-full max-w-sm text-center shadow-2xl relative text-[#F2EFE6]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedInstaPostId(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-[#F2EFE6]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#D8B06A] mb-4">
              <Instagram className="w-6 h-6 stroke-[1.5]" />
            </div>

            <h3 className="font-serif text-lg font-bold text-white block mb-1">
              Aesthetic Instagram Captured
            </h3>
            <span className="text-[9px] uppercase tracking-widest text-[#D8B06A] font-bold block mb-4">
              Featured on Official Page
            </span>

            <p className="font-sans text-xs sm:text-sm text-stone-300 italic border-l-2 border-[#D8B06A] pl-4 py-1.5 text-left mb-5 leading-relaxed bg-white/5 rounded-r">
              "{INSTAGRAM_POSTS.find((p) => p.id === selectedInstaPostId)?.imageText}"
            </p>

            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded border border-white/5 text-xs font-medium text-stone-300">
              <span>Likes: {INSTAGRAM_POSTS.find((p) => p.id === selectedInstaPostId)?.likes}</span>
              <span className="text-[#D8B06A] font-bold">@padma.snackbar verified</span>
            </div>

            <button
              onClick={() => setSelectedInstaPostId(null)}
              className="w-full mt-6 py-2.5 bg-[#D8B06A] text-[#0b1a30] text-xs font-bold tracking-[0.15em] uppercase hover:bg-white transition-all duration-300 rounded"
            >
              Close Story Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
