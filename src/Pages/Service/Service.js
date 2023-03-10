import React from 'react';
import OurServices from './OurServices/OurServices';
import OurWebsite from './OurWebsite/OurWebsite';
import ServiceBanner from './ServiceBanner/ServiceBanner';
import ServiceSec2 from './ServiceSec2/ServiceSec2';
import ServiceSec3 from './ServiceSec3/ServiceSec3';

const Service = () => {
    return (
        <div>
            <ServiceBanner />
           <OurServices />
           <ServiceSec2 />
           <ServiceSec3 />
           <OurWebsite />
        </div>
    );
};

export default Service;