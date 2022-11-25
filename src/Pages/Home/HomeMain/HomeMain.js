import React from 'react';
import Home from '../Home/Home';
import HomeAdvertice from '../HomeAdvertice/HomeAdvertice';
import HomeBikeCategory from '../HomeBikeCategory/HomeBikeCategory';
import HomeModern from '../HomeModern/HomeModern';

const HomeMain = () => {
    return (
        <div>
            <Home></Home>
            <HomeBikeCategory></HomeBikeCategory>
            <HomeModern></HomeModern>
            <HomeAdvertice></HomeAdvertice>
        </div>
    );
};

export default HomeMain;