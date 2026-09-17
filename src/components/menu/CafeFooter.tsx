'use client';

import React from 'react';
import { Wifi, MapPin, Phone, Heart, Clock } from 'lucide-react';

export const CafeFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#18120D] text-stone-300 pt-8 pb-12 px-4 border-t border-stone-800 mt-12 rounded-t-3xl">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-black text-2xl shadow-lg mb-2">
            B
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Burfi<span className="text-amber-500">.in</span>
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Fresh bites, refreshing drinks & good vibes.
          </p>
        </div>

        {/* Cafe Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md text-left text-xs">
          {/* Guest Wifi Card */}
          <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Wifi className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="font-semibold text-stone-200">Guest Wi-Fi</div>
              <div className="text-stone-400">Network: <span className="text-amber-400 font-mono">Burfi_Guest</span></div>
            </div>
          </div>

          {/* Timings Card */}
          <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="font-semibold text-stone-200">Cafe Hours</div>
              <div className="text-stone-400">Open Daily: 10:00 AM – 11:30 PM</div>
            </div>
          </div>
        </div>

        {/* Important Menu Note */}
        <p className="text-[11px] text-stone-400 max-w-sm leading-relaxed">
          * Prices are subject to change. Please inform our staff about any food allergies before ordering.
        </p>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-xs text-stone-400 pt-4 border-t border-stone-800/80 w-full justify-center">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>for Burfi.in Digital Menu</span>
        </div>
      </div>
    </footer>
  );
};
