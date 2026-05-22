import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {

const axiosSecure = useAxiosSecure();

const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const response = await axiosSecure.get('/users');
        return response.data;
    }
});



const handleMakeFraud = (id) => {
  axiosSecure.patch(`/users/fraud/${id}`)
    .then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User has been marked as Fraud",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};




    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Manage Users: {users.length}</h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>User Email</th>
        <th>User Role</th>
        <th>User Status</th>
        <th>Fraud</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => (
          <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.displayName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>Pending</td>
          <td>
  {/* Show "Make Fraud" button only when role is "user" or "chef" */}
  {(user.role === 'user' || user.role === 'chef') && user.status !== 'fraud' && (
    <button className="btn btn-primary" onClick={() => handleMakeFraud(user._id)}>
      Make Fraud
    </button>
  )}
</td>
          </tr>
        ))
      }
     
    </tbody>
  
  </table>
</div>
        </div>
    );
};

export default ManageUsers;