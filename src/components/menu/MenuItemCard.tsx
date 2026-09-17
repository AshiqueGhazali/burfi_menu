'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { Flame, Star, Sparkles, Heart } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

const BADGE_STYLES: Record<string, { bg: string; text: string; icon?: React.ReactNode }> = {
  Popular: {
    bg: 'bg-amber-100 border-amber-300',
    text: 'text-amber-800',
    icon: <Star className="w-3 h-3 fill-amber-500 text-amber-500" />,
  },
  'Best Seller': {
    bg: 'bg-red-100 border-red-300',
    text: 'text-red-800',
    icon: <Flame className="w-3 h-3 fill-red-500 text-red-500" />,
  },
  New: {
    bg: 'bg-emerald-100 border-emerald-300',
    text: 'text-emerald-800',
    icon: <Sparkles className="w-3 h-3 text-emerald-600" />,
  },
  'Chef Special': {
    bg: 'bg-purple-100 border-purple-300',
    text: 'text-purple-800',
    icon: <Heart className="w-3 h-3 fill-purple-500 text-purple-500" />,
  },
  'Must Try': {
    bg: 'bg-orange-100 border-orange-300',
    text: 'text-orange-800',
    icon: <Star className="w-3 h-3 text-orange-600" />,
  },
};

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const badgeStyle = item.badge ? BADGE_STYLES[item.badge] : null;

  return (
    <article className="group relative bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-amber-300/80 transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div className="flex gap-3.5 items-start justify-between">
        {/* Left Column: Details */}
        <div className="flex-1 min-w-0 pr-1">
          {/* Top Row: Veg/Non-Veg & Badge */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            {/* Veg / Non-Veg Indicator */}
            {item.isVeg ? (
              <div
                className="w-4 h-4 rounded-xs border-1.5 border-emerald-600 flex items-center justify-center p-0.5 shrink-0"
                title="Vegetarian"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
            ) : (
              <div
                className="w-4 h-4 rounded-xs border-1.5 border-red-600 flex items-center justify-center p-0.5 shrink-0"
                title="Non-Vegetarian"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
              </div>
            )}

            {/* Badge */}
            {item.badge && badgeStyle && (
              <span
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeStyle.bg} ${badgeStyle.text}`}
              >
                {badgeStyle.icon}
                <span>{item.badge}</span>
              </span>
            )}

            {/* Spicy Level */}
            {item.spicyLevel && item.spicyLevel > 0 && (
              <span className="text-xs" title={`Spiciness Level: ${item.spicyLevel}/3`}>
                {'🌶️'.repeat(item.spicyLevel)}
              </span>
            )}
          </div>

          {/* Item Name */}
          <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
            {item.name}
          </h3>

          {/* Item Price */}
          <div className="mt-1 mb-1.5 flex items-baseline gap-1">
            <span className="text-lg font-extrabold text-amber-700 tracking-tight">
              ₹{item.price}
            </span>
          </div>

          {/* Item Description */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Right Column: Optional Image */}
        {item.image && !imageError && (
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-stone-100 border border-stone-200 shadow-xs">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              unoptimized
            />
          </div>
        )}
      </div>
    </article>
  );
};
