'use client';

import React from 'react';
import { Sparkles, Clock, MapPin, Coffee, UtensilsCrossed } from 'lucide-react';

export const MenuHeader: React.FC = () => {
  return (
    <header className="relative w-full bg-[#1A120C] text-[#FAF6EE] pt-7 pb-8 px-4 rounded-b-3xl shadow-xl overflow-hidden border-b border-amber-900/40">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-700/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-medium mb-3 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Digital Menu Card</span>
        </div>

        {/* Title / Logo */}
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-black text-xl shadow-md shadow-amber-900/40">
            B
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Burfi<span className="text-amber-500">.in</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-stone-300 text-sm sm:text-base font-normal max-w-sm mb-4 leading-relaxed">
          Fresh bites, refreshing drinks & good vibes.
        </p>

        {/* Quick Info Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-1.5 bg-stone-900/70 border border-stone-800 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5" />
            <span className="font-semibold text-emerald-400">Open Now</span>
          </div>

          <div className="flex items-center gap-1 bg-stone-900/70 border border-stone-800 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>10 AM – 11:30 PM</span>
          </div>

          <div className="flex items-center gap-1 bg-stone-900/70 border border-stone-800 px-3 py-1.5 rounded-full">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
            <span>Self Service / Table Order</span>
          </div>
        </div>
      </div>
    </header>
  );
};
