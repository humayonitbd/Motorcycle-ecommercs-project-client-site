import React from 'react'; 
import { Link } from 'react-router-dom';
import './ServiceSec3.css';

const ServiceSec3 = () => {
    return (
        <div>
            <div className='serviceSection flex justify-center items-center text-center'>
                <div className='text-white p-20'>
                <h2 className='font-semibold text-3xl'>Best Product Services</h2>
                <p className='my-5 text-lg'>I wanted to ask in the Premium Theme Forum Support, but it’s only possible if you already puchased the theme. You can’t write if you did not already puchase a premium theme. This is the reason why I have to ask here :) (no I don’t have 80 usd just to test, even if refunded. I prefer to ask before).if you if you already puchased the theme already puchased the theme</p>
               <Link to="/"><button className='bg-[#F33059] text-white border-none btn mt-6 px-10'>see more</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default ServiceSec3;