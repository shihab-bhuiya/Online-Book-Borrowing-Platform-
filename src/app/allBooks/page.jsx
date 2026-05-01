import AllBooks from '@/component/allBookPage/allBookCard';
import BookCard from '@/component/homepage/bookCard';
import { data } from '@/lib/data';
import React from 'react';

const AllBooksPage = async () => {
    const books = await data()
    console.log("All Books", books);
    return (
//         <div className="container mx-auto px-6 py-12 max-w-7xl">
      
//       {/* Header */}
//       <div className="mb-10 text-center">
//         <h1 className="text-4xl font-extrabold text-[#0A1D4E] mb-3">All Books</h1>
//         <p className="text-gray-500 text-lg">
//           Browse our full collection of {books.length} books
//         </p>
//       </div>

//       {/* Books Grid */}
//       {books.length === 0 ? (
//         <div className="text-center text-gray-400 text-xl py-20">
//           No books found 😔
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {books.map((book) => (
//             <BookCard key={book.id} n={book} />
//           ))}
//         </div>
//       )}
// </div>

    <div>
        <AllBooks books={books}/>
    </div>

    );
};

export default AllBooksPage;