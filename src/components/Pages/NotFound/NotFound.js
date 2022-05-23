import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='error-page-container'>
            <h1 className='text-center'>Oops!</h1>
            <div className='flex flex-col justify-center items-center'>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <Link to='/'>
                    <button className="btn btn-outline  btn-lg mt-8">GO HOME PAGE</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;