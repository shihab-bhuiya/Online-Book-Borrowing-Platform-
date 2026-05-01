'use client'
import BookCard from "@/Component/homepage/bookCard";
import React, { useState } from "react";

const AllBooks = ({ books }) => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">

      {/* Search Bar */}
      <div className="flex items-center justify-center mb-10">
        <div className="relative w-full max-w-lg">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search by title, author or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          />
          {/* Clear button */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#0A1D4E] mb-3">All Books</h1>
        <p className="text-gray-500 text-lg">
          Browse our full collection of {books.length} books
        </p>
      </div>


      {/* Results count */}
      {search && (
        <p className="text-center text-gray-500 mb-6">
          Found <span className="font-semibold text-blue-600">{filteredBooks.length}</span> result(s) for "<span className="font-semibold">{search}</span>"
        </p>
      )}

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div className="text-center text-gray-400 text-xl py-20">
          No books found for "{search}" 😔
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} n={book} />
          ))}
        </div>
      )}

    </div>
  );
};

export default AllBooks;