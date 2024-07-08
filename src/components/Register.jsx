import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import SocialLogin from "./SocialLogin/SocialLogin";

const Register = () => {
    return (
        <div className="animate__animated animate__zoomIn mx-2 md:mx-0">
            <div className=" mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-lg bg-[#F3F3F3] rounded-md md:max-w-[750px] mx-auto">
                <h2 className="text-[#403F3F] text-[20px] md:text-[26px] text-center font-semibold">Register your account</h2>
                <div className="md:w-3/4 mx-auto -mt-2">
                    <form className="card-body">
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered " required />
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
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00b795] text-white text-[16px] md:text-[20px] font-semibold">Register</button>
                        </div>
                    </form>
                    <p className="-mt-4 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold">Already have an account? <Link to='/login' className="bg-gradient-to-r from-[#b0d800] to-[#00b795] inline-block text-transparent bg-clip-text">Login</Link></p>
                </div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;