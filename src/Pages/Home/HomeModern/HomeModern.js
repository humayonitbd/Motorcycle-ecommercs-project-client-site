import React from 'react';
import { Link } from 'react-router-dom';
import bike1 from '../../../assets/baneer-img/suzuki.jpg'
import bike2 from '../../../assets/baneer-img/yamaha.jpg'

const HomeModern = () => {
    return (
        <div className='py-20 bg-white md:m-10/12 md:mx-auto'>
            <div className='text-black'>
                <h2 className='text-center md:text-4xl text-2xl   font-bold'>Ours MODERN MOTORCYCLES</h2>
                <p className='text-center md:w-1/2 my-5 mx-auto px-5'>Our modern motorcycles are made in a unique design and its motorcycles are very good in terms of quality.Any type of motorcycle is available from us, so you can check and buy our motorcycle from them</p>
            </div>
            <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={bike1} className="md:w-1/2 rounded-lg" alt=''/>
                <div className='md:w-1/2 text-black md:pl-3 '>
                <p className='font-bold text-lg text-orange-500'>New</p>
                <h1 className="md:text-4xl text-2xl font-bold ">NEW SUZUKI   MOTORCYCLES</h1>
                <p className="py-6">Learning to ride a motorcycle can be fun. The best way to learn how to properly ride is in a safe and controlled manner. Always practice safety first and be sure you have appropriate safety gear for the type of riding you will do. Beginners motorcycle safety courses that give you the tools to be a proper rider.</p>
               <Link to={`/category/637f412d291a873c0831f598`}><button className="btn border-none bg-orange-500">See more</button></Link> 
                </div>
            </div>
            </div>
            {/* //second secton  */}
            <div className="hero mb-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bike2} className="md:w-1/2 rounded-lg" alt=''/>
                <div className='md:w-1/2 text-black md:pr-3'>
                <p className='font-bold text-lg text-orange-500'>MODERN</p>
                <h1 className="md:text-4xl text-2xl font-bold">NEW YAMAHA   MOTORCYCLES</h1>
                <p className="py-6">A motorcycle, often called a motorbike, bike, cycle, or if three-wheeledtrike, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies.</p>
               <Link to={`/category/637f412d291a873c0831f596`}><button className="btn border-none bg-orange-500">See more</button></Link> 
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeModern;