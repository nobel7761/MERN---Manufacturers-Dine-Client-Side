import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PurchaseProduct.css";
import useLoadSingleTool from "./../../../Hooks/useLoadSingleTool";

import PurchaseForm from "./PurchaseForm/PurchaseForm";

const PurchaseProduct = () => {

  const { id } = useParams();
  const [tool] = useLoadSingleTool(id);


  const [Order, setOrder] = useState(0);
  const orderIncrement = () => {
    setOrder(Order + 1)
  }
  const orderDecrement = () => {
    setOrder(Order - 1)
  }
  let OrderQuantity
  if (Order > 0) {
    OrderQuantity = Order
  }




  return (
    <div className="container">
      <div className="py-20">
        <h1 className="text-center text-4xl font-bold  text-orange-500 mb-8 flex flex-col items-center">
          PURCHASE YOUR DESIRE PRODUCT WITH CHEAPEST RATE!
          <div className="border-b-8 border-orange-500 w-4/5"></div>
        </h1>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={tool.picture} alt="Album" />
          </figure>
          <div className="card-body flex flex-col justify-between bg-gray-100">
            <h2 className="font-bold text-center text-2xl">{tool.name}</h2>
            <div>
              <h2 className="my-2">
                <strong>DESCRIPTION: </strong>
                {tool.description}
              </h2>
              <h2 className="my-2">
                <strong>MINIMUM ORDER QUANTITY: </strong>
                {tool.min_quantity}
              </h2>
              <h2 className="my-2">
                <strong>AVAILABLE ORDER QUANTITY: </strong>
                {tool.available_quantity}
              </h2>
              <h2 className="my-4">
                <strong>PRICE: </strong>
                <div className="indicator">
                  {tool.price}
                  <sup>PER UNIT</sup>
                </div>
              </h2>
              <h2 className="my-4">
                <strong>Total Sold: </strong>
                <div className="indicator">
                  {tool.sold}
                </div>
              </h2>
            </div>
            <div className='flex justify-center mt-4'>
              <button className='btn btn-primary mr-4' onClick={orderDecrement}>-</button>
              <input type="number" aria-controls='false'
                value={Order ? OrderQuantity : tool?.min_quantity}
                name="OrderQuantity" className='input input-bordered input-accent text-accent w-20 text-center' />
              <button className='btn btn-primary ml-4' onClick={orderIncrement}>+</button>
              {/* <button className="btn btn-primary">Listen</button> */}
            </div>
          </div>



        </div>
      </div>
      <PurchaseForm OrderQuantity={OrderQuantity} tool={tool} Order={Order}></PurchaseForm>
    </div>
  );
};

export default PurchaseProduct;