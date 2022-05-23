import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;