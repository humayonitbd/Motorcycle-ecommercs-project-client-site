import React from 'react';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';

const ClientSayDetails = ({clintSay}) => {
    return (
        <div>
        <div className="card mr-6 mb-1 p-0 card-compact bg-white shadow-xl">
        
        <div className='flex justify-start items-center'>
        <figure><img src={clintSay.img} className="w-20 h-20 rounded-full mr-5" alt="Shoes" /></figure>
        <div>
        <h2 className="card-title text-black font-bold ">{clintSay.name}</h2>
        <p className='text-gray-600 text-md mb-3'>{clintSay.profession}</p>
        </div>
        </div>
        <div className="card-body">
            
            <p className='text-black text-md'>{clintSay.details}</p>
        </div>
        </div>
        </div>
    );
};

export default ClientSayDetails;