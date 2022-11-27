import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallLoading from '../../../SharedPage/Loading/SmallLoading';

const WishlistProduct = () => {
        const {user} = useContext(AuthContext);
    const {data:reportProducts = [], refetch} = useQuery({
        queryKey: ['reportProducts'],
        queryFn:()=>fetch(`http://localhost:5000/reportProducts`)
        .then(res=>res.json())
     })

     const handlerReportProduct=(id)=>{
      fetch(`http://localhost:5000/reportProducts/${id}`,{
        method: 'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.acknowledged){
          toast.success('items deleted successfull!')
          refetch();
        }
      })

     }
    return (
        <div>
            <div><h3 className='text-center text-orange-500 font-bold text-3xl my-5'>report Products</h3></div>
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        reportProducts?.length === 0 ? <SmallLoading></SmallLoading> : <>
        {
         reportProducts.length && reportProducts?.map(( reportProduct, idx)=><tr>
            <th>
              <label>
                {idx}
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ reportProduct.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{ reportProduct.name}</div>
                  
                </div>
              </div>
            </td>
            
            <td>{ reportProduct.category}</td>
            <td><s>$ { reportProduct.origin_price}</s>/ ${reportProduct.resale_price}</td>
            <td><button onClick={()=>handlerReportProduct(reportProduct._id)} className='btn bg-red-500'>delete</button></td>
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