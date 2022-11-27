import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState('');
    const [sellerLoading, setSellerLoading] = useState(true);
    console.log(isSeller)
    useEffect(()=>{
        if(email){
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res =>res.json())
        .then(data =>{
            if(data.isAdmin){
                setIsSeller(data.isAdmin)
                setSellerLoading(false)
               
            }
        })
        }
    },[email])
    return [isSeller, sellerLoading]
};

export default useSeller;