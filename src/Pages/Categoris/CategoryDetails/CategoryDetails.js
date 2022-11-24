import React, { useState } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';

const CategoryDetails = ({allCategory, setOrderBike}) => {
    const {origin_price, img, name, location, resale_price, use, category} = allCategory;
   
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} className="h-60 w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Origin-price: <strong>${origin_price}</strong> </p>
                <p>Resale-price: <strong>${resale_price}</strong></p>
                <p>Use: {use}</p>
                <div className="card-actions justify-end">
                <label onClick={()=>setOrderBike(allCategory)} htmlFor="CategoryModal" className="btn bg-orange-500 w-full border-none">Book now</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryDetails;