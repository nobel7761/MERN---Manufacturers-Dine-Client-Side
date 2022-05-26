import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const Payment = () => {
  const { id } = useParams();


  return (
    <div>
      <h1>payment</h1>
    </div>
  );
};

export default Payment;
