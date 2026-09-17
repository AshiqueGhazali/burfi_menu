'use client';

import React from 'react';
import { MenuCategory, MenuItem } from '@/data/menu';
import { MenuItemCard } from './MenuItemCard';
import { Flame, Sparkles, GlassWater, Coffee, Utensils, Cake } from 'lucide-react';

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-5 h-5 text-amber-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-600" />,
  GlassWater: <GlassWater className="w-5 h-5 text-amber-600" />,
  Coffee: <Coffee className="w-5 h-5 text-amber-600" />,
  Utensils: <Utensils className="w-5 h-5 text-amber-600" />,
  Cake: <Cake className="w-5 h-5 text-amber-600" />,
};

export const MenuSection: React.FC<MenuSectionProps> = ({ category, items }) => {
  if (items.length === 0) return null;

  return (
    <section id={category.id} className="scroll-mt-24 mb-8">
      {/* Category Section Header */}
      <div className="flex flex-col mb-3.5 pb-2 border-b border-stone-200/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
              {ICON_MAP[category.iconName] || <Utensils className="w-5 h-5 text-amber-600" />}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
              {category.name}
            </h2>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        {category.description && (
          <p className="text-xs sm:text-sm text-stone-500 mt-1 pl-10">
            {category.description}
          </p>
        )}
      </div>

      {/* Grid of Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
