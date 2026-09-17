'use client';

import React, { useRef, useEffect } from 'react';
import { MenuCategory } from '@/data/menu';
import { Flame, Sparkles, GlassWater, Coffee, Utensils, Cake, LayoutGrid } from 'lucide-react';

interface CategoryNavigationProps {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  dietaryFilter: 'ALL' | 'VEG' | 'NON_VEG';
  onSelectDietaryFilter: (filter: 'ALL' | 'VEG' | 'NON_VEG') => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  GlassWater: <GlassWater className="w-4 h-4" />,
  Coffee: <Coffee className="w-4 h-4" />,
  Utensils: <Utensils className="w-4 h-4" />,
  Cake: <Cake className="w-4 h-4" />,
};

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  dietaryFilter,
  onSelectDietaryFilter,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  // Scroll active category pill into center view smoothly when active category changes
  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const element = activeBtnRef.current;
      const scrollLeft =
        element.offsetLeft - container.offsetWidth / 2 + element.offsetWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  }, [activeCategoryId]);

  return (
    <nav className="sticky top-0 z-30 glass-nav border-b border-stone-200/80 shadow-xs transition-all duration-200 py-2">
      <div className="max-w-4xl mx-auto px-3 flex flex-col gap-2">
        {/* Top Row: Category Pills Scrollable */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5"
        >
          {/* "All Categories" Pill */}
          <button
            ref={activeCategoryId === 'all' ? activeBtnRef : null}
            onClick={() => onSelectCategory('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 touch-manipulation cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-amber-600 text-white active-pill shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>All Items</span>
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                ref={isActive ? activeBtnRef : null}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 touch-manipulation cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white active-pill shadow-md scale-102'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span className={isActive ? 'text-amber-100' : 'text-amber-600'}>
                  {ICON_MAP[cat.iconName] || <Utensils className="w-3.5 h-3.5" />}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Row: Quick Veg / Non-Veg Toggle Filter */}
        <div className="flex items-center justify-between gap-2 border-t border-stone-200/50 pt-1.5 pb-0.5">
          <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wider pl-1 hidden xs:block">
            Dietary Preference:
          </div>

          <div className="flex items-center gap-1 bg-stone-100/90 p-1 rounded-full border border-stone-200/70 w-full xs:w-auto justify-center">
            <button
              onClick={() => onSelectDietaryFilter('ALL')}
              className={`flex-1 xs:flex-none px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                dietaryFilter === 'ALL'
                  ? 'bg-white text-stone-900 shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              All
            </button>

            <button
              onClick={() => onSelectDietaryFilter('VEG')}
              className={`flex-1 xs:flex-none flex items-center justify-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                dietaryFilter === 'VEG'
                  ? 'bg-emerald-600 text-white shadow-xs font-bold'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 border border-white" />
              <span>Veg</span>
            </button>

            <button
              onClick={() => onSelectDietaryFilter('NON_VEG')}
              className={`flex-1 xs:flex-none flex items-center justify-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                dietaryFilter === 'NON_VEG'
                  ? 'bg-red-600 text-white shadow-xs font-bold'
                  : 'text-red-700 hover:bg-red-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 border border-white" />
              <span>Non-Veg</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
