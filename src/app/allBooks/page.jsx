import { data } from '../../lib/data';
import AllBooksClient from '../../component/allBookPage/allBooksClient';

const AllBooksPage = async () => {
  const books = await data();
  const categories = ['All', ...new Set(books.map((b) => b.category))];
  return <AllBooksClient books={books} categories={categories} />;
};

export default AllBooksPage;