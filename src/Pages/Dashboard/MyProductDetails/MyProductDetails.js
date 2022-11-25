import React from 'react';
import toast from 'react-hot-toast';

const MyProductDetails = ({allMyProduct, handlerDeleteBtn}) => {
    const {cellDate, imageUrl, location, mobileNumber, productCategory, productDetails, productName, productPrice, sellerEmail, _id} = allMyProduct;
    const handlerAdvertiseBtn = ()=>{
        const adverticeProduct ={
                cellDate,
                imageUrl,
                location,
                mobileNumber,
                productCategory,
                productDetails,
                productName,
                productPrice,
                sellerEmail,
                averticeProductID: _id
        }
        fetch('http://localhost:5000/addverticeProducts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(adverticeProduct)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Advertice sucessfull!!!');
                
              }
            
        })
        console.log(adverticeProduct)

    }
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
                <button onClick={()=>handlerDeleteBtn(_id)} className="btn btn-primary">Delete</button>
                <button onClick={handlerAdvertiseBtn} className="btn btn-primary">advertise</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MyProductDetails;