import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const Payment = () => {
  const { id } = useParams();
  const url = `https://pure-atoll-42866.herokuapp.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  console.log("Order", order);

  if (isLoading) {
    <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Pay For ${order.productName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
