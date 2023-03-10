import React from 'react'; 
import { Link } from 'react-router-dom';
import img from "../../../assets/servicesImage/mtorcycle.webp";

const ServiceSec2 = () => {
    return (
        <div className='bg-white pt-10 pb-20'>
            <div className='grid grid-cols-1 w-10/12 mx-auto md:grid-cols-2 gap-10'>
            <div>
                <h5 className='font-bold text-xl text-[#F33059]'>Service</h5>
                <h2 className='text-5xl font-bold my-5'>Our best motorcycle brand  </h2>
                <p className='text-lg'>A motorcycle is a two or three-wheeled motor vehicle steered by a handlebar from a saddle-style seat. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding</p>
                <Link to="/"><button className='bg-[#F33059] btn border-none mt-8'>visite more</button></Link> 
            </div>
            <div className='flex justify-end items-center'>
                <div>
                    <img src={img} className="" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceSec2;