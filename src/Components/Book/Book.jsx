import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, image, tags, author, bookName, category, rating } = book;
  return (
    <Link
      to={`/bookDeatils/${id}`}
      className="card card-compact  bg-base-100 p-4 border"
    >
      <figure className="bg-[#F3F3F3] rounded-xl py-4">
        <img src={image} alt="Books" />
      </figure>
      <div className="flex items-center gap-3 p-4 ">
        {tags.map((tag, idx) => (
          <p
            key={idx}
            className="bg-green-200 text-[#23BE0A] text-sm rounded-xl px-4 py-1"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p className="text-base font-medium mb-3">By : {author}</p>
        <hr />
      </div>
      <div className="flex justify-between p-4">
        <p className="font-normal text-base">{category}</p>
        <div className="flex items-center gap-1">
          {rating}
          <CiStar />
        </div>
      </div>
    </Link>
  );
};
Book.propTypes = {
    book : PropTypes.object.isRequired
}
export default Book;
