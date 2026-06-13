/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  rating: number;
  color: string; // Tailwind bg color representing flavor
  textColor: string; // Tailwind text color
  gradient: string; // Tailwind decorative gradient
  imageBg: string; // Hex color for product packaging mockup background
  nutrition: {
    calories: string;
    protein: string;
    fat: string;
    carbs: string;
  };
  highlights: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Persona {
  id: string;
  name: string;
  age: number;
  role: string;
  quote: string;
  habits: string[];
  seeking: string;
  avatarSeed: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  rating: number;
  text: string;
  source: string;
  highlight: boolean;
}

export interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  banner?: string;
  badge?: string;
}

export interface CartItem {
  id: string; // combination of tier/flavor
  name: string;
  sku: string;
  price: number;
  quantity: number;
  details: string;
}
