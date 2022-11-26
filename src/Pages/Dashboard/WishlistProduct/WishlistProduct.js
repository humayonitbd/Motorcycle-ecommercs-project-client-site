import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallLoading from '../../../SharedPage/Loading/SmallLoading';

const WishlistProduct = () => {
        const {user} = useContext(AuthContext);
    const {data:wishlishProducts = []} = useQuery({
        queryKey: ['wishlishProducts', user?.email],
        queryFn:()=>fetch(`http://localhost:5000/wishListProducts?email=${user?.email}`,{
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
        })
        .then(res=>res.json())
     })
    return (
        <div>
            <div><h3 className='text-center text-orange-500 font-bold text-3xl my-5'>Wishlist Product</h3></div>
            <div>
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
        <th>Product Name</th>
        <th>Email</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        wishlishProducts?.length === 0 ? <SmallLoading></SmallLoading> : <>
        {
         wishlishProducts.length && wishlishProducts?.map(( wishlishProduct, idx)=><tr>
            <th>
              <label>
                {idx}
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ wishlishProduct.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{ wishlishProduct.name}</div>
                  
                </div>
              </div>
            </td>
            <td>
              { wishlishProduct.wishlishEmail}
            </td>
            <td>{ wishlishProduct.category}</td>
            <td><s>$ { wishlishProduct.origin_price}</s>/ ${wishlishProduct.resale_price}</td>
          </tr>)
        }
        </>
      }
    </tbody>
    
  </table>
</div>
        </div>
            </div>
        </div>
    );
};

export default WishlistProduct;