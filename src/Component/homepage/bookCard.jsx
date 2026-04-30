import { data } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const BookCard = ({n}) => {
    // const books = data();
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={n.image_url}
      alt="Books" height={40} width={40} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{n.title}</h2>
    <p>{n.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Books Details</button>
    </div>
  </div>
</div>
    );
};

export default BookCard;