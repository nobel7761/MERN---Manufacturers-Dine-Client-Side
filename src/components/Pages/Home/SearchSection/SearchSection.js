import React from 'react';
import './SearchSection.css';

const SearchSection = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div className='bg-[#EB5C29]'>
            <div className="container search-container">
                <form className="flex">
                    <input type="text" name="" className='search-input' placeholder='Search Here...' />
                    <button className='search-button btn btn-outline' onClick={handleSubmit}>SEARCH</button>
                </form>
            </div>
        </div>
    );
};

export default SearchSection;