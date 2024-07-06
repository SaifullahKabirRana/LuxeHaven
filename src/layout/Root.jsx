import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div className="container  lg:mx-auto">
            <div className=" mx-4 md:mx-8 lg:mx-auto font-poppins">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;