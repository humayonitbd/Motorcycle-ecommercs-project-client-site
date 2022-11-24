import React from 'react';
import Home from '../Home/Home';
import HomeBikeCategory from '../HomeBikeCategory/HomeBikeCategory';
import HomeModern from '../HomeModern/HomeModern';

const HomeMain = () => {
    return (
        <div>
            <Home></Home>
            <HomeBikeCategory></HomeBikeCategory>
            <HomeModern></HomeModern>
        </div>
    );
};

export default HomeMain;