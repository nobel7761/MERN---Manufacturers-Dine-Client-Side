import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useLoadAllOrders from '../../../../Hooks/useLoadAllOrders';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    const [orders, setOrders] = useLoadAllOrders();
    console.log(orders);
    return (
        <div>
            <h1 className='text-center text-3xl font-bold uppercase my-4 text-[#F97316]'>manage all orders</h1>



            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">

                    <thead>
                        <tr>

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
                        {
                            orders.map(order => <tr>
                                <td>{order?.productName}</td>
                                <td className='text-center'>{order?.orderQuantity}</td>
                                <td className='text-center'>{order?.totalBill}</td>
                                <td className='text-center'>{order?.email}</td>
                                <td className='text-center'>{order?.payment ? order?.payment : 'unpaid'}</td>
                                <td className='text-center'>{order?.status === 'unpaid' ? order?.status : '-'}</td>
                                <td className='text-center'>{order?.status ? <button className='btn btn-primary'>Change Status</button> : <FontAwesomeIcon icon={faTrashCan} className='text-xl text-[#F97316]' />}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;