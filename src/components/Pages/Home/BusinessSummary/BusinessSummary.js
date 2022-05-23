import React from 'react';
import './BusinessSummary.css';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faScrewdriverWrench, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

const BusinessSummary = () => {
    return (
        <div className='bs-section'>
            <div className="container counter">
                <h1 className='text-center'>MILLIONS BUSINESS TRUST US</h1>
                <p className='text-center'>TRY TO UNDERSTAND USERS EXPECTATION</p>
                <div className='border-b-4 border-cyan-500 w-1/2 mx-auto'></div>
                <div className='counter-section'>
                    <div className='my-10 flex flex-col justify-center'>
                        <FontAwesomeIcon icon={faHandshake} className='icon ' />
                        <span className='counter-number flex justify-center'><CountUp end={100} />+</span>
                        <p>SERVED CUSTOMERS</p>
                    </div>
                    <div className='my-10 flex flex-col justify-center'>
                        <FontAwesomeIcon icon={faDollarSign} className='icon ' />
                        <span className='counter-number flex justify-center'><CountUp end={120} />M+</span>
                        <p>ANNUAL REVENUE</p>
                    </div>
                    <div className='my-10 flex flex-col justify-center'>
                        <FontAwesomeIcon icon={faUsersLine} className='icon ' />
                        <span className='counter-number flex justify-center'><CountUp end={33} />K+</span>
                        <p>TOTAL REVIEWS</p>
                    </div>
                    <div className='my-10 flex flex-col justify-center'>
                        <FontAwesomeIcon icon={faScrewdriverWrench} className='icon ' />
                        <span className='counter-number flex justify-center'><CountUp end={50} />+</span>
                        <p>TOTAL TOOLS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;