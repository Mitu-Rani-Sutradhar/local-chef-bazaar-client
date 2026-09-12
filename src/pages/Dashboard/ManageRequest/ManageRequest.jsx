```jsx
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageRequest = () => {
  const axiosSecure = useAxiosSecure();

  // Only get pending requests
  const {
    refetch,
    data: requests = [],
    isLoading,
  } = useQuery({
    queryKey: ['requests', 'pending'],
    queryFn: async () => {
      const response = await axiosSecure.get(
        '/requests?requestStatus=pending'
      );

      return response.data;
    },
  });

  // Approve / Reject request
  const updateRequestStatus = async (request, status) => {
    try {
      const result = await axiosSecure.patch(
        `/requests/${request._id}`,
        {
          requestStatus: status,
        }
      );

      if (result.data.success || result.data.modifiedCount > 0) {
        await refetch();

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title:
            status === 'approved'
              ? 'Request approved successfully!'
              : 'Request rejected successfully!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error('Request update error:', error);

      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text:
          error.response?.data?.message ||
          'Failed to update request.',
      });
    }
  };

  const handleApproval = (request) => {
    updateRequestStatus(request, 'approved');
  };

  const handleReject = (request) => {
    updateRequestStatus(request, 'rejected');
  };

  const statusBadge = (status) => {
    const styles = {
      approved: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-600',
      pending: 'bg-yellow-100 text-yellow-700',
    };

    return (
      <span
        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
          styles[status] || 'bg-gray-100 text-gray-500'
        }`}
      >
        {status}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  }

  return (
    <div className="px-3 sm:px-6 lg:px-10 py-6 max-w-screen-xl mx-auto">

      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-4 sm:py-6">
        Manage Requests
        <span className="ml-2 text-base sm:text-lg font-normal text-gray-400">
          ({requests.length})
        </span>
      </h2>

      {/* No requests */}
      {requests.length === 0 ? (
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            No pending requests found.
          </p>
        </div>
      ) : (
        <>
          {/* ================= MOBILE ================= */}
          <div className="flex flex-col gap-4 sm:hidden">

            {requests.map((request, index) => (
              <div
                key={request._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3"
              >

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-medium">
                    #{index + 1}
                  </span>

                  {statusBadge(request.requestStatus)}
                </div>

                <p className="font-semibold text-gray-800">
                  {request.userName}
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">

                  <span className="text-gray-400">
                    Email
                  </span>

                  <span className="text-gray-700 truncate">
                    {request.userEmail}
                  </span>

                  <span className="text-gray-400">
                    Type
                  </span>

                  <span className="text-gray-700 capitalize">
                    {request.requestType}
                  </span>

                  <span className="text-gray-400">
                    Time
                  </span>

                  <span className="text-gray-600 text-xs">
                    {request.requestTime}
                  </span>

                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-1">

                  <button
                    onClick={() => handleApproval(request)}
                    className="flex-1 py-2 rounded-xl text-sm font-medium bg-green-500 text-white hover:bg-green-600 active:scale-95 transition-all"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(request)}
                    className="flex-1 py-2 rounded-xl text-sm font-medium bg-red-500 text-white hover:bg-red-600 active:scale-95 transition-all"
                  >
                    Reject
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* ================= TABLE ================= */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl shadow-sm border border-gray-100">

            <table className="w-full text-sm text-left">

              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">User Name</th>
                  <th className="px-4 py-3 hidden md:table-cell">
                    User Email
                  </th>
                  <th className="px-4 py-3">
                    Type
                  </th>
                  <th className="px-4 py-3">
                    Status
                  </th>
                  <th className="px-4 py-3 hidden lg:table-cell">
                    Request Time
                  </th>
                  <th className="px-4 py-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">

                {requests.map((request, index) => (
                  <tr
                    key={request._id}
                    className="hover:bg-gray-50 transition-colors"
                  >

                    <td className="px-4 py-3 text-gray-400 font-medium">
                      {index + 1}
                    </td>

                    <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">
                      {request.userName}
                    </td>

                    <td className="px-4 py-3 hidden md:table-cell text-gray-500 max-w-[180px] truncate">
                      {request.userEmail}
                    </td>

                    <td className="px-4 py-3 capitalize text-gray-700">
                      {request.requestType}
                    </td>

                    <td className="px-4 py-3">
                      {statusBadge(request.requestStatus)}
                    </td>

                    <td className="px-4 py-3 hidden lg:table-cell text-gray-400 text-xs whitespace-nowrap">
                      {request.requestTime}
                    </td>

                    <td className="px-4 py-3">

                      <div className="flex gap-2 justify-center">

                        <button
                          onClick={() =>
                            handleApproval(request)
                          }
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-500 text-white hover:bg-green-600 active:scale-95 transition-all whitespace-nowrap"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            handleReject(request)
                          }
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500 text-white hover:bg-red-600 active:scale-95 transition-all whitespace-nowrap"
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
```
