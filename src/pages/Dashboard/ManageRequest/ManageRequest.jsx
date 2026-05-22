import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageRequest = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: requests = []} = useQuery({
        queryKey: ['requests', 'pending'],
        queryFn: async () => {
            const response = await axiosSecure.get('/requests');
            return response.data;
        }
    });
    console.log(requests);

   const updateRequestStatus = (request,status) =>{
       
    const updateInfo ={
        requestStatus: status, email: request.userEmail
    }
    axiosSecure.patch(`/requests/${request._id}`, updateInfo)
    .then(res => {
        if(res.data.modifiedCount){
            refetch();
             Swal.fire({
              position: "top-end",
              icon: "success",
              title: `request has been updated ${status}`,
              showConfirmButton: false,
              timer: 2500
            });// Update the UI or show a success message
        }
    })

   }

   const handleApproval = request =>{
   updateRequestStatus(request, 'approved');
    }

    const handleReject = request =>{
        updateRequestStatus(request, 'rejected');
    }


    return (
        <div>
            <h2 className="text-5xl text-center font-bold py-5">Manage Request: {requests.length}</h2>
        
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Request Type</th>
        <th>Request Status</th>
        <th>Request Time</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        requests.map((request, index) => (
          <tr key={request._id}>
            <th>{index + 1}</th>
            <td>{request.userName}</td>
            <td>{request.userEmail}</td>
            <td>{request.requestType}</td>

            <td><p className={`${request.requestStatus=== 'approved' ? 'text-green-800' : 
            'text-red-500'}`}>{request.requestStatus}</p></td>
            <td>{request.requestTime}</td>
            <td>
              <button onClick={() => handleApproval(request)} 
              disabled={request.requestStatus === 'approved'}
              className="btn btn-primary btn-sm">Accept</button>
              <button onClick={() => handleReject(request)}
              disabled={request.requestStatus === 'approved' || request.requestStatus === 'rejected'}
              className="btn btn-primary btn-sm mx-2">Reject</button>
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


export default ManageRequest;