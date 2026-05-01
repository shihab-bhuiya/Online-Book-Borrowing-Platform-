import React from 'react';
import Banner from '@/component/homepage/banner';
import Marque from '@/component/homepage/marque';
import BookCard from "@/component/homepage/bookCard"
import { data } from '@/lib/data';

const HomePage = async () => {
    const books = await data();
    console.log("BooKS",books)
    const featureBooks = books.slice(0,4);
    return (
        <div className='container max-w-400 mx-auto'>
        
            <Banner/>
            <Marque></Marque>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                featureBooks.map(n =>  <BookCard key={n.id} n={n}/>)
            }
            </div>
        </div>
    );
};

export default HomePage;