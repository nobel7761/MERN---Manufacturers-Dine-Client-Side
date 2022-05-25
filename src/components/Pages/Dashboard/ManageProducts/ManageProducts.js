import React from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold uppercase my-4 text-primary'>manage all products</h1>



            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Min Order Quantity</th>
                            <th>Available Quantity</th>
                            <th>Price Per Unit</th>
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
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;