import React from 'react';
import BookCard from './bookCard';

const TopBooks = ({books}) => {
  const topBooks = books.slice(0, 8); // Assuming the top 8 books are the first 8 in the list
    return (
        <div className='bg-slate-50 p-5 mt-10 rounded-lg shadow-md font-bold'>
            <div>
                <h2 className='text-3xl text-center mb-5'>Our Top Books</h2>
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
            {
                topBooks.map(n =>  <BookCard key={n.id} n={n}/>)
            }
            </div>
        </div>
    );
};

export default TopBooks;