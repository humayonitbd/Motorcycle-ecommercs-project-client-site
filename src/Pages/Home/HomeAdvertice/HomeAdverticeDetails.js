import React from 'react';

const HomeAdverticeDetails = ({addverticeProduct, setOrderBike}) => {
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
            <div className="card bg-base-200 shadow-xl ">
            <figure><img className='w-full h-40' src={img} alt="Shoes" /></figure>
            <div className="p-4">
                <h2 className="card-title font-bold">{name}</h2>
                <p className=''> Category: {category}</p>
                <p className=''>Origine Price: ${origin_price}</p>
                <p className=''>Resale Price: ${ resale_price}</p>
                <p className=''>location: {location}</p>
                {/* <p className=''>Mobile: {mobileNumber}</p> */}
                {/* <p className=''>Date: {cellDate}</p> */}
                <p>{productDetails ? productDetails.slice(0, 70): <p>This is best product and this is brand and quality best</p>}</p>
                <div className="card-actions mt-3 justify-between">
                <label
              onClick={() => setOrderBike(addverticeProduct)}
              htmlFor="CategoryModal"
              className="btn bg-[#1a2f5d] w-full"
            >
              Book now
            </label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeAdverticeDetails;