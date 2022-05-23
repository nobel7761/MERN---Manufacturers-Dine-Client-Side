import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import auth from "./../../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const MainNavbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-black">
      <div className="navbar lg:w-3/4 lg:mx-auto  text-white">
        {/* mobile view */}
        <div className="sm:navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 text-sm p-2 shadow bg-black rounded-box w-52"
            >
              <CustomLink to="/home" className="p-4">
                HOME
              </CustomLink>
              <CustomLink to="/blogs" className="p-4">
                BLOGS
              </CustomLink>
              <CustomLink to="/about" className="p-4">
                ABOUT
              </CustomLink>
            </ul>
          </div>
        </div>

        {/* large device view */}
        <div className="lg:navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-sm">
            <CustomLink to="/home" className="mr-4">
              HOME
            </CustomLink>
            <CustomLink to="/blogs" className="mr-4">
              BLOGS
            </CustomLink>
            <CustomLink to="/about" className="mr-4">
              ABOUT
            </CustomLink>
          </ul>
        </div>
        <div className="navbar-end flex justify-end items-center">
          {/* avatar */}

          {user ? (
            <div className="dropdown dropdown-end">
              <div className="flex items-center">
                <CustomLink to="/" className="mr-4">
                  {user?.displayName}
                </CustomLink>

                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://api.lorem.space/image/face?hash=33791"
                      alt="profile-pic"
                    />
                  </div>
                </label>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
              >
                <button onClick={() => signOut(auth)}>SING OUT</button>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
