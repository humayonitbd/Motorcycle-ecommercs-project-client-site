import React from 'react';
import { Link } from 'react-router-dom';

const OurWebsiteCart = ({ourWebsite}) => {
    return (
        <div className='py-5'>
            <div className="card mr-6 bg-base-100 shadow-xl">
            <figure><img src={ourWebsite.thumbnail} className="w-full h-60" alt="Shoes" /></figure>
            <div className="card-body">
            <h3 className='text-2xl font-semibold mb-3'>{ourWebsite.name ? ourWebsite.name.slice(0, 20): ourWebsite.name}</h3>
                <div className="card-actions">
                <Link to={`${ourWebsite.link}`}><button className="btn bg-[#F33059] border-none w-full">Buy Now</button></Link> 
                </div>
            </div>
            </div>

        </div>
    );
};

export default OurWebsiteCart;