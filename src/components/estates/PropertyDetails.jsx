import { useLoaderData, useParams } from "react-router-dom";
import { PiMapPinAreaFill } from "react-icons/pi";
import { TiLocationOutline } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../index.css'


const PropertyDetails = () => {
    const properties = useLoaderData();
    const { id } = useParams();
    const property = properties.find(property => property.id == id);

    console.log(property.latitude)

    return (
        <div className="animate__animated animate__fadeInDown mt-4 md:m-7 lg:mt-10  ">
            <div className="shadow-xl  rounded-xl mx-auto lg:w-[1200px]">
                <div className="px-5 md:px-5  lg:px-8 py-8">
                    <div className='mt-5 md:mt-7 lg:mt-9  ml-1 lg:-ml-1 rounded-md px-3 md:px-4 lg:px-8 -rotate-45 font-roboto bg-[#00b795] text-white font-semibold text-[15px] md:text-[20px] uppercase p-1 absolute'>
                        <p>{property.status}</p>
                    </div>
                    <div className=" flex justify-center">
                        <img className="w-[350px] md:w-[700px] lg:w-[1200px] h-[250px] md:h-[400px] lg:h-[650px] rounded-xl" src={property.image} alt="" />
                    </div>
                    <p className="-mt-8 md:-mt-10 lg:-mt-12 font-roboto font-extrabold text-xl md:text-2xl lg:text-3xl text-white ml-3 ">{property.price}</p>

                    <div className="">
                        <p className="text-[#ff5a5f] text-sm md:text-base font-roboto mt-3 md:mt-6">{property.segment_name}</p>
                        <h3 className="mt-2 md:mt-4 font-roboto text-xl md:text-2xl lg:text-3xl font-semibold">{property.estate_title}</h3>
                        <p className="mt-1 md:mt-2 lg:mt-3 font-roboto opacity-80 text-sm md:text-base text-justify">{property.description}</p>

                        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-20">
                            <div>
                                <p className="flex items-center gap-2 font-medium font-roboto mt-2  md:mt-3 text-[16px] md:text-[20px]">Area <span className="ml-7 md:ml-9">:</span> <span className="flex gap-2 items-center opacity-80 font-normal text-[15px] md:text-[17px]"><PiMapPinAreaFill className="text-[17px] md:text-xl" /> {property.area}</span></p>

                                <p className="flex items-center gap-2 font-medium font-roboto mt-2  md:mt-3 text-[16px] md:text-[20px]">Location <span className="">:</span>  <span className="flex gap-2 items-center opacity-80 font-normal text-[15px] md:text-[17px]"><TiLocationOutline className="text-[17px] md:text-xl" /> {property.location}</span></p>

                                <div>
                                    <p className="mt-3 md:mt-5 text-[16px] md:text-[20px]  font-medium mb-3 md:mb-4 font-roboto">Facilities <span className="ml-1">:</span></p>
                                    <ul className="list-disc grid gap-1 ml-8 md:ml-12 font-roboto text-[#878787] text-[15px] md:text-[17px]">
                                        {
                                            property.facilities.map((i, idx) => <li key={idx}>{i}</li>)
                                        }
                                    </ul>
                                </div>
                                <div className="mt-5 md:mt-6 lg:mt-8 ">
                                    <button className="btn  text-[#00b795] btn-outline border-[#00b795]"><FaShoppingCart className="text-xl" /> Add To Cart</button>

                                </div>
                            </div>
                            <div className="h-[320px] md:h-[350px] lg:h-[380px] md:mt-5 mt-6 rounded-sm grow border-2 border-gray-400 mb-2 md:mb-4 lg:mb-6">
                                <MapContainer center={[property.latitude, property.longitude]} zoom={9} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[property.latitude, property.longitude]}>
                                        <Popup>
                                            A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;