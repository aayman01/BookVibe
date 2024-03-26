import { useLoaderData, useParams } from "react-router-dom";

const BookDeatils = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt)
    const {
      bookName,
      author,
      review,
      image,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing,
    } = book;
    return (
        <div>
            <h2>book deatils</h2>
        </div>
    );
};

export default BookDeatils;