import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { readedbookContext } from "../../Utility/ContextApi";

const Readedbook = ({ readedbook }) => {
  const {
    id,
    bookName,
    tags,
    yearOfPublishing,
    author,
    publisher,
    category,
    rating,
    image,
    totalPages,
  } = readedbook;
  return (
    <readedbookContext.Provider value={{bookName, totalPages}}>
      <div>
        <div className="p-6 rounded-md lg:flex gap-6 border shadow-xl mt-7 mb-5">
          <div>
            <img
              src={image}
              alt=""
              className="w-[200px] bg-[#0D0D0D0D] border p-5 rounded-md"
            />
          </div>
          <div className="mt-6 mb-2">
            <h2 className="text-2xl font-bold text-black tracking-wide mb-3">
              {bookName}
            </h2>
            <p className="text-[#131313CC] text-lg font-medium mb-3">
              By : {author}
            </p>
            <div className="lg:flex gap-3 my-4">
              <div className="flex items-center mb-4 lg:mb-0 gap-3">
                {tags.map((tag, idx) => (
                  <p
                    key={idx}
                    className="bg-green-200 text-[#23BE0A] text-sm rounded-xl px-4 py-1"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <CiLocationOn />
                </span>
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-4 text-[#13131399]">
              <div className="flex items-center gap-1">
                <span>
                  <GoPeople />
                </span>
                <p>Publisher: {publisher}</p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <FaRegFileAlt />
                </span>
                <p>Pages: {totalPages}</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-3 mt-3">
              <p className="bg-[#328EFF26] text-[#328EFF] text-base rounded-[30px] font-normal px-3 py-2">
                Category: {category}
              </p>
              <p className="bg-[#FFAC3326] rounded-[30px] text-[#FFAC33] text-base font-normal px-3 py-2">
                Rating: {rating}
              </p>
              <Link
                to={`/bookDeatils/${id}`}
                className="bg-[#23BE0A] rounded-[30px] text-white text-lg font-medium px-3 py-2"
              >
                View Deatils
              </Link>
            </div>
          </div>
        </div>
      </div>
    </readedbookContext.Provider>
  );
};
Readedbook.propTypes = {
    readedbook : PropTypes.object.isRequired
}
export default Readedbook;
