import React from 'react';
import Banner from '@/component/homepage/banner';
import Marque from '@/component/homepage/marque';
import BookCard from "@/component/homepage/bookCard"
import { data } from '@/lib/data';
import Tips from '@/component/homepage/tips';

const HomePage = async () => {
    const books = await data();
    console.log("BooKS",books)
    const featureBooks = books.slice(0,4);
    return (
        <div className='container max-w-350 mx-auto'>
        
            <div className='mt-5 mb-20'>
            <Marque></Marque>
             </div>
            <Banner/>
            <div className='max-width-300 container mx-auto space-y-5 mt-10'>
                <div> 
                 <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
          Features Books
        </h2>
                <p className='text-xl text-center text-gray-600'>Handpicked books to enrich your mind</p>
</div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                featureBooks.map(n =>  <BookCard key={n.id} n={n}/>)
            }
            </div> </div>
            <div className='max-width-300 container mx-auto space-y-5 mt-10'>
                <Tips></Tips>
            </div>
        </div>
    );
};

export default HomePage;