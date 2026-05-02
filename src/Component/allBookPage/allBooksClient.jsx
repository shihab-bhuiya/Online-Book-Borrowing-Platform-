'use client';

import { useState, useMemo } from 'react';
import AllBooks from './allBookCard';

export default function AllBooksClient({ books, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryCounts = useMemo(() => {
    const counts = { All: books.length };
    books.forEach((b) => {
      counts[b.category] = (counts[b.category] || 0) + 1;
    });
    return counts;
  }, [books]);

  const filtered = useMemo(() => {
    let result =
      activeCategory === 'All'
        ? books
        : books.filter((b) => b.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.author?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [books, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-7xl">

        {/* ── Single Page Header ── */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-[#0A1D4E] mb-2">All Books</h1>
          <p className="text-gray-500 text-base">
            Showing{' '}
            <span className="font-semibold text-[#0A1D4E]">{filtered.length}</span>{' '}
            of {books.length} books
            {activeCategory !== 'All' && (
              <span className="ml-1">
                in{' '}
                <span className="font-semibold text-[#0A1D4E]">
                  {activeCategory}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* ── Layout: Sidebar + Grid side by side ── */}
        <div className="flex gap-8 items-start">

          {/* ══ LEFT SIDEBAR ══ */}
          <aside className="w-56 shrink-0 sticky top-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {/* Search */}
              <div className="p-4 border-b border-gray-100">
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A1D4E]/20 focus:border-[#0A1D4E] transition"
                />
              </div>

              {/* Categories label */}
              <div className="px-4 pt-4 pb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Categories
                </span>
              </div>

              {/* Category buttons */}
              <ul className="px-3 pb-4 space-y-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => {
                          setActiveCategory(cat);
                          setSearchQuery('');
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                          ${
                            isActive
                              ? 'bg-[#0A1D4E] text-white shadow-md'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-[#0A1D4E]'
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isActive ? 'bg-white/60' : 'bg-[#0A1D4E]/20'
                            }`}
                          />
                          {cat}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {categoryCounts[cat] || 0}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {activeCategory !== 'All' && (
                <div className="px-4 pb-4">
                  <button
                    onClick={() => setActiveCategory('All')}
                    className="w-full text-xs text-center text-gray-400 hover:text-red-500 transition py-1.5 rounded-lg hover:bg-red-50"
                  >
                    ✕ Clear filter
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* ══ BOOKS GRID ══ */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="text-5xl mb-4">📭</div>
                <p className="text-gray-400 text-xl font-medium">No books found</p>
                <p className="text-gray-300 text-sm mt-1">
                  Try a different category or clear your search.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-6 px-5 py-2 text-sm bg-[#0A1D4E] text-white rounded-xl hover:bg-[#0A1D4E]/90 transition"
                >
                  Show all books
                </button>
              </div>
            ) : (
              <AllBooks books={filtered} />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}