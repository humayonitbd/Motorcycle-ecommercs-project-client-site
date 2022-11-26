import React from 'react';

const HomeAdverticeDetails = ({addverticeProduct}) => {
    const {name,
        origin_price,
        resale_price,
        location,
        mobileNumber,
        cellDate,
        productDetails,
        sellerEmail,
        sellerName,
        img,
        category,
        _id} = addverticeProduct;
    return (
        <div>
            <div className="card bg-base-200 shadow-xl p-4">
            <figure><img className='w-full h-40' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='font-semibold'>Category: {category}</p>
                <p className='font-semibold'>Origine Price: ${origin_price}</p>
                <p className='font-semibold'>Resale Price: ${ resale_price}</p>
                <p className='font-semibold'>location: {location}</p>
                <p className='font-semibold'>Mobile: {mobileNumber}</p>
                <p className='font-semibold'>Date: {cellDate}</p>
                <p>{productDetails ? productDetails.slice(0, 100): productDetails}...</p>
                <div className="card-actions mt-3 justify-between">
                    <button className="btn btn-primary">Book</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeAdverticeDetails;