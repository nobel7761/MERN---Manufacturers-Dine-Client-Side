import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className="text-center text-3xl">
                Hello{" "}
                <span className="text-[#f97316] font-extrabold">
                    {user?.displayName}
                </span>
            </h1>



            <div className="overflow-x-auto mt-10">
                <h1 className='text-center mb-4 font-bold text-2xl text-primary'>Remove Admin</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th className='flex justify-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="active">
                            <th></th>
                            <td>
                                <strong></strong>
                            </td>
                            <td className='flex justify-center'><FontAwesomeIcon icon={faTrashCan} className='text-[#F97316] text-3xl' /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <strong></strong>
                            </td>
                            <td className='flex justify-center'><FontAwesomeIcon icon={faTrashCan} className='text-[#F97316] text-3xl' /></td>
                        </tr>
                        <tr className="active">
                            <th></th>
                            <td>
                                <strong></strong>
                            </td>
                            <td className='flex justify-center'><FontAwesomeIcon icon={faTrashCan} className='text-[#F97316] text-3xl' /></td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <div>
                <h1 className='text-center my-4 font-bold text-2xl text-primary'>Add New Admin</h1>

                <div className='flex justify-center'>
                    <input type="text" placeholder="Type Email Here" className="input input-bordered input-info w-1/2 " />
                    <button className='btn bg-[#F97316] border-0 w-1/4'>MAKE ADMIN</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;