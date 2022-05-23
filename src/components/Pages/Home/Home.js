import React from 'react';
import Banner from '../../Shared/Header/Banner/Banner';
import './Home.css';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
        </div>
    );
};

export default Home;