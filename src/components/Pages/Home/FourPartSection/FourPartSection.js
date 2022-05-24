import React from "react";
import "./FourPartSection.css";

const FourPartSection = () => {
  return (
    <div className="four-part-section">
      <div className="upper-section">
        <div className="upper-left">
          <h1 className="text-center text-white text-xl font-semibold">FOR ANY PROJECT TOOLS</h1>
          <h2 className="text-center text-white text-3xl font-bold">BUY FROM US &amp; GET YOUR</h2>
          <h3 className="text-center text-white text-2xl font-extrabold">ONLY <span className="text-6xl">$320</span></h3>
        </div>
        <div className="upper-right flex flex-col items-center">
          <h1 className="text-center text-white text-xl font-semibold">LIMITED TIME OFFER</h1>
          <h2 className="text-center text-white text-3xl font-bold">HURRY UP! <span className="font-extrabold text-6xl">70%</span> DISCOUNT</h2>
          <div className="w-3/4 ">
            <button className="btn btn-active btn-primary w-full mt-4">
              shop now
            </button>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="lower-left flex flex-col items-center">
          <h1 className="text-center text-white text-xl font-semibold">NEW ARRIVALS</h1>
          <h2 className="text-center text-white text-3xl font-bold">SAVE AN EXTRA <span className="font-extrabold text-6xl">45%</span></h2>
          <div className="w-3/4 ">
            <button className="btn btn-active btn-primary w-full mt-4">
              shop now
            </button>
          </div>
        </div>
        <div className="lower-right">
          <h1 className="text-center text-white text-xl font-semibold">TOP POWER TOOLS</h1>
          <h2 className="text-center text-white text-2xl font-bold">HUGE SELECTION CUTTING TOOLS</h2>
          <h3 className="text-center text-white text-xl font-extrabold">OFFER SALE <span className="text-6xl">20%</span></h3>
        </div>
      </div>
    </div>
  );
};

export default FourPartSection;
