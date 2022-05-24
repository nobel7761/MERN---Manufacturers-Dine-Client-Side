import React from "react";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <h2 className="text-5xl text-[#f97316]">DASHBOARD</h2>
          <Outlet></Outlet>
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/my-orders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/my-review">My Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
