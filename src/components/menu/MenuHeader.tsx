'use client';

import React from 'react';
import { Sparkles, Clock, MapPin, Coffee, UtensilsCrossed } from 'lucide-react';

export const MenuHeader: React.FC = () => {
  return (
    <header className="relative w-full bg-[#037487] text-[#FAF6EE] pt-7 pb-8 px-4 rounded-b-3xl shadow-xl overflow-hidden border-b border-[#026c7e]/40">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-900/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold mb-3 backdrop-blur-sm shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>Digital Menu Card</span>
        </div>

        {/* Title / Logo */}
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 font-black text-xl shadow-md shadow-cyan-950/30">
            B
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Burfi<span className="text-amber-300">.in</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-cyan-50 text-sm sm:text-base font-normal max-w-sm mb-4 leading-relaxed opacity-95">
          Fresh bites, refreshing drinks &amp; good vibes.
        </p>

        {/* Quick Info Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-white">
          <div className="flex items-center gap-1.5 bg-[#026071]/70 border border-[#024d5b] px-3 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
            <span className="font-semibold text-emerald-300">Open Now</span>
          </div>

          <div className="flex items-center gap-1 bg-[#026071]/70 border border-[#024d5b] px-3 py-1.5 rounded-full shadow-xs">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>04:00 PM - 11:30 PM</span>
          </div>

          <div className="flex items-center gap-1 bg-[#026071]/70 border border-[#024d5b] px-3 py-1.5 rounded-full shadow-xs">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-300" />
            <span>Self Service / Table Order</span>
          </div>
        </div>
      </div>
    </header>
  );
};
