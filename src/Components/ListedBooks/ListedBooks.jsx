import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";


const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="w-full bg-[#0D0D0D0D] rounded-lg mb-16">
        <h2 className="font-bold text-3xl text-center py-6">Books</h2>
      </div>
      <div className="flex justify-center mb-16">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            Sort By<RiArrowDropDownLine />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100 max-w-6xl mx-auto">
        <Link
          rel="noopener noreferrer"
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 text-[#131313CC] font-normal`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          rel="noopener noreferrer"
          to={"wishlist"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 text-[#131313CC] font-normal`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
