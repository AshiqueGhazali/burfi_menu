'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

export const MenuSearch: React.FC<MenuSearchProps> = ({
  searchQuery,
  onSearchChange,
  resultCount,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-4 mb-2">
      <div className="relative flex items-center">
        <div className="absolute left-3.5 pointer-events-none text-stone-400">
          <Search className="w-4 h-4" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search menu (e.g. Shawarma, Mojito, Chai...)"
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-stone-200 rounded-2xl text-sm text-stone-800 placeholder-stone-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200"
        />

        {searchQuery ? (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <div className="absolute right-3 text-[11px] text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full pointer-events-none font-medium">
            Search
          </div>
        )}
      </div>

      {searchQuery.trim() !== '' && (
        <div className="flex items-center justify-between mt-2 px-1 text-xs text-stone-500">
          <span>
            Found <strong className="text-amber-700 font-bold">{resultCount}</strong> {resultCount === 1 ? 'item' : 'items'} matching &quot;{searchQuery}&quot;
          </span>
          <button
            onClick={() => onSearchChange('')}
            className="text-amber-600 underline hover:text-amber-800 cursor-pointer font-medium"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};
