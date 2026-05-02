import BookDetail from '@/component/bookDetail';
import { data } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const booksData =async(id)=>{
    const res = await fetch(`https://book-borrowing-server.onrender.com/books/${id}`);
    const books = await res.json();
    return books;
}

const BookDetails = async ({params}) => {
    const {id} = await params;
    const book = await booksData(id)

    console.log("ID",book);

    
   
    return (<div className='grid grid-cols-12'> 
        {/* left side */}
     

        {/* Card */}
         <div className='col-span-9'> <BookDetail book={book} />;
         </div>

        </div>
    );
};

export default BookDetails;

//     <div className="container mx-auto px-6 py-12 max-w-5xl">

        //     {/* Back Button */}
        //     <Link href="/allBooks" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 w-fit">
        //         ← Back to All Books
        //     </Link>

        //     <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-2xl p-8">

        //         {/* LEFT: Book Image */}
        //         <div className="md:w-[40%] flex items-start justify-center">
        //             <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-md">
        //                 <Image
        //                     src={book.image_url || "https://placehold.co/400x300?text=No+Image"}
        //                     alt={book.title}
        //                     fill
        //                     className="object-cover"
        //                 />
        //             </div>
        //         </div>

        //         {/* RIGHT: Book Info */}
        //         <div className="md:w-[60%] flex flex-col justify-between">
                    
        //             {/* Category Badge */}
        //             <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
        //                 {book.category}
        //             </span>

        //             {/* Title */}
        //             <h1 className="text-3xl font-extrabold text-[#0A1D4E] mb-2">
        //                 {book.title}
        //             </h1>

        //             {/* Author */}
        //             <p className="text-gray-500 text-sm mb-4">
        //                 ✍️ Written by <span className="font-semibold text-gray-700">{book.author}</span>
        //             </p>

        //             {/* Description */}
        //             <p className="text-gray-600 leading-relaxed mb-6">
        //                 {book.description}
        //             </p>

        //             {/* Availability */}
        //             <div className="flex items-center gap-2 mb-6">
        //                 <span className="text-sm font-medium text-gray-500">Available Copies:</span>
        //                 <span className={`text-sm font-bold ${book.available_quantity > 0 ? 'text-green-600' : 'text-red-500'}`}>
        //                     {book.available_quantity > 0 ? `${book.available_quantity} available` : 'Out of Stock'}
        //                 </span>
        //             </div>

        //             {/* Borrow Button */}
        //             <button
                        
        //                 disabled={book.available_quantity === 0}
        //                 className="btn btn-primary w-full md:w-fit px-10 disabled:opacity-50 disabled:cursor-not-allowed"
        //             >
        //                 {book.available_quantity > 0 ? '📖 Borrow This Book' : 'Out of Stock'}
        //             </button>

        //         </div>
        //     </div>
        // </div>