import React from 'react';
import suzuki from "../../../assets/services-icon/suzuki.png";
import hiro from "../../../assets/services-icon//hiro.png";
import honda from "../../../assets/services-icon/honda.png";
import yamaha from "../../../assets/services-icon/yamaha.jpg";
import bajaj from "../../../assets/services-icon/bajaj.png";
import apache from "../../../assets/services-icon/apache.jpg";

const OurServices = () => {
    const ourServices = [
        {
            id:1,
            icon: suzuki,
            name: "Suzuki Motorcycle",
            details: "RANCON Motor Bikes Ltd. (RMBL), the only Manufacturer and country distributor of SUZUKI Motor Corporation RMBL is one of the most prominent ventures of the RANCON Group and a premier conglomerate of Bangladesh."

        },
        {
            id:2,
            icon: hiro,
            name: "Hiro Motorcycle",
            details: "Hero MotoCorp Limited is an Indian multinational motorcycle and scooter manufacturer headquartered in New Delhi. The company is one of the largest two-wheeler manufacturers in the world"

        },
        {
            id:3,
            icon: honda,
            name: "Honda Motorcycle",
            details: "Motorcycles represent the origin of both Honda’s “mono-zukuri (the art of manufacturing)” and business. Under the philosophy of “building products close to the customer"

        },
        {
            id:4,
            icon: yamaha,
            name: "Yamaha Motorcycle",
            details: "Yamaha Motor Co., Ltd. is a Japanese multinational manufacturer of motorcycles, marine products such as boats and outboard motors, and other motorized products."

        },
        {
            id:5,
            icon: bajaj,
            name: "Bajaj Motorcycle",
            details: "Bajaj Auto Limited is an Indian multinational automotive manufacturing company based in Pune. It manufactures motorcycles, scooters and auto rickshaws. Bajaj Auto is a part of the Bajaj Group. "

        },
        {
            id:6,
            icon: apache,
            name: "Apache Motorcycle",
            details: "The TVS Apache is a brand of motorcycle made by TVS Motors since 2006. As of 2020, more than 4 million Apaches are on the road. Currently the company sells five variants of the TVS Apache."

        },
    ]
    return (
        <div className=' pt-20 pb-10 bg-white w-10/12 mx-auto'>
            <h2 className='text-center text-4xl mb-16 font-bold'>our services</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    ourServices?.map(service => <div key={service.id} className="shadow p-8">
                        <img src={service.icon} alt="" className='w-20 h-16'/>
                        <h3 className='text-2xl font-bold'>{service.name}</h3>
                        <p>{service.details}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurServices;