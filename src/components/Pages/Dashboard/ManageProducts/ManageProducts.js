import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useLoadAllTools from '../../../../Hooks/useLoadAllTools';
import './ManageProducts.css';

const ManageProducts = () => {
    const [tools, setTools] = useLoadAllTools();

    const removeTool = id => {

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