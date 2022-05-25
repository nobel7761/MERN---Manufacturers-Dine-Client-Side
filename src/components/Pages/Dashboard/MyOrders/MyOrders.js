import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import "./MyOrders.css";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1 className="text-center text-3xl">
        Hello{" "}
        <span className="text-[#f97316] font-extrabold">
          {user?.displayName}
        </span>
      </h1>






      {/* table */}
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Ordered Quantity</th>
              <th>Total Bill</th>
              <th>Payment Status</th>
              <th>Make Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            <tr className="active">
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
