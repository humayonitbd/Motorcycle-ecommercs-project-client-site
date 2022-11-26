import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SmallLoading from '../../SharedPage/Loading/SmallLoading';
import CategoryDetails from './CategoryDetails/CategoryDetails';
import CategoryModal from './CategoryModal/CategoryModal';

const Categoris = () => {
    const category = useLoaderData();
    const [orderBike, setOrderBike] = useState(null);

    const {data:allCategorys = []} = useQuery({ 
        queryKey:['allCategorys'],
        queryFn:()=>fetch(`http://localhost:5000/allCategory/?category=${category.category}`)
        .then(res =>res.json())
 })
console.log(allCategorys)
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-start'><h3 className='text-2xl font-bold rounded text-center text-white p-2 px-10 bg-orange-500 inline my-5'>{category.category} category</h3></div>
            <div className='my-10'>
                {
                    allCategorys?.length === 0 ? <SmallLoading></SmallLoading> : <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
                        {
                            allCategorys?.map(allCategory => { return !allCategory.paid && <CategoryDetails key={allCategory._id} allCategory={allCategory} setOrderBike={setOrderBike}></CategoryDetails>})
                        }
                    </div>
                }
            </div>
            {orderBike && <CategoryModal orderBike={orderBike} setOrderBike={setOrderBike}></CategoryModal>}
            
        </div>
    );
};

export default Categoris;