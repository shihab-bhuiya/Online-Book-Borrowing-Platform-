import { data } from '@/lib/data';
import React from 'react';

const bookPromise = async ()=> {
        const books = await fetch("/bookData.json")
        const res = await books.json();
        return res;
}

const Marque = () => {
    // const books = data();
    // console.log(data);
    const books = bookPromise();
    console.log("BOOKS",books);
    return (
        <div>
            <marquee behavior="" direction="">
                {/* {books.map((n) =>
                    <span key={n.id}> {n.title}</span>
                 )} */}
            </marquee>
        </div>
    );
};

export default Marque;