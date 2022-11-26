import { map } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SmallLoading from '../../../SharedPage/Loading/SmallLoading';
import HomeAdverticeDetails from './HomeAdverticeDetails';

const HomeAdvertice = () => {

    const {data:addverticeProducts = []} = useQuery({
        queryKey: ['addverticeProducts'],
        queryFn:()=>fetch(`http://localhost:5000/addverticeProducts`)
        .then(res=>res.json())
     })

    return (
        <div className='my-10'>
            <div><h3 className='text-center text-2xl md:text-4xl font-bold my-12 '>Advertice Product</h3></div>
            <div className='grid w-10/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    addverticeProducts.length === 0 ? <SmallLoading></SmallLoading> : <>
                   { addverticeProducts.length &&  addverticeProducts?.map(addverticeProduct => {return !addverticeProduct.paid && <HomeAdverticeDetails key={addverticeProduct._id} addverticeProduct={addverticeProduct}></HomeAdverticeDetails>})}
                    </> 
                }
            </div>
        </div>
    );
};

export default HomeAdvertice;
