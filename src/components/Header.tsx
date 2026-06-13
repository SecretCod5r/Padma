/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShoppingBag, Menu, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { CartItem } from "../types";

interface HeaderProps {
  cart: CartItem[];
  onUpdateCartQty: (id: string, delta: number) => void;
  onRemoveFromCart: (id: string) => void;
  onOpenCheckout: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

export default function Header({
  cart,
  onUpdateCartQty,
  onRemoveFromCart,
  onOpenCheckout,
  cartOpen,
  setCartOpen,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 500;
  const deliveryLeft = freeShippingThreshold - cartTotal;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Translucent Premium Sticky Nav Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1a30]/85 backdrop-blur-md border-b border-[#D8B06A]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#F2EFE6] hover:text-[#D8B06A] transition-colors duration-200"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Elegant Nav Links Desktop Left */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/80">
            <a
              href="#flavours"
              onClick={(e) => handleNavClick(e, "flavours")}
              className="hover:text-[#D8B06A] transition-colors duration-300 relative group py-1"
            >
              Flavours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8B06A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#why-padma"
              onClick={(e) => handleNavClick(e, "why-padma")}
              className="hover:text-[#D8B06A] transition-colors duration-300 relative group py-1"
            >
              Why Padma
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8B06A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#brand-story"
              onClick={(e) => handleNavClick(e, "brand-story")}
              className="hover:text-[#D8B06A] transition-colors duration-300 relative group py-1"
            >
              Our Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8B06A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Central Logo */}
          <div className="flex flex-col items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-serif text-3xl font-bold tracking-[0.3em] text-[#F2EFE6] hover:text-[#D8B06A] transition-colors duration-500 pl-[0.3em]"
            >
              PADMA
            </a>
            <span className="hidden sm:block text-[8px] tracking-[0.4em] uppercase text-[#D8B06A] font-semibold mt-0.5 pointer-events-none">
              Shuddh • Lux • Crunch
            </span>
          </div>

          {/* Desktop Right & Interactive Bag */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#F2EFE6]/80">
              <a
                href="#benefits"
                onClick={(e) => handleNavClick(e, "benefits")}
                className="hover:text-[#D8B06A] transition-colors duration-300 relative group py-1"
              >
                Benefits
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8B06A] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "pricing")}
                className="hover:text-[#D8B06A] transition-colors duration-300 relative group py-1"
              >
                Shop Now
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D8B06A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Shopping cart icon with dynamic count badge */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 text-[#F2EFE6] hover:text-[#D8B06A] transition-colors duration-300 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Open luxury shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#D8B06A] text-[#0b1a30] text-[9.5px] font-bold rounded-full flex items-center justify-center animate-pulse shadow-md border-2 border-[#0b1a30]">
                  {cartCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN LINK OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-[#0b1a30] transition-transform duration-500 ease-in-out flex flex-col justify-between p-8 border-r border-[#D8B06A]/20 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-serif text-2xl tracking-[0.25em] text-[#F2EFE6] font-bold pl-[0.25em]">PADMA</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 border border-white/10 rounded-full text-[#F2EFE6] hover:bg-white/5"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 text-xl tracking-[0.2em] font-serif font-light text-[#F2EFE6] my-auto pl-4">
          <a
            href="#flavours"
            onClick={(e) => handleNavClick(e, "flavours")}
            className="hover:text-[#D8B06A] transition-colors duration-200"
          >
            Flavours Collection
          </a>
          <a
            href="#why-padma"
            onClick={(e) => handleNavClick(e, "why-padma")}
            className="hover:text-[#D8B06A] transition-colors duration-200"
          >
            Why Padma Wins
          </a>
          <a
            href="#brand-story"
            onClick={(e) => handleNavClick(e, "brand-story")}
            className="hover:text-[#D8B06A] transition-colors duration-200"
          >
            Born From The Lotus
          </a>
          <a
            href="#benefits"
            onClick={(e) => handleNavClick(e, "benefits")}
            className="hover:text-[#D8B06A] transition-colors duration-200"
          >
            Nutrition & Health
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "pricing")}
            className="hover:text-[#D8B06A] transition-colors duration-200"
          >
            Premium Pricing
          </a>
        </nav>

        <div className="border-t border-white/10 pt-6 text-center text-xs tracking-widest text-[#F2EFE6]/60">
          SHUDDH • LUX • CRUNCH
        </div>
      </div>

      {/* SHOPPING BAG DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-500 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setCartOpen(false)}
      >
        {/* Drawer container */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#0b1a30] border-l border-[#D8B06A]/20 shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
            cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#D8B06A]/20 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-[#D8B06A]" />
              <h2 className="font-serif text-lg tracking-widest uppercase font-semibold text-[#F2EFE6]">
                Your Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-1.5 hover:bg-white/5 rounded-full text-[#F2EFE6]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar for Free Priority Shipping */}
          <div className="bg-[#1c4887]/30 px-6 py-3 border-b border-[#D8B06A]/10">
            {cartTotal === 0 ? (
              <p className="text-xs text-center text-[#F2EFE6]/75 font-medium tracking-wide">
                Delicate premium shipping calculated at checkout.
              </p>
            ) : deliveryLeft > 0 ? (
              <div>
                <p className="text-xs text-[#F2EFE6]/80 font-medium font-sans">
                  Add <span className="font-bold text-white">₹{deliveryLeft}</span> more for{" "}
                  <span className="text-[#D8B06A] font-semibold">Free Priority Wooden Pouch Shipping</span>
                </p>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-[#D8B06A] h-full transition-all duration-500"
                    style={{ width: `${Math.min((cartTotal / freeShippingThreshold) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-[#F2EFE6]">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="tracking-wide text-stone-200">Your order qualifies for Premium Free Shipping</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full border border-dashed border-[#D8B06A]/20 flex items-center justify-center p-3 text-[#D8B06A]/40 mb-2">
                  <ShoppingBag className="w-full h-full stroke-[1.2]" />
                </div>
                <p className="font-serif italic text-base text-[#F2EFE6]/60">Your luxury bag is empty.</p>
                <p className="text-xs text-[#F2EFE6]/60 max-w-xs leading-relaxed">
                  Start stacking ancient crunch. Discover our award-winning Vedic Ghee or Dark Cocoa salted seeds.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="px-6 py-2.5 bg-[#D8B06A] text-[#0b1a30] text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#0b1a30] transition-all duration-300"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between space-x-4 pb-4 border-b border-[#D8B06A]/15 last:border-0 last:pb-0"
                >
                  {/* Bullet Spec Label */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-serif text-sm font-semibold tracking-wide text-[#F2EFE6]">
                        {item.name}
                      </h4>
                      <span className="font-mono text-sm font-semibold text-[#F2EFE6]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#D8B06A] font-semibold tracking-wider uppercase mt-0.5">
                      {item.details}
                    </p>
                    <span className="text-[10.5px] font-medium text-white/50 block mt-1">
                      SKU: {item.sku}
                    </span>

                    {/* Quantity Selector controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D8B06A]/20 rounded-md overflow-hidden bg-white/5 text-[#F2EFE6]">
                        <button
                          onClick={() => onUpdateCartQty(item.id, -1)}
                          className="px-2 py-1 text-stone-300 hover:bg-white/10"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 font-mono text-xs font-semibold text-[#F2EFE6]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateCartQty(item.id, 1)}
                          className="px-2 py-1 text-stone-300 hover:bg-white/10"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-stone-400 hover:text-red-400 p-1.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Checkout Panel */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#091526] border-t border-[#D8B06A]/20 space-y-4">
              <div className="space-y-1.5 text-xs text-[#F2EFE6]/90">
                <div className="flex justify-between text-[#F2EFE6]/80">
                  <span>Cart Subtotal</span>
                  <span className="font-mono font-medium">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-[#F2EFE6]/80">
                  <span>Priority Secure Packaging</span>
                  <span className="text-[#D8B06A] font-semibold">FREE (Launch Offer)</span>
                </div>
                <div className="flex justify-between text-[#F2EFE6]/80">
                  <span>Shipping</span>
                  <span className="font-mono">
                    {cartTotal >= freeShippingThreshold ? (
                      <span className="text-emerald-400 font-semibold uppercase">Free</span>
                    ) : (
                      "₹80"
                    )}
                  </span>
                </div>
                <div className="border-t border-white/5 my-2 pt-2 flex justify-between text-sm font-semibold text-white">
                  <span>Total (Incl. tax)</span>
                  <span className="font-mono text-base font-bold text-[#D8B06A]">
                    ₹{cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 80)}
                  </span>
                </div>
              </div>

              {/* Secure Checkout CTA */}
              <button
                onClick={() => {
                  setCartOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-4 bg-[#D8B06A] text-[#0b1a30] text-xs font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-[#0b1a30] transition-all duration-300 flex items-center justify-center space-x-2 rounded shadow-md group animate-pulse-slow"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <p className="text-[10px] text-center text-stone-400 leading-normal">
                🔒 256-Bit SSL Encrypted. Supports all major Indian bank UPI, Cards & Netbanking.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
