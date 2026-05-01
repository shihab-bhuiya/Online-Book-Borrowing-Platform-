import { data } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({n}) => {
    // const books = data();
    return (
        <div className="card bg-base-100 w-full shadow-md">
  <figure className="h-48 overflow-hidden">
    <Image
      src={n.image_url}
      alt={n.title}
      width={400}
      height={300}
      className="w-full h-full object-cover"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-base md:text-lg">{n.title}</h2>
    <p className="text-sm text-gray-500 line-clamp-2">{n.description}</p>
    <div className="card-actions justify-end mt-2">
     <Link href={`/bookDetails/${n.id}`}>  <button className="btn btn-primary btn-sm md:btn-md w-full">View Book Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;