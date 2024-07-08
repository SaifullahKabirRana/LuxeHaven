import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const SocialLogin = () => {
    return (
        <div className="">
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

export default SocialLogin;