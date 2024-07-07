import PropTypes from 'prop-types';

const Property = ({ property }) => {
    const { estate_title, segment_name, price, status, area, location, image } = property;
    return (
        <div>
            <section className='border border-[#13131326] rounded-2xl shadow-md transition-transform transform hover:scale-105 duration-300 '>
                <div className='p-4 md:p-6'>
                    <div className='relative rounded-2xl'>
                        <img className='h-[170px] md:h-[200px] lg:h-[300px] rounded-xl' src={image} alt="" />
                    </div>
                    <div className='top-10 bg-[white] absolute'>
                        <p>{status}</p>
                    </div>
                    {/* <div className='flex mt-2 md:flex '>
                    <p  className='bg-[#23BE0A0D] text-[#23BE0A] p-2 px-6 rounded-[30px] font-semibold text-[15px] md:text-[18px]'>{status}</p>
                    </div> */}
                    <h2 className='mt-3 md:mt-5 text-xl md:text-2xl font-semibold text-[#131313] '>{estate_title}</h2>
                    <h3 className='mt-1 md:mt-2 text-[#131313B3] font-medium text-[18px]'>{segment_name}</h3>
                    
                    
                </div>
            </section>
        </div>
    );
};

Property.propTypes = {
    property: PropTypes.object.isRequired
};

export default Property;