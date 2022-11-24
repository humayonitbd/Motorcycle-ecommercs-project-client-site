import React from 'react';
import bike1 from '../../../assets/baneer-img/bike1.jpg'
import bike2 from '../../../assets/baneer-img/bike2.jpg'

const HomeModern = () => {
    return (
        <div>
            <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={bike1} className="w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='w-1/2 md:pl-3 '>
                <p className='font-bold text-lg text-orange-500'>New</p>
                <h1 className="text-5xl font-bold ">NEW RIDE-ON MOTORCYCLES</h1>
                <p className="py-6">Learning to ride a motorcycle can be fun. The best way to learn how to properly ride is in a safe and controlled manner. Always practice safety first and be sure you have appropriate safety gear for the type of riding you will do. Beginners can enroll in motorcycle safety courses that give you the tools to be a proper rider.</p>
                <button className="btn bg-orange-500">Get Started</button>
                </div>
            </div>
            </div>
            {/* //second secton  */}
            <div className="hero mb-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bike2} className="w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='w-1/2 md:pr-3'>
                <p className='font-bold text-lg text-orange-500'>MODERN</p>
                <h1 className="text-5xl font-bold">IN A SPECIAL AND MODERN DESIGN</h1>
                <p className="py-6">A motorcycle, often called a motorbike, bike, cycle, or if three-wheeledtrike, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies.</p>
                <button className="btn bg-orange-500">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeModern;