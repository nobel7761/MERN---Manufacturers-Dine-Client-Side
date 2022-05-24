import React from "react";
import "./FourPartSection.css";

const FourPartSection = () => {
  return (
    <div className="four-part-section">
      <div className="upper-section">
        <div className="upper-left">
          <h1>FOR ANY PROJECT TOOLS</h1>
          <h2>BUY FROM US &amp; GET YOUR</h2>
          <h3>ONLY $320</h3>
        </div>
        <div className="upper-right flex flex-col items-center">
          <h1>LIMITED TIME OFFER</h1>
          <h2>HURRY UP! 70% DISCOUNT</h2>
          <div className="w-3/4 ">
            <button className="btn btn-active btn-primary w-full mt-4">
              shop now
            </button>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="lower-left flex flex-col items-center">
          <h1>NEW ARRIVALS</h1>
          <h2>SAVE AN EXTRA 45%</h2>
          <div className="w-3/4 ">
            <button className="btn btn-active btn-primary w-full mt-4">
              shop now
            </button>
          </div>
        </div>
        <div className="lower-right">
          <h1>TOP POWER TOOLS</h1>
          <h2>HUGE SELECTION CUTTING TOOLS</h2>
          <h3>OFFER SALE 20%</h3>
        </div>
      </div>
    </div>
  );
};

export default FourPartSection;
