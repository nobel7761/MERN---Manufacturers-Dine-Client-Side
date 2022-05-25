import React from 'react';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold uppercase my-4 text-primary'>manage all orders</h1>



            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Ordered Quantity</th>
                            <th>Total Bill</th>
                            <th>USER EMAIL</th>
                            <th>Payment Condition</th>
                            <th>Payment Status</th>
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
                            <td></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;