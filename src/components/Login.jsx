import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        setLoginError('')
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Successfully Sign Up');
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                setLoginError(error.message)

            })
            
    }
    
    return (
        <div>
            <Helmet>
                <title>LuxeHaven - Login</title>
            </Helmet>
            <div className="animate__animated animate__zoomIn mx-2 md:mx-0">
                <div className="mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-lg bg-[#F3F3F3] rounded-md md:max-w-[750px] mx-auto">
                    <h2 className="text-[#403F3F] text-[20px] md:text-[26px] text-center font-semibold">Login your account</h2>
                    <div className="md:w-3/4 mx-auto">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Password</span>
                                </label>
                                <div className="flex relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="w-full input input-bordered " required/>
                                    <span className="absolute right-5 top-3 text-xl md:text-2xl " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VscEyeClosed /> : <VscEye />}</span>
                                </div>

                            </div>
                            <div className="ml-2">
                                {
                                    loginError && <p className="text-[12px] md:text-[15px] text-red-600">{loginError}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#00b795] text-white text-[16px] md:text-[20px] font-semibold">Login</button>
                            </div>
                        </form>
                        <p className="-mt-4 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold">Do not have an account? <Link to='/register' className="bg-gradient-to-r from-[#b0d800] to-[#00b795] inline-block text-transparent bg-clip-text">Register</Link></p>
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

export default Login;