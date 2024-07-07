import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#12132D0D] to-[#12132D00] font-lexend mt-12 lg:mt-24 p-10 lg:p-20 text-center mulish-font">
            <div className="text-center">
                <a className=" font-extrabold text-[26px] md:text-[34px] lg:text-[40px] font-glitch gap-0">Luxe<span className="text-[#00b795]">Haven</span></a>
                <p className="hidden md:block mt-3 lg:mt-4 mb-6 lg:mb-8 text-[#12132DB2] text-[15px] lg:text-[17px] ">
                Indulge in Unparalleled Elegance with LuxeHaven's Curated Collection of Luxury Estates, <br /> Including Premier Mansions, Stunning Villas, and Exclusive Penthouses
                </p>
                <p className="block md:hidden mt-3 lg:mt-4 mb-6 lg:mb-8 text-[#12132DB2] text-[12px] lg:text-[17px] ">
                Indulge in Unparalleled Elegance with LuxeHaven's Curated Collection of Luxury Estates, Including Premier Mansions, Stunning Villas, and Exclusive Penthouses
                </p>
                <div>
                    <a href="#" className="flex gap-5 justify-center text-[20px] lg:text-[24px]">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaXTwitter></FaXTwitter>
                        <FaGooglePlay></FaGooglePlay>
                        <FaGoogle></FaGoogle>
                    </a>
                </div>
            </div>
            <div className="border-b-2 border-dashed my-7 lg:my-12"></div>
            <p className="font-light text-[#12132D80] text-[13px] lg:text-[17px]">
                2024, All Rights Reserved.
            </p>

        </footer>
    );
};

export default Footer;