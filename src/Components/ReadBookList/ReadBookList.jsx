import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadItem } from "../../Utility/Utility";
import Readedbook from "../Readedbook/Readedbook";

const ReadBookList = () => {
    const books = useLoaderData();
    const [readedBooks, setReadedbooks] = useState([]);
    // console.log(books)
    useEffect(()=>{
        const storedId = getStoredReadItem();
        if(books.length > 0){
            const readedBooks = [];
            for(const id of storedId){
                const book = books.find(book => book.id === id)
                if(book){
                    readedBooks.push(book)
                }    
            }
            setReadedbooks(readedBooks);
        }
    },[books]);
    console.log(readedBooks);
    return (
      <div>
        {
            readedBooks.map(readedbook => 
            <Readedbook 
                key={readedbook.id}
                readedbook={readedbook}>
            </Readedbook>)
        }
      </div>
    );
};

export default ReadBookList;