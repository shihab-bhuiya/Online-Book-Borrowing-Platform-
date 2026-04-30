import Banner from '@/Component/homepage/banner';
import Marque from '@/Component/homepage/marque';
import BookCard from "@/Component/homepage/bookCard"
import React from 'react';
import { data } from '@/lib/data';

const HomePage = async () => {
    const books = await data();
    console.log("BooKS",books)
    return (
        <div className='container max-w-400 mx-auto'>
        
            <Banner/>
            <Marque></Marque>
            <div> 
            {
                books.map(n =>  <BookCard key={n.id} n={n}/>)
            }
            </div>
        </div>
    );
};

export default HomePage;