'use client';

import React from 'react';
import { Wifi, MapPin, Phone, Heart, Clock } from 'lucide-react';

export const CafeFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#037487] text-white pt-8 pb-12 px-4 border-t border-[#026c7e]/50 mt-12 rounded-t-3xl shadow-xl">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 font-black text-2xl shadow-lg mb-2">
            B
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Burfi<span className="text-amber-300">.in</span>
          </h2>
          <p className="text-xs text-cyan-50 opacity-90 mt-1">
            Fresh bites, refreshing drinks &amp; good vibes.
          </p>
        </div>

        {/* Cafe Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md text-left text-xs">
          {/* Guest Wifi Card */}
          <div className="bg-[#026071]/70 border border-[#024d5b] p-3.5 rounded-2xl flex items-center gap-3 backdrop-blur-xs">
            <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
              <Wifi className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <div className="font-semibold text-white">Guest Wi-Fi</div>
              <div className="text-cyan-100">Network: <span className="text-amber-300 font-mono">Burfi_Guest</span></div>
            </div>
          </div>

          {/* Timings Card */}
          <div className="bg-[#026071]/70 border border-[#024d5b] p-3.5 rounded-2xl flex items-center gap-3 backdrop-blur-xs">
            <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <div className="font-semibold text-white">Cafe Hours</div>
              <div className="text-cyan-100">Open Daily: 10:00 AM – 11:30 PM</div>
            </div>
          </div>
        </div>

        {/* Important Menu Note */}
        <p className="text-[11px] text-cyan-100/80 max-w-sm leading-relaxed">
          * Prices are subject to change. Please inform our staff about any food allergies before ordering.
        </p>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-xs text-cyan-100/90 pt-4 border-t border-[#026c7e]/40 w-full justify-center">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>for Burfi.in Digital Menu</span>
        </div>
      </div>
    </footer>
  );
};
