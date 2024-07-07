import { useEffect, useState } from "react";
import Property from "./Property";

const Properties = () => {
    const [property, setProperty] = useState([]);
    useEffect(() => {
        fetch('./estate.json')
        .then(res => res.json())
        .then(data => setProperty(data))
    },[])
    return (
        <div className="mt-6 md:mt-8 lg:mt-14">
            <div className="text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold    ">Estate</h2>
                <p className="text-[#131313B3] text-[12px] md:text-[17px] mt-1 md:mt-3">Find Your Perfect Luxury Home with LuxeHaven:  <br />Excellence in Every Detail</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    property.map(property => <Property
                         key={property.id}
                         property={property}
                         ></Property>)
                }
            </div>
        </div>
    );
};

export default Properties;