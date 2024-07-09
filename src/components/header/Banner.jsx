import { FaChevronCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../header/swiper.css';
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='animate__animated animate__zoomInDown mt-4 md:mt-5 lg:mt-8'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
            >
                <SwiperSlide>
                    <div className="banner-1 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[75vh] " >
                        <div className="pt-14 md:pt-24 lg:pt-44 pl-10 md:pl-24 lg:pl-44">
                            <h2 className="bg-gradient-to-r from-white to-[#00b795] inline-block text-transparent bg-clip-text font-glitch text-2xl md:text-4xl lg:text-[50px]  font-bold">OceanView Penthouse</h2>
                            <p className="text-white font-light mt-1 md:mt-3 lg:mt-4 text-[12px] md:text-[16px] lg:text-lg">Sale - Miami Beach - 4500 sq ft</p>
                            <p className="text-white mt-2 md:mt-4 lg:mt-6 text-[16px] md:text-xl lg:text-2xl font-semibold">$5,000,000</p>
                            <Link>
                                <div className="btn btn-sm md:btn-md text-white font-semibold bg-[#00b795] border-none text-[12px]  lg:text-xl  md:text-lg mt-2 md:mt-4 lg:mt-8">
                                    <FaChevronCircleRight />
                                    <button>View Property</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-2 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[75vh] " >
                        <div className="pt-14 md:pt-24 lg:pt-44 pl-10 md:pl-24 lg:pl-44">
                            <h2 className="bg-gradient-to-r from-white to-[#00b795] inline-block text-transparent bg-clip-text font-glitch text-2xl md:text-4xl lg:text-[50px]  font-bold">Luxury Mansion</h2>
                            <p className="text-white font-light mt-1 md:mt-3 lg:mt-4 text-[12px] md:text-[16px] lg:text-lg">Sale - Beverly Hills - 10000 sq ft</p>
                            <p className="text-white mt-2 md:mt-4 lg:mt-6 text-[16px] md:text-xl lg:text-2xl font-semibold">$12,000,000</p>
                            <Link>
                                <div className="btn btn-sm md:btn-md text-white font-semibold bg-[#00b795] border-none text-[12px]  lg:text-xl  md:text-lg mt-2 md:mt-4 lg:mt-8">
                                    <FaChevronCircleRight />
                                    <button>View Property</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-3 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[75vh] " >
                        <div className="pt-14 md:pt-24 lg:pt-44 pl-10 md:pl-24 lg:pl-44">
                            <h2 className="bg-gradient-to-r from-white to-[#00b795] inline-block text-transparent bg-clip-text font-glitch text-2xl md:text-4xl lg:text-[50px]  font-bold">OceanView Penthouse</h2>
                            <p className="text-white font-light mt-1 md:mt-3 lg:mt-4 text-[12px] md:text-[16px] lg:text-lg">Sale - Miami Beach - 4500 sq ft</p>
                            <p className="text-white mt-2 md:mt-4 lg:mt-6 text-[16px] md:text-xl lg:text-2xl font-semibold">$5,000,000</p>
                            <Link>
                                <div className="btn btn-sm md:btn-md text-white font-semibold bg-[#00b795] border-none text-[12px]  lg:text-xl  md:text-lg mt-2 md:mt-4 lg:mt-8">
                                    <FaChevronCircleRight />
                                    <button>View Property</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="banner-4 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[75vh] " >
                        <div className="pt-14 md:pt-24 lg:pt-44 pl-10 md:pl-24 lg:pl-44">
                            <h2 className="bg-gradient-to-r from-white to-[#00b795] inline-block text-transparent bg-clip-text font-glitch text-2xl md:text-4xl lg:text-[50px]  font-bold">Private Beachfront Villa</h2>
                            <p className="text-white font-light mt-1 md:mt-3 lg:mt-4 text-[12px] md:text-[16px] lg:text-lg">Sale - Malibu - 6000 sq ft</p>
                            <p className="text-white mt-2 md:mt-4 lg:mt-6 text-[16px] md:text-xl lg:text-2xl font-semibold">$7,500,000</p>
                            <Link>
                                <div className="btn btn-sm md:btn-md text-white font-semibold bg-[#00b795] border-none text-[12px]  lg:text-xl  md:text-lg mt-2 md:mt-4 lg:mt-8">
                                    <FaChevronCircleRight />
                                    <button>View Property</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;