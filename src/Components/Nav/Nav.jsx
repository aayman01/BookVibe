import { NavLink , Link } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li className="mr-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] border-2 border-[#23BE0A]" : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] border-2 border-[#23BE0A]" : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li className="ml-2">
        <NavLink
          to="/pageToRead"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] border-2 border-[#23BE0A]" : ""
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 work-sans"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-3xl text-[#131313] font-bold">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button className="hidden lg:block btn bg-[#23BE0A] text-white">Sign In</button>
        <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
