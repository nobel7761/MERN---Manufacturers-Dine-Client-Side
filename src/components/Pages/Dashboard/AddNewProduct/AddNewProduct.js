import React from 'react';
import './AddNewProduct.css';

const AddNewProduct = () => {
    return (
        <div>
            <div className="pb-20 flex justify-center mt-5">
                <div className="card bg-orange-500 shadow-xl w-full">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-4xl">ADD NEW PRODUCT</h2>
                        <div className="">
                            <form>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="product Name"
                                        className="input input-bordered "
                                        name="productName"
                                        required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Product Image (URL Only)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="image url"
                                        className="input input-bordered"
                                        name="image"
                                        required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Product Details</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered"
                                        name="description"
                                        placeholder="Description"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Available Quantity"
                                        className="input input-bordered"
                                        name="availableQuantity"
                                        required />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Minimum Order Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Minimum Order Quantity"
                                        className="input input-bordered"
                                        name="minQuantity"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Price <sup>PER UNIT</sup></span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        className="input input-bordered "
                                        name="productPrice"
                                        required />
                                </div>
                                <div className="form-control">
                                    <button className="btn btn-primary mt-8">ADD NEW PRODUCT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;