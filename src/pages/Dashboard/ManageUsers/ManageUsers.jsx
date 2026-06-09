// import React from 'react';

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
    },
  });

  const handleMakeFraud = (id) => {
    axiosSecure
      .patch(`/users/fraud/${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User has been marked as Fraud',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.error(error));
  };

  const roleBadge = (role) => {
    const styles = {
      admin: 'bg-purple-100 text-purple-700',
      chef: 'bg-blue-100 text-blue-700',
      user: 'bg-gray-100 text-gray-600',
    };
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${styles[role] ?? 'bg-gray-100 text-gray-500'}`}>
        {role}
      </span>
    );
  };

  const statusBadge = (status) => {
    const isFraud = status === 'fraud';
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${isFraud ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
        {status ?? 'Active'}
      </span>
    );
  };

  const canMarkFraud = (user) =>
    (user.role === 'user' || user.role === 'chef') && user.status !== 'fraud';

  return (
    <div className="px-3 sm:px-6 lg:px-10 py-6 max-w-screen-xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-4 sm:py-6">
        Manage Users
        <span className="ml-2 text-base sm:text-lg font-normal text-gray-400">({users.length})</span>
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-400 mt-16 text-lg">No users found.</p>
      ) : (
        <>
          {/* ── MOBILE: card list (< sm) ── */}
          <div className="flex flex-col gap-4 sm:hidden">
            {users.map((user, index) => (
              <div key={user._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-medium">#{index + 1}</span>
                  {statusBadge(user.status)}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm uppercase flex-shrink-0">
                    {user.displayName?.charAt(0) ?? '?'}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800 truncate">{user.displayName}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Role</span>
                    {roleBadge(user.role)}
                  </div>
                  {canMarkFraud(user) && (
                    <button
                      onClick={() => handleMakeFraud(user._id)}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-red-500 text-white hover:bg-red-600 active:scale-95 transition-all"
                    >
                      Mark Fraud
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── TABLET + LAPTOP: table (sm +) ── */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3 hidden md:table-cell">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {users.map((user, index) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400 font-medium">{index + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs uppercase flex-shrink-0">
                          {user.displayName?.charAt(0) ?? '?'}
                        </div>
                        <span className="font-semibold text-gray-800 whitespace-nowrap">{user.displayName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell text-gray-500 max-w-[200px] truncate">{user.email}</td>
                    <td className="px-4 py-3">{roleBadge(user.role)}</td>
                    <td className="px-4 py-3">{statusBadge(user.status)}</td>
                    <td className="px-4 py-3 text-center">
                      {canMarkFraud(user) ? (
                        <button
                          onClick={() => handleMakeFraud(user._id)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500 text-white hover:bg-red-600 transition-colors whitespace-nowrap"
                        >
                          Mark Fraud
                        </button>
                      ) : (
                        <span className="text-xs text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageUsers;

// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import Swal from 'sweetalert2';

// const ManageUsers = () => {

// const axiosSecure = useAxiosSecure();

// const { data: users = [], refetch } = useQuery({
//     queryKey: ['users'],
//     queryFn: async () => {
//         const response = await axiosSecure.get('/users');
//         return response.data;
//     }
// });



// const handleMakeFraud = (id) => {
//   axiosSecure.patch(`/users/fraud/${id}`)
//     .then((res) => {
//       if (res.data.modifiedCount > 0) {
//         refetch();

//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "User has been marked as Fraud",
//           showConfirmButton: false,
//           timer: 1500
//         });
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };




//     return (
//         <div>
//             <h2 className="text-4xl text-center font-bold">Manage Users: {users.length}</h2>

//             <div className="overflow-x-auto">
//   <table className="table table-zebra">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>User Name</th>
//         <th>User Email</th>
//         <th>User Role</th>
//         <th>User Status</th>
//         <th>Fraud</th>
//       </tr>
//     </thead>
//     <tbody>
//       {
//         users.map((user, index) => (
//           <tr key={user._id}>
//             <th>{index + 1}</th>
//             <td>{user.displayName}</td>
//             <td>{user.email}</td>
//             <td>{user.role}</td>
//             <td>Pending</td>
//           <td>
//   {/* Show "Make Fraud" button only when role is "user" or "chef" */}
//   {(user.role === 'user' || user.role === 'chef') && user.status !== 'fraud' && (
//     <button className="btn btn-primary" onClick={() => handleMakeFraud(user._id)}>
//       Make Fraud
//     </button>
//   )}
// </td>
//           </tr>
//         ))
//       }
     
//     </tbody>
  
//   </table>
// </div>
//         </div>
//     );
// };

// export default ManageUsers;