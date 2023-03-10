import React from 'react';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';

const OurTeamDetails = ({team}) => {
    return (
        <div>
        <div className="card p-0 card-compact bg-white shadow-xl w-[350px]">
        <img src={team.img} className="h-52 w-full " alt="Shoes" />
        <div className="card-body">
            <h2 className="card-title text-black font-bold ">{team.name}</h2>
            <p className='text-gray-600 text-lg mb-3'>{team.profession}</p>
            <div className="card-actions justify-start">
            <div className='flex'>
                <p className='mr-2 text-[#F33059]'><IoLogoLinkedin className='h-8 w-8' /></p>
                <p className='mr-2 text-[#F33059]'><AiOutlineInstagram className='h-8 w-8' /></p>
                <p className='text-[#F33059]'><AiFillFacebook className='h-8 w-8' /></p>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default OurTeamDetails;