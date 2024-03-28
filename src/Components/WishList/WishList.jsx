import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../Utility/Utility";
import WishedBook from "../WishedBook/WishedBook";
const WishList = () => {
  const books = useLoaderData();
  const [wishedBooks, setWishedbooks] = useState([]);
  useEffect(() => {
    const storedId = getStoredWishList();
    if (books.length > 0) {
      const readedBooks = [];
      for (const id of storedId) {
        const book = books.find((book) => book.id === id);
        if (book) {
          readedBooks.push(book);
        }
      }
      setWishedbooks(readedBooks);
    }
  }, [books]);
  return (
    <div>
      {wishedBooks.map((wishList) => (
        <WishedBook key={wishList.id} wishList={wishList}></WishedBook>
      ))}
    </div>
  );
};

export default WishList;
