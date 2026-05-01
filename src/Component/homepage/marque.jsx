import Marquee from "react-fast-marquee";

const Marque = async () => {
    const res = await fetch("https://book-borrowing-server.onrender.com/books");
    const books = await res.json();
    const allBooks = books.slice(0,5)

    return (
        <div className="bg-[#1A56DB] text-white py-3 my-4 rounded-xl">
            <Marquee speed={100} gradient={false} pauseOnHover={true}>
                {allBooks.map((n) => (
                    <span key={n.id} className="mx-6 text-sm font-medium">
                        📚 New Arrival: <span className="font-bold">{n.title}</span> |
                    </span>
                ))}
                <span className="mx-6 text-sm font-medium">🎉 Special Discount on Memberships! |</span>
                <span className="mx-6 text-sm font-medium">📖 Borrow up to 3 books at a time! |</span>
                <span className="mx-6 text-sm font-medium">🚀 New books added every week! |</span>
            </Marquee>
        </div>
    );
};

export default Marque;