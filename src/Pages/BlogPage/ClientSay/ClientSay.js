import React, { useEffect, useState } from 'react';
import ClientSayDetails from './ClientSayDetails';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ClientSay = () => {
    const [clintSays, setClintSay] = useState([]);
    useEffect(()=>{
        fetch('ClientSay.json')
        .then(res =>res.json())
        .then(data =>setClintSay(data))
    },[])
//    console.log(clintSay)
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
        <div className=' pt-20 pb-10  w-10/12 mx-auto'>
            <h3 className='text-3xl font-semibold pb-8'>What Our Client Say</h3>
            <div className=''>
            <Carousel responsive={responsive}>
            {
                clintSays?.map(clintSay => <ClientSayDetails key={clintSay.id} clintSay={clintSay}></ClientSayDetails>)
            }
           </Carousel>
            
        </div>
        </div>
    );
};

export default ClientSay;