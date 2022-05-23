import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const MainNavbar = () => {
    return (
        <div className='bg-black'>
            <div className="navbar lg:w-3/4 lg:mx-auto  text-white">


                {/* mobile view */}
                <div className="sm:navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 text-sm p-2 shadow bg-black rounded-box w-52">
                            <CustomLink to='/home' className='p-4'>HOME</CustomLink>
                            <CustomLink to='/blogs' className='p-4'>BLOGS</CustomLink>
                            <CustomLink to='/about' className='p-4'>ABOUT</CustomLink>
                        </ul>
                    </div>
                </div>



                {/* large device view */}
                <div className="lg:navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-sm">
                        <CustomLink to='/home' className='mr-4'>HOME</CustomLink>
                        <CustomLink to='/blogs' className='mr-4'>BLOGS</CustomLink>
                        <CustomLink to='/about' className='mr-4'>ABOUT</CustomLink>
                    </ul>
                </div>
                <div className="navbar-end flex justify-end items-center">
                    <ul className="menu menu-horizontal p-0">
                        <Link to='' className='mr-4'>icon 1</Link>
                        <Link to='' className='mr-4'>icon 2</Link>
                    </ul>
                    {/* avatar */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">

                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>

                            <a>Settings</a>
                            <a>Logout</a>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainNavbar;