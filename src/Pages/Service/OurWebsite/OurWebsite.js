import React, { useEffect, useState } from 'react';
import OurWebsiteCart from './OurWebsiteCart';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurWebsite = () => {
    const [ourWebsites, setOurWebsites] = useState([]);

    useEffect(()=> {
        fetch('OurWebsite.json')
        .then(res =>res.json())
        .then(data => setOurWebsites(data))
    }, [])
    console.log(ourWebsites)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className='bg-white py-20'>
           <div className='w-10/12 mx-auto '>
        <h2 className='text-start text-4xl mb-5 font-bold'>Our products Category</h2>
            <div className='py-10'>
            <Carousel responsive={responsive}>
            {
                    ourWebsites?.map(ourWebsite => <OurWebsiteCart key={ourWebsite.id} ourWebsite={ourWebsite}></OurWebsiteCart>)
                }
            </Carousel>
                
            </div>
           </div>
        </div>
    );
};

export default OurWebsite;