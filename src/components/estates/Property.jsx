import PropTypes from 'prop-types';

const Property = ({ property }) => {
    const { estate_title, segment_name, price, status, area, location, image } = property;
    return (
        <div>
            <section className='border border-[#13131326] rounded-2xl shadow-md transition-transform transform hover:scale-105 duration-300 '>
                <div className='p-4 md:p-6'>
                    <div className='relative rounded-2xl'>
                        <img className='w-full h-[200px] md:h-[200px] lg:h-[270px] rounded-xl' src={image} alt="" />
                    </div>
                    <div className='top-7 md:top-10 ml-2 rounded-md px-3 font-roboto bg-[#00b795] text-white text-[14px] md:text-[16px] uppercase p-1 absolute'>
                        <p>{status}</p>
                    </div>
                    
                    <h2 className='mt-3 md:mt-5 text-lg md:text-xl lg:text-[22px] font-semibold text-[#131313] '>{estate_title}</h2>
                    <h3 className='mt-1 font-roboto md:mt-2 text-[#131313B3] font-medium text-[16px] mb-1 md:text-[18px]'>{segment_name}</h3>
                    <div>
                        <ul className='flex justify-between font-roboto text-[#878787] text-[15px] md:text-[14px] lg:text-lg'>
                            <li>Area : {area}</li>
                            <li>Location : {location}</li>
                        </ul>
                    </div>
                    <p className='mt-1 md:mt-2 text-lg md:text-xl font-semibold font-roboto'>{price}</p>

                    <button className='btn  font-semibold text-[15px] md:text-lg mt-2 md:mt-5 text-white bg-gradient-to-r from-[#b0d800] to-[#00b795]'>View Property</button>
                    
                    
                </div>
            </section>
        </div>
    );
};

Property.propTypes = {
    property: PropTypes.object.isRequired
};

export default Property;