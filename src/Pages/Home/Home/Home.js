import React from 'react';
import baneer from '../../../assets/baneer-img/slider.webp';
import banee2 from '../../../assets/baneer-img/sliderbg-3.webp';
import baneer1 from '../../../assets/baneer-img/sliderbg-2.webp'

const Home = () => {
    return (
        <div>
             <div className="carousel w-full height[80px]" style={{height: '500px'}}>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={baneer1} className="w-full" alt=''/>
                    <div className="absolute text-white left-1/3 top-1/3">
                        <div className='text-center'>
                        <p className='text-lg font-bold'>trusts yourself</p>
                        <h2 className='text-7xl font-bold'>Motorcycle </h2>
                        <button className='btn mt-8 bg-orange-500 border-none'>Shop now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                   
                    </div>
                   
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banee2} className="w-full" alt=''/>
                    <div className="absolute text-white left-1/3 top-1/3">
                        <div className='text-center'>
                        <p className='text-lg font-bold'>trusts yourself</p>
                        <h2 className='text-7xl font-bold'>Racing is life</h2>
                        <button className='btn mt-8 bg-orange-500 border-none'>Shop now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={baneer} className="w-full" alt='' />
                    <div className="absolute text-white left-1/3 top-1/3">
                        <div className='text-center'>
                        <p className='text-lg font-bold'>trusts yourself</p>
                        <h2 className='text-7xl font-bold'>Bike Rider </h2>
                        <button className='btn mt-8 bg-orange-500 border-none'>Shop now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                </div>
        </div>
    );
};

export default Home;