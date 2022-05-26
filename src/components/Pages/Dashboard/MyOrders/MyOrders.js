import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import "./MyOrders.css";

const MyOrders = ({ setRemoveOrder }) => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  console.log("Inside MyOrders.js", user?.mail);

  useEffect(() => {
    if (user) {
      fetch(
        `https://pure-atoll-42866.herokuapp.com/myOrders?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]);


  const removeOrder = id => {

    if (decision) {
      const url = `https://pure-atoll-42866.herokuapp.com/order/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {

          const restProducts = orders.filter(order => order._id !== id);
          setOrders(restProducts)

        })
    }





  }

  return (
    <div>
      <h1 className="text-center text-3xl">
        Orders of {" "}
        <span className="text-[#f97316] font-extrabold">
          {user?.displayName}
        </span>
      </h1>

      {/* table */}
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Ordered Quantity</th>
              <th>Total Bill</th>
              <th>Payment Status</th>
              <th>Make Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="active">
                <td>{order?.productName}</td>
                <td className="text-center">{order?.orderQuantity}</td>
                <td className="text-center">{order?.totalBill}</td>
                <td className="text-center">{order?.paymentStatus}</td>
                {order?.paymentStatus === "unpaid" ? (
                  <>
                    <td>
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn bg-[#F97316] btn-sm w-full text-black hover:bg-black hover:text-[#F97316]">
                          Let's Pay
                        </button>
                      </Link>
                    </td>
                    <td className="text-center">



                      <label
                        for="remove-modal"
                        className="btn modal-button text-[#F97316] font-extrabold text-4xl"
                        onClick={() => {
                          removeOrder(order._id)
                          setRemoveOrder(order._id)
                        }}>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="text-[#F97316] font-extrabold text-4xl"
                        />


                      </label>
                    </td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
