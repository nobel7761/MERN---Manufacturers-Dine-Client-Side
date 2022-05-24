import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = (props) => {
  const {
    picture,
    name,
    description,
    price,
    min_quantity,
    available_quantity,
    sold,
    _id,
  } = props.tool;
  console.log(props);
  const navigate = useNavigate();
  return (
    <div>
      <div className="card bg-base-100  p-5">
        <figure>
          <img src={picture} alt="tools" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Price: </strong>
            {price} <sup>per unit</sup>
          </p>
          <p>
            <strong>Minimum Order Quantity: </strong>
            {min_quantity}
          </p>
          <p>
            <strong>Available Quantity: </strong>
            {available_quantity}
          </p>
          <p>
            <strong>Total Sold: </strong>
            {sold}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate(`/tools/${_id}`);
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
