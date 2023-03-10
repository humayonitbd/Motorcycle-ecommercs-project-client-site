import React, { useEffect, useState } from 'react';
import OurTeamDetails from './OurTeamDetails';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurTeam = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('TeamMan.json')
        .then(res =>res.json())
        .then(data =>setTeams(data))
    },[])
   console.log(teams)
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
        <div className='py-20  w-10/12 mx-auto'>
            <h3 className='text-3xl font-semibold pb-8'>Our work team member</h3>
            <div className=''>
          <Carousel responsive={responsive}>
            {
                teams?.map(team => <OurTeamDetails key={team.id} team={team}></OurTeamDetails>)
            }
            </Carousel>
            
        </div>
        </div>
    );
};

export default OurTeam;