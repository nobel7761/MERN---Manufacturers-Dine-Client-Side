import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <div className="footer py-11">
      <div className="container footer-container">
        <div className="">
          <h4 className="">About</h4>
          <p>
            DEPOSITO is one of the leading warehouse service provider in the
            world! From the 18th of century it has a great frame in all over the
            world!{" "}
          </p>
          <p className="mt-2">
            Basically, we kept electronic products such as TV, Fridge, AC,
            Mobile, Laptop, Tablet etc. From the starting of our warehouse
            journey we never get an objection from our customer about product.
            We ensure the best security for our customers product!
          </p>
        </div>
        <div className="">
          <h4 className="">Quick Link</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
              <Link to="/home">Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
              <Link to="/signup">Register/Login</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
              <Link to="/manage-inventories">Manage Inventories</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
              <Link to="/add-items">Add Items</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
              <Link to="/my-items">My Items</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mr-2 text-[#f97316]"
              />
              Rampura, Dhaka, Bangladesh
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#f97316]" />
              +8801-5213-20912
            </li>
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-[#f97316]"
              />
              habiburnobel@gmail.com
            </li>
          </ul>
          <div className="icons">
            <div className="brand-icon-facebook">
              <FontAwesomeIcon icon={faFacebookF} className="text-white" />
            </div>
            <div className="brand-icon-twitter">
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </div>
            <div className="brand-icon-linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
            </div>
            <div className="brand-icon-youtube">
              <FontAwesomeIcon icon={faYoutube} className="text-white" />
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="">Subscribe</h4>
          <p>Sign Up to our Newsletter and get the latest offers.</p>
          <div className="subscribe">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                autoComplete="off"
                required
              />
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary mt-5"
              >
                Get Notified
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
