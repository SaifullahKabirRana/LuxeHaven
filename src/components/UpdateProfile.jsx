import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import userDefaultPic from '../assets/user.png';
import { HiOutlineMail } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className=" flex justify-center mt-8 md:mt-14">
                <div className="flex flex-col justify-center p-8 px-12 md:px-20 shadow-md rounded-xl  dark:bg-gray-50 dark:text-gray-800">
                    <img src={user?.photoURL ? user.photoURL : userDefaultPic} className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className=" space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-lg md:text-2xl font-semibold ">{user?.displayName}</h2>
                            <p className="px-5 flex gap-1 items-center font-roboto text-xs sm:text-base dark:text-gray-600"><span className="text-[16px]  md:text-[20px]"><HiOutlineMail /></span> {user?.email ? user.email : "email is not found"}</p>
                        </div>

                    </div>
                    <div className="flex justify-center mt-2 md:mt-4">
                        <button className="btn text-[#00b795] btn-outline border-[#00b795] px-5 text-[15px] md:text-xl"><FaRegEdit className="text-xl md:text-2xl" />Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;