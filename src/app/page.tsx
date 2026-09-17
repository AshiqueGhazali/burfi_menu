'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategory, MenuItem } from '@/data/menu';
import { MenuHeader } from '@/components/menu/MenuHeader';
import { CategoryNavigation } from '@/components/menu/CategoryNavigation';
import { MenuSearch } from '@/components/menu/MenuSearch';
import { MenuSection } from '@/components/menu/MenuSection';
import { CafeFooter } from '@/components/menu/CafeFooter';
import { BackToTop } from '@/components/ui/BackToTop';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Home() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'ALL' | 'VEG' | 'NON_VEG'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter items based on dietary filter & search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Dietary filter check
      if (dietaryFilter === 'VEG' && !item.isVeg) return false;
      if (dietaryFilter === 'NON_VEG' && item.isVeg) return false;

      // Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.categoryId.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCategory;
      }

      return true;
    });
  }, [dietaryFilter, searchQuery]);

  // Group filtered items by category
  const categoriesWithItems = useMemo(() => {
    return MENU_CATEGORIES.map((cat) => ({
      category: cat,
      items: filteredItems.filter((item) => item.categoryId === cat.id),
    })).filter((group) => group.items.length > 0);
  }, [filteredItems]);

  // Scroll spy to update active category pill on manual scroll
  useEffect(() => {
    if (searchQuery.trim()) return; // Disable scroll spy during active search

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = MENU_CATEGORIES.length - 1; i >= 0; i--) {
        const cat = MENU_CATEGORIES[i];
        const el = document.getElementById(cat.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveCategoryId(cat.id);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveCategoryId('all');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchQuery]);

  // Scroll to category when pill is clicked
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);

    if (categoryId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -90; // Offset for sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#231C18] flex flex-col font-sans selection:bg-amber-200">
      {/* Hero Header */}
      <MenuHeader />

      {/* Sticky Category Navigation & Filters */}
      <CategoryNavigation
        categories={MENU_CATEGORIES}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
        dietaryFilter={dietaryFilter}
        onSelectDietaryFilter={setDietaryFilter}
      />

      {/* Search Input */}
      <MenuSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultCount={filteredItems.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-3 sm:px-4 py-4">
        {/* Active Filters Bar if Veg/Non-Veg active */}
        {dietaryFilter !== 'ALL' && (
          <div className="flex items-center justify-between bg-amber-50 border border-amber-200 px-3.5 py-2 rounded-xl mb-4 text-xs font-medium text-amber-900">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Showing <strong className="font-bold">{dietaryFilter === 'VEG' ? 'Vegetarian' : 'Non-Vegetarian'}</strong> options only
            </span>
            <button
              onClick={() => setDietaryFilter('ALL')}
              className="text-amber-700 underline font-bold cursor-pointer hover:text-amber-950"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Menu Sections Rendered Dynamically */}
        {categoriesWithItems.length > 0 ? (
          categoriesWithItems.map(({ category, items }) => (
            <MenuSection key={category.id} category={category} items={items} />
          ))
        ) : (
          /* Empty Search / Filter State */
          <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-3xl border border-stone-200/80 shadow-xs my-6">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-1">
              No matching menu items found
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-xs mb-4">
              We couldn&apos;t find anything matching &quot;{searchQuery}&quot; with your current filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('ALL');
              }}
              className="px-5 py-2.5 bg-amber-600 text-white rounded-full text-xs font-bold shadow-md hover:bg-amber-700 transition-colors cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </main>

      {/* Cafe Footer */}
      <CafeFooter />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
