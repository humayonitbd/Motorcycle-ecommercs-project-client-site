import React from 'react';
import AbouteBanner from './AbouteBanner/AbouteBanner';
import AbouteSec1 from './AbouteSec1/AbouteSec1';
import AbouteSec3 from './AbouteSec3/AbouteSec3';
import ClientSay from './ClientSay/ClientSay';
import OurTeam from './OurTeam/OurTeam';

const About = () => {
    return (
        <div>
           <AbouteBanner />
           <AbouteSec1 />
           <AbouteSec3 />
           <ClientSay />
           <OurTeam />
        </div>
    );
};

export default About;