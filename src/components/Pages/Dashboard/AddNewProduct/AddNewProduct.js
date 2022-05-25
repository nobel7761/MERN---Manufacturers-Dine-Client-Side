import React from 'react';
import { toast } from 'react-toastify';
import './AddNewProduct.css';

const AddNewProduct = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.productName.value;
        const picture = event.target.image.value;
        const description = event.target.description.value;
        const available_quantity = event.target.availableQuantity.value;
        const min_quantity = event.target.minQuantity.value;
        const price = event.target.productPrice.value;


        event.target.reset();

        const newProduct = {
            name: name,
            picture: picture,
            description: description,
            available_quantity: available_quantity,
            min_quantity: min_quantity,
            price: price
        }

        fetch('https://pure-atoll-42866.herokuapp.com/tool', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("New Product Added Successfully!");
            })
    }



    return (
        <div>
            <div className="pb-20 flex justify-center mt-5">
                <div className="card bg-orange-500 shadow-xl w-full">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-4xl">ADD NEW PRODUCT</h2>
                        <div className="">
                            <form onSubmit={handleSubmit}>
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