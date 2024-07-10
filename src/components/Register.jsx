import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // password verification
        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('password should have at least one upper case character');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('password should have at least one lower case character');
            return;
        }

        setRegisterError('');
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Sign Up');
                logOut();
                setTimeout(() => {
                    navigate('/login');
                }, 1500)
                updateProfile(auth.currentUser, 
                    { displayName: name, photoURL: photo })
                    .then()
                    .catch();
            })
            .catch(error => {
                setRegisterError(error.message);
                console.log(error);
            })
    }
    return (
        <div>
            <div className="animate__animated animate__zoomIn mx-2 md:mx-0">
                <div className=" mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-lg bg-[#F3F3F3] rounded-md md:max-w-[750px] mx-auto">
                    <h2 className="text-[#403F3F] text-[20px] md:text-[26px] text-center font-semibold">Register your account</h2>
                    <div className="md:w-3/4 mx-auto -mt-2">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered "  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered " required />

                            </div>
                            <div className="ml-2">
                                {
                                    registerError && <p className="text-[12px] md:text-[15px] text-red-600">{registerError}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#00b795] text-white text-[16px] md:text-[20px] font-semibold">Register</button>
                            </div>
                        </form>
                        <p className="-mt-4 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold">Already have an account? <Link to='/login' className="bg-gradient-to-r from-[#b0d800] to-[#00b795] inline-block text-transparent bg-clip-text">Login</Link></p>
                    </div>
                </div>

                <SocialLogin></SocialLogin>

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

export default Register;