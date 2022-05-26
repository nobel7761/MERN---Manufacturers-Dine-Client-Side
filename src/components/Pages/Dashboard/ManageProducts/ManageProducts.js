import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useLoadAllTools from '../../../../Hooks/useLoadAllTools';
import './ManageProducts.css';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [tools, setTools] = useLoadAllTools();

    const removeTool = id => {
        console.log("hello", id);
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

                            const restProducts = tools.filter(order => order._id !== id);
                            setTools(restProducts)

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
            <h1 className='text-center text-3xl font-bold uppercase my-4 text-[#F97316]'>manage all products</h1>



            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Min Order Quantity</th>
                            <th>Available Quantity</th>
                            <th>Price Per Unit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map(tool => <tr>
                                <td>{tool?.name}</td>
                                <td>{tool?.min_quantity}</td>
                                <td>{tool?.available_quantity}</td>
                                <td>{tool?.price}</td>
                                <td><FontAwesomeIcon icon={faTrashCan} className='text-2xl text-[#F97316] modal-button' onClick={() => removeTool(tool._id)} /></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;