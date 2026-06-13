/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Flavor, PricingTier, CartItem } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WhyPadma from "./components/WhyPadma";
import FlavourCollection from "./components/FlavourCollection";
import BrandStory from "./components/BrandStory";
import HealthBenefits from "./components/HealthBenefits";
import CustomerPersonas from "./components/CustomerPersonas";
import LaunchStrategy from "./components/LaunchStrategy";
import SocialProof from "./components/SocialProof";
import PricingSection from "./components/PricingSection";
import CommunityFeed from "./components/CommunityFeed";
import CheckoutModal from "./components/CheckoutModal";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Scroll Helpers
  const handleScrollToFlavours = () => {
    const el = document.getElementById("flavours");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cart operations
  const handleAddToBag = (flavor: Flavor) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === flavor.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === flavor.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: flavor.id,
            name: flavor.name,
            sku: `PDM-SNK-${flavor.id.substring(0, 3).toUpperCase()}`,
            price: flavor.price,
            quantity: 1,
            details: "50g Premium Single Pack",
          },
        ];
      }
    });
    // Dynamically pop open the gorgeous side-cart slide-drawer representation on items add! High end UX!
    setCartOpen(true);
  };

  const handleAddTierToCart = (tier: PricingTier) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === tier.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === tier.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: tier.id,
            name: tier.title,
            sku: `PDM-TIER-${tier.id.toUpperCase()}`,
            price: tier.price,
            quantity: 1,
            details: tier.subtitle,
          },
        ];
      }
    });
    setCartOpen(true);
  };

  const handleUpdateCartQty = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#0b1a30] text-[#F2EFE6] selection:bg-[#D8B06A]/30 selection:text-[#0b1a30] overflow-x-hidden antialiased">
      {/* Sticky Translucent Header */}
      <Header
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onOpenCheckout={() => setCheckoutOpen(true)}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      {/* Main Luxury Sections */}
      <main className="space-y-0">
        {/* 1. Full Screen Hero Section */}
        <Hero
          onScrollToFlavours={handleScrollToFlavours}
          onScrollToPricing={handleScrollToPricing}
        />

        {/* 2. Premium Trusts Bar Section */}
        <TrustBar />

        {/* 3. Competitive Snacking comparison table (Why Padma Wins) */}
        <WhyPadma />

        {/* 4. Luxury Flavour Collection */}
        <FlavourCollection onAddToBag={handleAddToBag} cart={cart} />

        {/* 5. Sanskrit Legend Brand Story (Born From The Lotus) */}
        <BrandStory />

        {/* 6. Scientific Health benefits research block */}
        <HealthBenefits />

        {/* 7. Selective Customer Profiles */}
        <CustomerPersonas />

        {/* 7.5 Interactive Launch & Market Strategy Pitch Deck */}
        <LaunchStrategy />

        {/* 8. Infinite Social Proof / Feedback quotes */}
        <SocialProof />

        {/* 9. Premium Purchase selection Section */}
        <PricingSection onAddTierToCart={handleAddTierToCart} cart={cart} />

        {/* 1 community signup and Instagram grid feed */}
        <CommunityFeed />
      </main>

      {/* 12. Elegant signature Footer */}
      <Footer />

      {/* SECURE CHECKOUT DIALOG ENGINE */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
