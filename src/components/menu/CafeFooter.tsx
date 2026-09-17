'use client';

import React from 'react';
import { MapPin, Phone, Heart, MessageCircle, Star } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const CafeFooter: React.FC = () => {
  const googleReviewUrl = "https://maps.app.goo.gl/BkZoh8RwLDeDb4W89?g_st=com.google.maps.preview.copy";

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

        {/* Contact, Social & Location Action Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-xl text-xs">
          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/message/7GQBAQP7JKM7F1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#026071]/70 hover:bg-[#026071] border border-[#024d5b] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group shadow-xs touch-manipulation active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-4.5 h-4.5 fill-emerald-400/20 text-emerald-300" />
            </div>
            <span className="font-bold text-white">WhatsApp</span>
            <span className="text-[10px] text-cyan-100/80">Chat with us</span>
          </a>

          {/* Call Phone Action */}
          <a
            href="tel:+919447439689"
            className="bg-[#026071]/70 hover:bg-[#026071] border border-[#024d5b] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group shadow-xs touch-manipulation active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
              <Phone className="w-4.5 h-4.5 text-amber-300" />
            </div>
            <span className="font-bold text-white">Phone</span>
            <span className="text-[10px] text-cyan-100/80">Call Cafe</span>
          </a>

          {/* Instagram Action */}
          <a
            href="https://instagram.com/cafeburfi/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#026071]/70 hover:bg-[#026071] border border-[#024d5b] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group shadow-xs touch-manipulation active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 group-hover:scale-110 transition-transform">
              <InstagramIcon className="w-4.5 h-4.5 text-pink-300" />
            </div>
            <span className="font-bold text-white">Instagram</span>
            <span className="text-[10px] text-cyan-100/80">@cafeburfi</span>
          </a>

          {/* Google Maps Location */}
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#026071]/70 hover:bg-[#026071] border border-[#024d5b] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 group shadow-xs touch-manipulation active:scale-95 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 group-hover:scale-110 transition-transform">
              <MapPin className="w-4.5 h-4.5 text-sky-300" />
            </div>
            <span className="font-bold text-white">Location</span>
            <span className="text-[10px] text-cyan-100/80">Google Maps</span>
          </a>
        </div>

        {/* Google Reviews / Customer Feedback Card */}
        <div className="w-full max-w-xl bg-[#025665]/80 border border-[#024d5b] p-4 sm:p-5 rounded-2xl flex flex-col items-center text-center gap-2.5 shadow-md">
          <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
            Loved your experience at Burfi.in?
          </h3>

          {/* Interactive 5-Star Selection */}
          <div className="flex items-center justify-center gap-1 py-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <a
                key={star}
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-amber-300 hover:text-amber-200 transition-transform hover:scale-125 active:scale-95 cursor-pointer"
                aria-label={`Rate ${star} stars on Google`}
              >
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-300 text-amber-300" />
              </a>
            ))}
          </div>

          <p className="text-xs text-cyan-50 opacity-90 max-w-xs">
            Share your experience with us on Google
          </p>

          {/* Google Review Redirect Button */}
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer mt-1"
          >
            <Star className="w-4 h-4 fill-stone-950 text-stone-950" />
            <span>Review us on Google</span>
          </a>
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
