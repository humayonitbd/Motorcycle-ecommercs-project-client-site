import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import CategoryModal from '../CategoryModal/CategoryModal';
import { FaCheck } from 'react-icons/fa';

const CategoryDetails = ({allCategory,refetch, setOrderBike}) => {
    const {user} = useContext(AuthContext);
    const {origin_price, img, name, location,report, verify, sellerName, resale_price, use, category,_id} = allCategory;
   
    const handlerReportBtn=(id)=>{
        // console.log(id)
            fetch(`http://localhost:5000/reportProducts/${id}`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.acknowledged){
                    toast.success('wishListed sucessfull!!!');
                    refetch();
                }
            
        })

           

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} className="h-60 w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Origin-price: <strong>$<s> {origin_price}</s></strong> </p>
                <p>Resale-price: <strong>${resale_price}</strong></p>
                {/* <p>Use: {use ? user : ''}</p> */}
               {use ? <><p>Use: {use}</p></>: ''}
                {verify ? <><p>SellerName: {sellerName} <FaCheck className='text-green-500 inline'/></p></> : <><p>SellerName:  {sellerName}</p></>}
                <div className="card-actions mt-2 justify-between">
                   {
                    report ? <><button className='btn bg-red-600'>reported</button></> : <> <button onClick={()=>handlerReportBtn(_id)} className='btn btn-primary'>report </button></>
                   }
                <label onClick={()=>setOrderBike(allCategory)} htmlFor="CategoryModal" className="btn bg-orange-500  border-none">Book now</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryDetails;