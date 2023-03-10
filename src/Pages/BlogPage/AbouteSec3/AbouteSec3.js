import React from 'react'; 
import './AbouteSec3.css';
const AbouteSec3 = () => {
    return (
        <div className='bagroundImage grid grid-cols-1 md:grid-cols-3 text-white'>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                <h2 className='text-5xl font-bold mb-2'>24+</h2>
                <p className='text-3xl font-semibold'>EMPLOYEES</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='text-center'>
            <h2 className='text-5xl font-bold mb-2'>2+</h2>
                <p className='text-3xl font-semibold'>OFFICES</p>
            </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='text-center'>
            <h2 className='text-5xl font-bold mb-2'>30+</h2>
                <p className='text-3xl font-semibold'>CITIES</p>
            </div>
            </div>
        </div>
    );
};

export default AbouteSec3;