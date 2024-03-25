import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
      <div className="mt-24 mb-10">
        <h2 className="text-center text-[#131313] font-bold text-4xl mb-10">Books</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>
      </div>
    );
};

export default BookList;