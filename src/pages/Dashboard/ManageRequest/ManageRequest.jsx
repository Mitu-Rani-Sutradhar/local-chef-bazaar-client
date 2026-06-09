// import React from 'react';


// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import Swal from 'sweetalert2';

// const ManageRequest = () => {
//     const axiosSecure = useAxiosSecure();

//     const { refetch, data: requests = []} = useQuery({
//         queryKey: ['requests', 'pending'],
//         queryFn: async () => {
//             const response = await axiosSecure.get('/requests');
//             return response.data;
//         }
//     });
//     console.log(requests);

//    const updateRequestStatus = (request,status) =>{
       
//     const updateInfo ={
//         requestStatus: status, email: request.userEmail
//     }
//     axiosSecure.patch(`/requests/${request._id}`, updateInfo)
//     .then(res => {
//         if(res.data.modifiedCount){
//             refetch();
//              Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: `request has been updated ${status}`,
//               showConfirmButton: false,
//               timer: 2500
//             });// Update the UI or show a success message
//         }
//     })

//    }

//    const handleApproval = request =>{
//    updateRequestStatus(request, 'approved');
//     }

//     const handleReject = request =>{
//         updateRequestStatus(request, 'rejected');
//     }


//     return (
//         <div>
//             <h2 className="text-5xl text-center font-bold py-5">Manage Request: {requests.length}</h2>
        
//         <div className="overflow-x-auto">
//   <table className="table table-zebra">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>User Name</th>
//         <th>User Email</th>
//         <th>Request Type</th>
//         <th>Request Status</th>
//         <th>Request Time</th>
//         <th>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {
//         requests.map((request, index) => (
//           <tr key={request._id}>
//             <th>{index + 1}</th>
//             <td>{request.userName}</td>
//             <td>{request.userEmail}</td>
//             <td>{request.requestType}</td>

//             <td><p className={`${request.requestStatus=== 'approved' ? 'text-green-800' : 
//             'text-red-500'}`}>{request.requestStatus}</p></td>
//             <td>{request.requestTime}</td>
//             <td>
//               <button onClick={() => handleApproval(request)} 
//               disabled={request.requestStatus === 'approved'}
//               className="btn btn-primary btn-sm">Accept</button>
//               <button onClick={() => handleReject(request)}
//               disabled={request.requestStatus === 'approved' || request.requestStatus === 'rejected'}
//               className="btn btn-primary btn-sm mx-2">Reject</button>
//             </td>
//           </tr>
//         ))
//       }
//     </tbody>
//   </table>
// </div>
        
//         </div>
//     );
// };


// export default ManageRequest;

import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: requests = [] } = useQuery({
    queryKey: ['requests', 'pending'],
    queryFn: async () => {
      const response = await axiosSecure.get('/requests');
      return response.data;
    },
  });

  const updateRequestStatus = (request, status) => {
    const updateInfo = { requestStatus: status, email: request.userEmail };
    axiosSecure.patch(`/requests/${request._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Request has been ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleApproval = (request) => updateRequestStatus(request, 'approved');
  const handleReject = (request) => updateRequestStatus(request, 'rejected');

  const statusBadge = (status) => {
    const styles = {
      approved: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-600',
      pending: 'bg-yellow-100 text-yellow-700',
    };
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${styles[status] ?? 'bg-gray-100 text-gray-500'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="px-3 sm:px-6 lg:px-10 py-6 max-w-screen-xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-4 sm:py-6">
        Manage Requests
        <span className="ml-2 text-base sm:text-lg font-normal text-gray-400">({requests.length})</span>
      </h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-400 mt-16 text-lg">No requests found.</p>
      ) : (
        <>
          {/* ── MOBILE: card list (< sm) ── */}
          <div className="flex flex-col gap-4 sm:hidden">
            {requests.map((request, index) => (
              <div key={request._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-medium">#{index + 1}</span>
                  {statusBadge(request.requestStatus)}
                </div>

                <p className="font-semibold text-gray-800">{request.userName}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                  <span className="text-gray-400">Email</span>
                  <span className="text-gray-700 truncate">{request.userEmail}</span>

                  <span className="text-gray-400">Type</span>
                  <span className="text-gray-700 capitalize">{request.requestType}</span>

                  <span className="text-gray-400">Time</span>
                  <span className="text-gray-600 text-xs">{request.requestTime}</span>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => handleApproval(request)}
                    disabled={request.requestStatus === 'approved'}
                    className="flex-1 py-2 rounded-xl text-sm font-medium bg-green-500 text-white disabled:opacity-40 active:scale-95 transition-transform"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(request)}
                    disabled={request.requestStatus === 'approved' || request.requestStatus === 'rejected'}
                    className="flex-1 py-2 rounded-xl text-sm font-medium bg-red-500 text-white disabled:opacity-40 active:scale-95 transition-transform"
                  >
                    Reject
                  </button>
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
                  <th className="px-4 py-3">User Name</th>
                  <th className="px-4 py-3 hidden md:table-cell">User Email</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Request Time</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {requests.map((request, index) => (
                  <tr key={request._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400 font-medium">{index + 1}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{request.userName}</td>
                    <td className="px-4 py-3 hidden md:table-cell text-gray-500 max-w-[180px] truncate">{request.userEmail}</td>
                    <td className="px-4 py-3 capitalize text-gray-700">{request.requestType}</td>
                    <td className="px-4 py-3">{statusBadge(request.requestStatus)}</td>
                    <td className="px-4 py-3 hidden lg:table-cell text-gray-400 text-xs whitespace-nowrap">{request.requestTime}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleApproval(request)}
                          disabled={request.requestStatus === 'approved'}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-500 text-white disabled:opacity-40 hover:bg-green-600 transition-colors whitespace-nowrap"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(request)}
                          disabled={request.requestStatus === 'approved' || request.requestStatus === 'rejected'}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500 text-white disabled:opacity-40 hover:bg-red-600 transition-colors whitespace-nowrap"
                        >
                          Reject
                        </button>
                      </div>
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

export default ManageRequest;
