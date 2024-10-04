import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import userDefaultPic from '../assets/user.png';
import { HiOutlineMail } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const { user} = useContext(AuthContext);
    const auth = getAuth();
    const [control, setControl] = useState(false)
    

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');

        if (name.length > 0 && photo.length > 0) {
            updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                .then(result => {
                 console.log(result);
                 toast.success('Successfully Update');
                 
                // refresh data
                 setControl(!control)
                })
                .catch(error => {
                    console.log(error.message);
                })
                // console.log(updateProfile);
        }


    }

    return (
        <div>
            <Helmet>
                <title>LuxeHaven - UpdateProfile</title>
            </Helmet>
            <div className=" flex justify-center mt-8 md:mt-14">
                <div className="flex flex-col justify-center p-8 px-12 md:px-20 shadow-md rounded-xl  dark:bg-gray-50 dark:text-gray-800">
                    <img src={user?.photoURL ? user.photoURL : userDefaultPic} className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] mx-auto rounded-full dark:bg-gray-500  aspect-square" />
                    <div className=" space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-lg md:text-2xl font-semibold ">{user?.displayName}</h2>
                            <p className="px-5 flex gap-1 items-center font-roboto text-xs sm:text-base dark:text-gray-600"><span className="text-[16px]  md:text-[20px]"><HiOutlineMail /></span> {user?.email ? user.email : "email is not found"}</p>
                        </div>

                    </div>
                    {/* <div className="flex justify-center mt-2 md:mt-4">
                        <button className="btn text-[#00b795] btn-outline border-[#00b795] px-5 text-[15px] md:text-xl"><FaRegEdit className="text-xl md:text-2xl" />Update</button>

                    </div> */}
                    <div className="flex justify-center mt-2 md:mt-4">
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button onClick={() => document.getElementById('my_modal_3').showModal()}><button className="btn text-[#00b795] btn-outline border-[#00b795] px-5 text-[15px] md:text-xl"><FaRegEdit className="text-xl md:text-2xl" />Update</button></button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <div className="px-4">
                                        <form onSubmit={handleUpdate} className="">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Name</span>
                                                </label>
                                                <input type="name" name="name" placeholder="Name" className="input input-bordered"
                                                    defaultValue={user.displayName} required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Photo URL</span>
                                                </label>
                                                <input type="text" name="photo" placeholder="Photo URL"
                                                    defaultValue={user.photoURL}
                                                    className="input input-bordered"
                                                />

                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn bg-[#00b795] text-white text-[16px] md:text-[20px] font-semibold">Update</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>

                </div>
            </div>
            <ToastContainer className=''
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            >
            </ToastContainer>
        </div>
    );
};

export default UpdateProfile;