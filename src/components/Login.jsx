import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const Login = () => {
    return (
        <div className="mx-2 md:mx-0">
            <div className="mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-lg bg-[#F3F3F3] rounded-md md:max-w-[750px] mx-auto">
                <h2 className="text-[#403F3F] text-[20px] md:text-[26px] text-center font-semibold">Login your account</h2>
                <div className="md:w-3/4 mx-auto">
                    <form className="card-body">
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
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00b795] text-white text-[16px] md:text-[20px] font-semibold">Login</button>
                        </div>
                    </form>
                    <p className="-mt-4 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold">Do not have an account? <Link to='/register' className="bg-gradient-to-r from-[#b0d800] to-[#00b795] inline-block text-transparent bg-clip-text">Register</Link></p>
                </div>
                
            </div>
            <div className="md:max-w-[750px] mx-auto mt-4 md:mt-8">
                <div className="md:w-3/4 mx-auto">
                    <div className="flex  items-center gap-3">
                        <hr className="w-6/12" />
                        <p className="font-medium">Or</p>
                        <hr className="w-6/12" />
                    </div>
                    <div className="text-center mt-1 md:mt-3">
                        <div className="btn btn-outline rounded-full w-3/4 mx-auto">
                            <div className="text-2xl">
                            <FcGoogle />
                            </div>
                            <p className="text-[14px] md:text-[16px]">Continue with Google</p>
                        </div>
                        <div className="btn btn-outline rounded-full mt-2 md:mt-4 w-3/4 mx-auto">
                            <div className="text-2xl">
                            <VscGithub />
                            </div>
                            <p className="text-[14px] md:text-[16px]">Continue with Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;