import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useLoadAllOrders from '../../../../Hooks/useLoadAllOrders';
import swal from 'sweetalert';

import './ManageAllOrders.css';
import ChangeStatus from './ChangeStatus/ChangeStatus';

const ManageAllOrders = () => {

    const [orders, setOrders] = useLoadAllOrders();
    // const [singleOrder, setSingleOrder] = useLoadSingleOrder(id)


    const removeItem = (id) => {
        // console.log("hello", id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://pure-atoll-42866.herokuapp.com/order/${id}`;
                    fetch(url, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            const restProducts = orders.filter(order => order._id !== id);
                            setOrders(restProducts)

                        })


                    swal("You have successfully deleted the order!", {
                        icon: "success",
                    });
                } else {
                    swal("Order is not deleted!!!");
                }
            });
    }




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
                            <th>Payment Status</th>
                            <th>Shipment Condition</th>
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
                                <td className='text-center'>{order?.paymentStatus}</td>
                                <td className='text-center'>{order?.shipmentCondition && order?.shipmentCondition}</td>
                                <td className='text-center'>{order?.paymentStatus === 'unpaid' ? <span onClick={() => removeItem(order?._id)}>
                                    <FontAwesomeIcon icon={faTrashCan} className='text-xl text-[#F97316]' />
                                </span>

                                    :

                                    order?.shipmentCondition === 'pending' ?
                                        // <button className='btn btn-primary' onClick={() => statusChange(order?._id)}>Change Status</button>
                                        <ChangeStatus id={order._id}></ChangeStatus>
                                        :
                                        <></>




                                }</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;