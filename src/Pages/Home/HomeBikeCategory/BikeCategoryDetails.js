import React from 'react';
import { Link } from 'react-router-dom';

const BikeCategoryDetails = ({category}) => {
    return (
        <div>
            <div className='shadow-lg p-3'>
               <Link to={`/category/${category._id}`}><img className='w-full h-40' src={category.bandimg} alt="categoty" /></Link>
            </div>
        </div>
    );
};

export default BikeCategoryDetails;