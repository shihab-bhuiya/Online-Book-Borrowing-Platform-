'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetail = ({ book: initialBook }) => {
    const [book, setBook] = useState(initialBook);

    const handleBorrow = () => {
        if (book.available_quantity === 0) {
            toast.error('Sorry! This book is out of stock!', {
                position: "top-right",
            });
            return;
        }

        setBook(prev => ({
            ...prev,
            available_quantity: prev.available_quantity - 1
        }));

        toast.success(`Successfully borrowed "${book.title}"! 🎉`, {
            position: "top-right",
        });
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-5xl">
            <ToastContainer />

            <Link href="/allBooks" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 w-fit">
                ← Back to All Books
            </Link>

            <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-2xl p-8">

                <div className="md:w-[40%] flex items-start justify-center">
                    <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={book.image_url || "https://placehold.co/400x300?text=No+Image"}
                            alt={book.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="md:w-[60%] flex flex-col justify-between">

                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                        {book.category}
                    </span>

                    <h1 className="text-3xl font-extrabold text-[#0A1D4E] mb-2">
                        {book.title}
                    </h1>

                    <p className="text-gray-500 text-sm mb-4">
                        ✍️ Written by <span className="font-semibold text-gray-700">{book.author}</span>
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {book.description}
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-sm font-medium text-gray-500">Available Copies:</span>
                        <span className={`text-sm font-bold ${book.available_quantity > 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {book.available_quantity > 0 ? `${book.available_quantity} available` : 'Out of Stock'}
                        </span>
                    </div>

                    <button
                        onClick={handleBorrow}
                        disabled={book.available_quantity === 0}
                        className="btn btn-primary w-full md:w-fit px-10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {book.available_quantity > 0 ? '📖 Borrow This Book' : 'Out of Stock'}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default BookDetail;