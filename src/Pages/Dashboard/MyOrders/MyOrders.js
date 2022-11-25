import { useQuery } from '@tanstack/react-query';
import colorNames from 'daisyui/src/colors/colorNames';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallLoading from '../../../SharedPage/Loading/SmallLoading';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

     const {data:mybookedProducts = [], refetch} = useQuery({
        queryKey: ['mybookedProducts', user?.email],
        queryFn:()=>fetch(`http://localhost:5000/mybookedProducts?email=${user?.email}`,{
          headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
     })

     //delete mybooked
    const handlerDeleteBtn =(id)=>{
        fetch(`http://localhost:5000/mybookedProducts/${id}`,{
            method: 'DELETE',

        })
        .then(res =>res.json)
        .then(data =>{
            console.log(data)
            toast.success('Items deleted successfull!')
            refetch();
            console.log(data)
        })

    }
        
     
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        mybookedProducts?.length === 0 ? <SmallLoading></SmallLoading> : <>
        {
         mybookedProducts.length && mybookedProducts?.map((mybookedProduct, idx)=><tr>
            <th>
              <label>
                {idx}
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={mybookedProduct.productImg} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{mybookedProduct.productName}</div>
                  
                </div>
              </div>
            </td>
            <td>
              {mybookedProduct.email}
            </td>
            <td>${mybookedProduct.productPrice}</td>
            <th>
              <button onClick={()=>handlerDeleteBtn(mybookedProduct._id)} className="btn bg-red-500 mr-2">delete</button>
              
              <button className="btn bg-orange-500">pay</button>
            </th>
          </tr>)
        }
        </>
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;