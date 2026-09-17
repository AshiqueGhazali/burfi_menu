'use client';

import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategory, MenuItem } from '@/data/menu';
import { Zap, ChevronDown, ChevronUp, Receipt } from 'lucide-react';

interface QuickReviewProps {
  categories?: MenuCategory[];
  items?: MenuItem[];
}

export const QuickReview: React.FC<QuickReviewProps> = ({
  categories = MENU_CATEGORIES,
  items = MENU_ITEMS,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto px-3 sm:px-4 mt-4 mb-2">
      <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-all duration-200">
        {/* Header Bar */}
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-3 sm:p-4 bg-[#037487] text-[#FAF6EE] cursor-pointer select-none hover:bg-[#027588] transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/25 shadow-xs">
              <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
            </div>
            <div >
              <div className='flex items-center gap-2 justify-between'>
                <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                  Quick Menu Review

                </h2>
                <div className="flex items-center gap-1.5 text-xs text-white font-medium bg-[#026071]/80 px-2.5 py-1 rounded-full border border-[#024d5b] shadow-xs">
                  <span>{isCollapsed ? 'Expand' : 'Collapse'}</span>
                  {isCollapsed ? (
                    <ChevronDown className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <ChevronUp className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-cyan-50 opacity-90">
                Complete menu items &amp; prices without descriptions
              </p>
            </div>
          </div>


        </div>

        {/* Quick Review Grid List */}
        {!isCollapsed && (
          <div className="p-3.5 sm:p-5 bg-[#FAF8F5] border-t border-stone-200/70">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {categories.map((cat) => {
                const categoryItems = items.filter((item) => item.categoryId === cat.id);
                if (categoryItems.length === 0) return null;

                return (
                  <div key={cat.id} className="flex flex-col bg-white p-3.5 rounded-xl border border-stone-200/60 shadow-2xs">
                    {/* Category Title */}
                    <div className="flex items-center justify-between border-b border-amber-200/60 pb-1.5 mb-2">
                      <h3 className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        {cat.name}
                      </h3>
                      <span className="text-[10px] text-stone-400 font-semibold">
                        {categoryItems.length} items
                      </span>
                    </div>

                    {/* Dotted Item List */}
                    <ul className="space-y-1.5 text-xs">
                      {categoryItems.map((item) => (
                        <li key={item.id} className="flex items-baseline justify-between group">
                          {/* Item Name + Veg Indicator */}
                          <div className="flex items-center gap-1.5 min-w-0 pr-1">
                            {item.isVeg ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" title="Veg" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" title="Non-Veg" />
                            )}
                            <span className="text-stone-800 font-medium truncate group-hover:text-amber-800 transition-colors">
                              {item.name}
                            </span>
                          </div>

                          {/* Dotted Leader */}
                          <span className="flex-1 border-b border-dotted border-stone-300/80 mx-1.5 min-w-[12px] opacity-60 self-center" />

                          {/* Price */}
                          <span className="font-extrabold text-stone-900 shrink-0 font-mono text-[12px]">
                            ₹{item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
