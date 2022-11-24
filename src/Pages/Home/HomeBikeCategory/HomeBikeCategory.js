import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SmallLoading from '../../../SharedPage/Loading/SmallLoading';
import BikeCategoryDetails from './BikeCategoryDetails';

const HomeBikeCategory = () => {
    const {data:categorys = []} = useQuery({
        queryKey: ['categorys'],
        queryFn: ()=>fetch('http://localhost:5000/categorys')
        .then(res => res.json())
    })
     console.log(categorys)
    return (
        <div className='my-20'>
            <div className='text-center my-5'>
                <h2 className='text-5xl font-bold'> Bike Brand Category</h2>
            </div>
            {
                categorys?.length === 0 ? <SmallLoading></SmallLoading> : <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 my-20'>
                {
                    categorys?.length && categorys?.map(category =><BikeCategoryDetails key={category._id} category={category}></BikeCategoryDetails>)
                }
            </div>
            }
            
            
        </div>
    );
};

export default HomeBikeCategory;