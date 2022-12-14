import React from "react";
import "./NavbarTop.css";
import { Link } from "react-router-dom";
import Logo from "../../../../../images/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase.init";

const NavbarTop = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar-top ">
      <div className="py-2 bg-black">
        <div className="container">
          <marquee
            text="swetha"
            className="text-center text-orange-500 text-xl"
          >
            Developed By MD. HABIBUR RAHAMAN
          </marquee>
        </div>
      </div>
      <div className="container lg:flex justify-between items-center py-2 hidden lg:block">
        <div>
          <img src={Logo} alt="website-logo" className="w-48" />
        </div>
        <div className="flex">
          <div className="w-40 mr-8">
            <p>
              <strong>NO. 12 JULIUS AVE,</strong> North Ryde, Australia
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mr-8">
              <FontAwesomeIcon
                icon={faClock}
                className="text-4xl mr-2 text-orange-500"
              />
              <div>
                <p>
                  <strong>MONDAY - FRIDAY: 9AM TO 5PM</strong>
                </p>
                <p>Saturday / Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mr-8">
              <FontAwesomeIcon
                icon={faMicrophone}
                className="text-4xl mr-2 text-orange-500"
              />
              <div>
                <p>
                  <strong>+8801521320912</strong>
                </p>
                <p>habiburnobel@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            {user ? (
              <></>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn w-40 bg-orange-500 text-white hover:bg-black border-none">
                    LOGIN
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
