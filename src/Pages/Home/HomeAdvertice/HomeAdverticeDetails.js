import React from 'react';

const HomeAdverticeDetails = ({addverticeProduct}) => {
    const {cellDate, imageUrl, location, mobileNumber, productCategory, productDetails, productName, productPrice, sellerEmail, _id} = addverticeProduct;
    return (
        <div>
            <div className="card bg-base-200 shadow-xl p-4">
            <figure><img className='w-full h-40' src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{productName}</h2>
                <p className='font-semibold'>Category: {productCategory}</p>
                <p className='font-semibold'>Price: ${productPrice}</p>
                <p className='font-semibold'>location: {location}</p>
                <p className='font-semibold'>Mobile: {mobileNumber}</p>
                <p className='font-semibold'>Date: {cellDate}</p>
                <p>{productDetails ? productDetails.slice(0, 100): productDetails}...</p>
                <div className="card-actions mt-3 justify-between">
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeAdverticeDetails;