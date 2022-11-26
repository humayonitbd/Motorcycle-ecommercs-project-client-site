import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import CategoryModal from '../CategoryModal/CategoryModal';

const CategoryDetails = ({allCategory, setOrderBike}) => {
    const {user} = useContext(AuthContext);
    const {origin_price, img, name, location, sellerName, resale_price, use, category,_id} = allCategory;
   
    const handlerWishlistBtn=()=>{
            const wishListProducts = {
                origin_price,
                img,
                name,
                location,
                sellerName,
                resale_price,
                use,
                category,
                wishlishMan: user?.displayName,
                wishlishEmail: user?.email
            }
            fetch('http://localhost:5000/wishListProducts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(wishListProducts)
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.acknowledged){
                    toast.success('wishListed sucessfull!!!');
                    
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
                <p>Use: {use}</p>
                <p>SellerName: {sellerName}</p>
                <div className="card-actions mt-2 justify-between">
                    <button onClick={handlerWishlistBtn} className='btn btn-primary'>wishlist </button>
                <label onClick={()=>setOrderBike(allCategory)} htmlFor="CategoryModal" className="btn bg-orange-500  border-none">Book now</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryDetails;