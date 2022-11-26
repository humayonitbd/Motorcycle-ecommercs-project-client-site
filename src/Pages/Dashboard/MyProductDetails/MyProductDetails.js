import React from 'react';
import toast from 'react-hot-toast';

const MyProductDetails = ({allMyProduct, handlerDeleteBtn}) => {
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
        advertice,
        _id} = allMyProduct;
    const handlerAdvertiseBtn = (id)=>{
        fetch(`http://localhost:5000/addverticeProducts/${id}`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Advertice sucessfull!!!');
                
              }
            
        })
        

    }
    return (
        <div>
            <div className="card bg-base-200 shadow-xl p-4">
            <figure><img className='w-full h-40' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='font-semibold'>Category: {category}</p>
                <p className='font-semibold'>Original Price: <s>${ origin_price}</s></p>
                <p className='font-semibold'>Relese Price: ${resale_price}</p>
                <p className='font-semibold'>location: {location}</p>
                <p className='font-semibold'>Mobile: {mobileNumber}</p>
                <p className='font-semibold'>Date: {cellDate}</p>
                <p>{productDetails ? productDetails.slice(0, 100): productDetails}...</p>
                <div className="card-actions mt-3 justify-between">
                <button onClick={()=>handlerDeleteBtn(_id)} className="btn btn-primary">Delete</button>
                {
                    advertice ? <button className='btn btn-primary'>adverticed true</button> : <><button onClick={()=>handlerAdvertiseBtn(_id)} className="btn btn-primary">advertise</button></>
                }
                </div>
            </div>
            </div>
        </div>
    );
};

export default MyProductDetails;