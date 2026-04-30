import { data } from '@/lib/data';


// const bookPromise = async ()=> {
//         const books = await fetch("https://book-borrowing-server.onrender.com/books")
//         const res = await books.json();
//         return res;
// }

const Marque = async () => {
     const res = await fetch("https://book-borrowing-server.onrender.com/books");
    const books = await res.json();
    // const books = data();
    // console.log(data);
    // const books = bookPromise();
    // console.log("BOOKS",books);
    return (
        <div>
            <marquee >
                {books.map((n) =>
                    <span key={n.id} className='mr-4'> {n.title}</span>
                 )}
            </marquee>
        </div>
    );
};

export default Marque;