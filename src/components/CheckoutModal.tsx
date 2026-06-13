/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, ShieldCheck, CreditCard, ChevronRight, CheckCircle, Smartphone, HelpCircle } from "lucide-react";
import { CartItem } from "../types";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart: () => void;
}

export default function CheckoutModal({ isOpen, onClose, cart, onClearCart }: CheckoutModalProps) {
  const [step, setStep] = useState(1); // 1 = details / payment, 2 = payment progress, 3 = order confirmed!
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Form states
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [paymentOption, setPaymentOption] = useState("upi");

  // Receipt ID randomly generated
  const [orderId, setOrderId] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      setStep(1);
      setPromoCode("");
      setPromoApplied(false);
      setPromoDiscount(0);
      const randomId = "PDM-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(randomId);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeDelivery = cartTotal >= 500;
  const shippingFee = isFreeDelivery ? 0 : 80;
  const calculatedTax = Math.round(cartTotal * 0.05); // 5% standard GST
  const discountAmount = promoApplied ? promoDiscount : 0;
  const finalPayable = cartTotal + shippingFee + calculatedTax - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoCode.toUpperCase().trim();
    if (cleanCode === "PADMA50" || cleanCode === "VIP50" || cleanCode === "CRUNCHCLUB") {
      setPromoApplied(true);
      setPromoDiscount(150);
      alert("🎟️ Golden VIP Promo Applied! You saved flat ₹150.");
    } else {
      alert("❌ Code not recognized of current active launches. Try code: PADMA50 or VIP50 !");
    }
  };

  const handleTriggerPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailAddress || !contactNo || !address || !zipcode) {
      alert("Please populate all shipping and dispatch fields.");
      return;
    }
    // Set payment progress simulation
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#F2EFE6] border border-[#D8B06A]/40 rounded-xl w-full max-w-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        
        {/* CLOSE BUTTON POPS */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 bg-stone-100 rounded-full hover:bg-stone-200 text-[#173F7A]"
          aria-label="Close checkout portal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1 & 2: INTUITIVE DATA ENTRY FORM PANEL */}
        {step < 3 ? (
          <>
            {/* LEFT COLUMN: DISPATCH DATA ENTRY FORM (60%) */}
            <div className="w-full md:w-[60%] p-6 sm:p-8 overflow-y-auto space-y-6 border-b md:border-b-0 md:border-r border-[#173F7A]/8">
              
              <div className="space-y-1">
                <span className="text-[9px] tracking-widest text-[#D8B06A] font-extrabold uppercase">
                  Dispatch Sanctum
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173F7A]">
                  Secure Checkout
                </h3>
                <div className="w-10 h-0.5 bg-[#D8B06A]" />
              </div>

              {step === 1 ? (
                <form id="checkout-form" onSubmit={handleTriggerPayment} className="space-y-4">
                  {/* Shipping data inputs */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] tracking-widest text-stone-400 font-bold uppercase border-b border-gray-200 pb-1">
                      1. Deliver to
                    </h4>

                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider text-stone-500 font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Vyom Yadav"
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-[#D8B06A] rounded text-xs outline-none text-[#173F7A]"
                      />
                    </div>

                    {/* Email and Contact on same line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-[9px] uppercase tracking-wider text-stone-500 font-semibold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="vyom@gmail.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-[#D8B06A] rounded text-xs outline-none text-[#173F7A]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[9px] uppercase tracking-wider text-stone-500 font-semibold">
                          Contactphone
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactNo}
                          onChange={(e) => setContactNo(e.target.value)}
                          placeholder="+91 99999-XXXXX"
                          className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-[#D8B06A] rounded text-xs outline-none text-[#173F7A]"
                        />
                      </div>
                    </div>

                    {/* Street Address */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider text-stone-500 font-semibold">
                        Detailed Street Address & Landmark
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Flat 101, Pari Hill, Bandra West"
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-[#D8B06A] rounded text-xs outline-none text-[#173F7A]"
                      />
                    </div>

                    {/* Zip code pincode */}
                    <div className="space-y-1">
                      <label className="block text-[9px] uppercase tracking-wider text-stone-500 font-semibold">
                        PIN Code (India dispatch)
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value.replace(/\D/g, ""))}
                        placeholder="e.g. 400050"
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-[#D8B06A] rounded text-xs outline-none text-[#173F7A] font-mono"
                      />
                    </div>
                  </div>

                  {/* Payment option details */}
                  <div className="space-y-3 pt-3">
                    <h4 className="text-[10px] tracking-widest text-stone-400 font-bold uppercase border-b border-gray-200 pb-1">
                      2. Payment Method
                    </h4>

                    <div className="grid grid-cols-3 gap-2.5">
                      {/* UPI */}
                      <button
                        type="button"
                        onClick={() => setPaymentOption("upi")}
                        className={`p-3 border rounded text-center flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                          paymentOption === "upi"
                            ? "border-[#173F7A] bg-[#173F7A]/5 font-bold"
                            : "border-gray-200 hover:border-[#173F7A]/30 bg-white"
                        }`}
                      >
                        <Smartphone className="w-4 h-4 text-[#173F7A]" />
                        <span className="text-[9px] uppercase tracking-wider">UPI / GPay</span>
                      </button>

                      {/* Credit Card */}
                      <button
                        type="button"
                        onClick={() => setPaymentOption("card")}
                        className={`p-3 border rounded text-center flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                          paymentOption === "card"
                            ? "border-[#173F7A] bg-[#173F7A]/5 font-bold"
                            : "border-gray-200 hover:border-[#173F7A]/30 bg-white"
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-[#173F7A]" />
                        <span className="text-[9px] uppercase tracking-wider">Credit Card</span>
                      </button>

                      {/* Cash on Delivery */}
                      <button
                        type="button"
                        onClick={() => setPaymentOption("cod")}
                        className={`p-3 border rounded text-center flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                          paymentOption === "cod"
                            ? "border-[#173F7A] bg-[#173F7A]/5 font-bold"
                            : "border-gray-200 hover:border-[#173F7A]/30 bg-white"
                        }`}
                      >
                        <ShieldCheck className="w-4 h-4 text-[#173F7A]" />
                        <span className="text-[9px] uppercase tracking-wider">COD Cash</span>
                      </button>
                    </div>
                  </div>

                  {/* Submission secure pay button */}
                  <button
                    type="submit"
                    className="w-full mt-6 py-4 bg-[#173F7A] hover:bg-[#D8B06A] hover:text-[#173F7A] text-white text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Complete Dispatch Acquisition</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Step 2: Pay Progress animation */
                <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
                  {/* Beautiful rotating ring */}
                  <div className="w-16 h-16 rounded-full border-4 border-[#173F7A]/10 border-t-[#D8B06A] animate-spin" />
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-lg font-bold text-[#173F7A]">
                      Validating Secure Bank Node...
                    </h4>
                    <p className="text-stone-500 text-xs">
                      Establishing encrypted 256-bit SSL pipeline. Please do not close or reload this page.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY SIDE PANEL (40%) */}
            <div className="w-full md:w-[40%] bg-stone-900/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              
              <div className="space-y-4">
                <span className="text-[10px] tracking-widest text-[#173F7A]/60 font-bold uppercase block border-b border-[#173F7A]/10 pb-1.5">
                  Order Summary
                </span>

                {/* Items scrolling list */}
                <div className="space-y-4 max-h-[180px] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-start text-xs border-b border-stone-200/40 pb-2.5">
                      <div>
                        <h5 className="font-serif font-bold text-[#173F7A] leading-tight text-stone-800">
                          {item.name}
                        </h5>
                        <div className="flex space-x-2 text-[10px] text-stone-500 font-medium mt-0.5">
                          <span>Qty: {item.quantity}</span>
                          <span>•</span>
                          <span>{item.details}</span>
                        </div>
                      </div>
                      <span className="font-mono font-semibold text-stone-800">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input block */}
                <form onSubmit={handleApplyPromo} className="flex items-center space-x-2 pt-2 pb-1.5">
                  <input
                    type="text"
                    placeholder="PROMO CODE (e.g. VIP50)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                    className="flex-1 px-3 py-2 bg-white border border-gray-200 focus:border-[#D8B06A] rounded text-[10.5px] uppercase outline-none font-semibold text-stone-800 tracking-wider disabled:bg-gray-100 disabled:text-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={promoApplied}
                    className="px-4 py-2 bg-[#173F7A] hover:bg-[#D8B06A] hover:text-[#173F7A] text-white text-[10.5px] font-bold tracking-widest uppercase rounded transition-colors disabled:bg-gray-200 disabled:text-gray-400"
                  >
                    Apply
                  </button>
                </form>
                {promoApplied && (
                  <p className="text-[10px] text-emerald-700 font-bold flex items-center space-x-1">
                    <span>✓ flat ₹150 Active VIP Code Applied!</span>
                  </p>
                )}
              </div>

              {/* Recalculated values list */}
              <div className="space-y-2 border-t border-[#173F7A]/8 pt-5 text-xs text-stone-600 font-normal">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="font-mono">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST + CGST (5%)</span>
                  <span className="font-mono">₹{calculatedTax}</span>
                </div>
                <div className="flex justify-between">
                  <span>Priority Shipping</span>
                  <span>{shippingFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : "₹80"}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>VIP Promo Discount</span>
                    <span className="font-mono">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="border-t border-[#173F7A]/10 mt-3 pt-3 flex justify-between text-sm text-[#173F7A] font-bold">
                  <span>Total Payable</span>
                  <span className="font-mono text-base font-extrabold text-stone-900">
                    ₹{finalPayable}
                  </span>
                </div>
              </div>

            </div>
          </>
        ) : (
          /* STEP 3: EXQUISITE ORDER SUCCESS RECEIPT (100% SCREEN) */
          <div className="w-full p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in relative">
            {/* Confetti-like vector pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#D8B06A0a_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

            {/* Glowing success circle */}
            <div className="w-16 h-16 rounded-full border border-[#D8B06A]/30 bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-lg relative">
              <span className="absolute w-20 h-20 bg-emerald-100/35 rounded-full -z-10 animate-pulse" />
              <CheckCircle className="w-8 h-8 stroke-[2]" />
            </div>

            {/* Congratulation stamp and headers */}
            <div className="space-y-1 relative z-10 max-w-md mx-auto">
              <span className="text-[10px] text-[#D8B06A] tracking-[0.3em] font-extrabold uppercase">
                Acquisition Complete
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#173F7A]">
                Blessings of Lotus Purity
              </h3>
              <p className="text-xs text-stone-500 italic mt-0.5">
                "पद्मा: Shuddh • Lux • Crunch"
              </p>
              <div className="w-16 h-0.5 bg-[#D8B06A] mx-auto mt-4" />
              <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed pt-3">
                Deep gratitude, <span className="font-bold text-[#173F7A]">{fullName}</span>. Your luxury air-toasted makhana dispatch has been successfully recorded of our sacred logistics ledger. Your curated bundle will be meticulously packed inside our custom light-shielding pouches today!
              </p>
            </div>

            {/* Styled Invoice Receipt block */}
            <div className="w-full max-w-sm bg-white/70 backdrop-blur-md rounded-xl border border-dashed border-[#173F7A]/20 p-5 text-left text-xs space-y-3 font-medium text-stone-600">
              <div className="flex justify-between border-b border-gray-200 pb-2.5 font-bold">
                <span className="text-[#173F7A]">ORDER RECEIPT</span>
                <span className="font-mono text-[#173F7A]/80">{orderId}</span>
              </div>
              <div className="space-y-1 shadow-inner bg-[#F2EFE6]/30 p-2.5 rounded">
                <p><span className="text-stone-400">Dispatch Customer:</span> {fullName}</p>
                <p><span className="text-stone-400">Notify Email:</span> {emailAddress}</p>
                <p><span className="text-stone-400">Transit Location:</span> {address} (PIN: {zipcode})</p>
                <p><span className="text-stone-400">Secure Payment:</span> {paymentOption.toUpperCase()} ({paymentOption === "cod" ? "Pay Cash at Door" : "Paid Securely"})</p>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2.5 font-bold text-stone-800">
                <span>Total Settled (Tax Incl.)</span>
                <span className="font-mono text-sm text-[#173F7A]">₹{finalPayable}</span>
              </div>
            </div>

            {/* Action complete Close bottom */}
            <button
              onClick={() => {
                onClearCart();
                onClose();
              }}
              className="w-full max-w-sm py-4 bg-[#173F7A] hover:bg-[#D8B06A] hover:text-[#173F7A] text-white text-xs font-bold tracking-[0.25em] uppercase hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 rounded shadow-md"
            >
              Conclude Secure Transaction
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
