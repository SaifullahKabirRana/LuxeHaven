import { FaChevronCircleRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='mt-4 md:mt-5 lg:mt-8'>
            <div className="bg-[linear-gradient(180deg,#03071280,#03071200),url(https://i.ibb.co/yVZwHjt/penthouse.jpg)] rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[75vh] " >
                <div className="pt-10 md:pt-24 lg:pt-44 pl-10 md:pl-24 lg:pl-44">
                    <h2 className="bg-gradient-to-r from-white to-[#00b795] inline-block text-transparent bg-clip-text font-glitch text-2xl md:text-4xl lg:text-[50px]  font-bold">OceanView Penthouse</h2>
                    <p className="text-white font-light mt-1 md:mt-3 lg:mt-4 text-[12px] md:text-[16px] lg:text-lg">Sale - Miami Beach - 4500 sq ft</p>
                    <p className="text-white mt-2 md:mt-4 lg:mt-6 text-[16px] md:text-xl lg:text-2xl font-semibold">$5,000,000</p>
                    <div className="btn btn-sm md:btn-md text-white font-semibold bg-[#00b795] border-none text-[12px]  lg:text-xl  md:text-lg mt-2 md:mt-4 lg:mt-8">
                        <FaChevronCircleRight />
                        <button>View Property</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;