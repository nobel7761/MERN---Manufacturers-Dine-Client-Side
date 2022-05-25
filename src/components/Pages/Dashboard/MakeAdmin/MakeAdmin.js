import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';
import UserRow from './UserRow/UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://pure-atoll-42866.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-extrabold text-[#F97316] my-4">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;