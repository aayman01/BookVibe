import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    );
};

export default Root;