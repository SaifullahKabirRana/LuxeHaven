import { Link } from "react-router-dom";
import errorPhoto from '../assets/pngwing.com.png';
import { Helmet } from "react-helmet-async";


const ErrorPages = () => {
    return (
        <div>
            <Helmet>
                <title>LuxeHaven - ErrorPage</title>
            </Helmet>
            <div className="flex flex-col gap-4 justify-center items-center h-[100vh] ">
                <div>
                    <img className="w-[220px] md:w-[350px]" src={errorPhoto} alt="" />
                </div>
                <div className="mt-6">
                    <Link to='/'><button className="btn rounded-full bg-black text-white px-6">Go back to Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPages;