
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageRequest = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch pending requests
  const {
    refetch,
    data: requests = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['requests', 'pending'],
    queryFn: async () => {
      const res = await axiosSecure.get('/requests/pending');
      return res.data;
    },
  });

  // Approve or reject a request
  const handleStatusChange = async (request, status) => {
    const confirmation = await Swal.fire({
      title: `Are you sure?`,
      text: `Do you want to ${status.toLowerCase()} this request?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: `Yes, ${status}`,
      cancelButtonText: 'Cancel',
    });

    if (!confirmation.isConfirmed) return;

    try {
      const result = await axiosSecure.patch(
        `/requests/${request._id}`,
        {
          requestStatus: status,
        }
      );

      if (
        result.data.modifiedCount > 0 ||
        result.data.success === true
      ) {
        await Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: `Request ${status.toLowerCase()} successfully.`,
        });

        refetch();
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No Changes',
          text: 'The request status was not changed.',
        });
      }
    } catch (error) {
      console.error('Failed to update request:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text:
          error.response?.data?.message ||
          'Failed to update request status.',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-60">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load requests. Please try again.
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Manage Requests
      </h2>

      {requests.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg font-semibold">
            No pending requests found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Requester</th>
                <th>Food Name</th>
                <th>Request Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request, index) => (
                <tr key={request._id}>
                  <td>{index + 1}</td>

                  <td>
                    {request.requesterName ||
                      request.userName ||
                      request.requesterEmail ||
                      request.userEmail ||
                      'Unknown'}
                  </td>

                  <td>
                    {request.foodName ||
                      request.mealName ||
                      'N/A'}
                  </td>

                  <td>
                    <span className="badge badge-warning">
                      {request.requestStatus || 'Pending'}
                    </span>
                  </td>

                  <td>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() =>
                          handleStatusChange(request, 'Approved')
                        }
                        disabled={
                          request.requestStatus === 'Approved' ||
                          request.requestStatus === 'Rejected'
                        }
                        className="btn btn-sm btn-success text-white"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleStatusChange(request, 'Rejected')
                        }
                        disabled={
                          request.requestStatus === 'Approved' ||
                          request.requestStatus === 'Rejected'
                        }
                        className="btn btn-sm btn-error text-white"
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
      )}
    </div>
  );
};

export default ManageRequest;
