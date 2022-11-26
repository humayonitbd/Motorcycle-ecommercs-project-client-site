import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import SmallLoading from '../../../SharedPage/Loading/SmallLoading';

const AllSellar = () => {

    const {data:allSellers = [], refetch} = useQuery({
        queryKey:['allSellers'],
        queryFn:()=>fetch(`http://localhost:5000/allSellers`)
        .then(res=>res.json())
    })

    console.log(allSellers)
    //delete mybooked
    const handlerDeleteBtn =(id)=>{
        fetch(`http://localhost:5000/allSellers/${id}`,{
            method: 'DELETE',

        })
        .then(res =>res.json)
        .then(data =>{
            console.log(data)
            toast.success('users deleted successfull!')
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
    <th>Role</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {
    allSellers?.length === 0 ? <SmallLoading></SmallLoading> : <>
    {
      allSellers?.map((allSeller, idx)=><tr>
        <th>
          <label>
            {idx}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{allSeller.name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {allSeller.email}
        </td>
        <td><strong>{allSeller.role}</strong></td>
        <th>
          <button onClick={()=>handlerDeleteBtn(allSeller._id)} className="btn bg-red-500 mr-2">delete</button>
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

export default AllSellar;