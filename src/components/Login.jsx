import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="mt-5 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-5 md:pb-8 lg:pb-10 shadow-lg bg-[#F3F3F3] rounded-md md:max-w-[750px] mx-auto">
                <h2 className="text-[#403F3F] text-[20px] md:text-[26px] text-center font-semibold">Login your account</h2>
                <div className="md:w-3/4 mx-auto">
                    <form  className="card-body">
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
                    <p className="text-center text-[#6f7070] text-[16px] font-semibold">Do not have an account? <Link to='/register' className="bg-gradient-to-r from-[#b0d800] to-[#00b795] inline-block text-transparent bg-clip-text">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;