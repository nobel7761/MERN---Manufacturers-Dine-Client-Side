import React from 'react';
import './CrossSection.css';

const CrossSection = () => {
    return (
        <div className='container hidden lg:block relative'>
            <div className="main-section">
                <div className='bg-[#F97316] cross-section text-center text-white yellow-section'>
                    <p>PUNCTUAL DELIVERY TIME</p>
                    <small>99% Delivered On Time</small>
                </div>
                <div className='bg-black cross-section text-center text-white black-section'>
                    <p>HIGH TECHNOLOGY FACTORY</p>
                    <small>& Environment Friendly</small>
                </div>
                <div className='bg-gray-400 cross-section text-center text-white gray-section'>
                    <p>HIGH STANDARD LABORS</p>
                    <small>99% QC Passed</small>
                </div>
            </div>
        </div>
    );
};

export default CrossSection;