import { Link } from "react-router-dom";


const ErrorPages = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-center items-center h-[100vh] ">
                <div>
                    <img className="w-[220px] md:w-[350px]" src="https://i.ibb.co/9Gm0dJT/pngwing-com.png" alt="" />
                </div>
                <div className="mt-6">
                    <Link to='/'><button className="btn rounded-full bg-black text-white px-6">Go back to Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPages;