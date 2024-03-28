import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { saveReadItem, saveWishList } from "../../Utility/Utility";
import "react-toastify/dist/ReactToastify.css";


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

    const handleReadNow = () =>{
      saveReadItem(idInt);
      
    }
    const handleWishList = () => {
      saveWishList(idInt);
    }

    return (
      <div className="flex flex-col lg:flex-row gap-6 my-8">
        {/* image container */}
        <div className="lg:w-1/2 flex justify-center items-center border-2 py-10 px-5 bg-[#0D0D0D0D]">
          <img className="w-[250px] h-[350px]" src={image} alt="" />
        </div>
        {/* book deatils */}
        <div className="lg:w-1/2">
          <h2 className="text-[#131313] text-4xl font-bold mb-3 playfair-display">
            {bookName}
          </h2>
          <p className="text-[#131313CC] text-lg font-medium mb-5">
            by : {author}
          </p>
          <hr />
          <p className="text-[#131313CC] font-normal my-3">{category}</p>
          <hr />
          <p className="font-normal py-5">
            <span className="text-[#131313] text-base font-bold">Review:</span>{" "}
            {review}
          </p>
          <div className="flex items-center gap-3 mb-5">
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="bg-green-200 text-[#23BE0A] text-sm rounded-xl px-4 py-1"
              >
                {tag}
              </p>
            ))}
          </div>
          <hr />
          <div className="flex items-center gap-10 mt-5">
            <p className="text-[#131313B2]">Number of Pages:</p>
            <span className="text-base font-semibold text-[#131313]">
              {totalPages}
            </span>
          </div>
          <div className="flex items-center gap-24">
            <p className="text-[#131313B2]">Publisher: </p>
            <span className="text-base font-semibold text-[#131313]">
              {publisher}
            </span>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-[#131313B2]">Year of Publishing:</p>
            <span className="text-base font-semibold text-[#131313]">
              {yearOfPublishing}
            </span>
          </div>
          <div className="flex gap-[115px] mb-7">
            <p className="text-[#131313B2]">Rating:</p>
            <span className="text-base font-semibold text-[#131313]">
              {rating}
            </span>
          </div>
          <button
            onClick={handleReadNow}
            className="btn btn-outline border-[#1313134D] mr-2"
          >
            Read Now
          </button>
          <button
            onClick={handleWishList}
            className="btn bg-[#59C6D2] text-white"
          >
            Wishlist
          </button>
        </div>
        <ToastContainer />
      </div>
    );
};

export default BookDeatils;