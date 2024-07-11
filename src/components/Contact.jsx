
const Contact = () => {
    return (
        <div className="mt-6 md:mt-14">
            <section className="py-1 md:py-14 shadow-lg rounded-xl">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-2xl  md:text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4 text-[14px] md:text-[16px]">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 md:w-5 h-4 md:h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-[14px] md:text-[16px]">Chittagong, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 md:w-5 h-4 md:h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span className="text-[14px] md:text-[16px]">123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 md:w-5 h-4 md:h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className="text-[14px] md:text-[16px]">contact@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] text-[12px] md:text-[16px]">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full name" className="input  dark:bg-gray-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] text-[12px] md:text-[16px]">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Email address" className="input dark:bg-gray-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] text-[12px] md:text-[16px]">Message</span>
                            </label>
                           <textarea  name="" id="" className="input dark:bg-gray-100 h-[80px] md:h-[100px]"></textarea>
                        </div>
                        <button type="button" className="btn text-[#00b795] btn-outline border-[#00b795] font-bold text-[16px] md:text-lg">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;