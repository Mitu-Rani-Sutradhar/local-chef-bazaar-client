
// import React from 'react';



// import useAuth from '../../../hooks/useAuth';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';
// ;

// const OrderRequests = () => {
//   const {user} = useAuth();
// //   console.log(user.email);

//  const axiosSecure = useAxiosSecure();

//   const {data: orders = [],refetch} =useQuery({
//     queryKey: ['orders', user?.email ],
//     queryFn: async() =>{
//          const res = await axiosSecure.get(`/manage-order-requests/${user?.email}`)
//          return res.data;
//     }
//   })
// console.log(orders)

// // const handleAccept = order =>{
// //     // console.log(order);
// //     const statusInfo = {
// //        deliveryStatus: 'accepted'}
// //        axiosSecure.patch(`/manage-order-requests/${order._id}/status`, statusInfo)
// //        .then(res =>{
// //         if(res.data.modifiedCount){
// //             refetch();
// //             alert('Order accepted successfully')
// //         }
// //        })}

//  const updateStatus = async (id, orderStatus) => {
//     try {
//       await axiosSecure.put(`/manage-order-requests/${id}/status`, { status: orderStatus });
//       toast.success(`Order ${orderStatus}!`);
//       refetch();
//     } catch  {
//       toast.error("Failed to update status");
//     }
//   };

// // const updateInfo ={
// //         requestStatus: status, email: request.userEmail
// //     }
// // axiosSecure.patch(`/requests/${request._id}`, updateInfo)
// //     .then(res => {
// //         if(res.data.modifiedCount){
// //             refetch();
// //              Swal.fire({
// //               position: "top-end",
// //               icon: "success",
// //               title: `request has been updated ${status}`,
// //               showConfirmButton: false,
// //               timer: 2500
// //             });// Update the UI or show a success message
// //         }
// //     })

   

// //    const handleApproval = request =>{
// //    updateRequestStatus(request, 'accepted');
// //     }

// // //     const handleReject = request =>{
// // //         updateRequestStatus(request, 'rejected');
// // //     }


//     return (
//         <div>
//             <h2 className='text-4xl text-center font-bold py-5'>Order requests : {orders.length}</h2>
        
//         <div className="overflow-x-auto">
//                 <table className="table table-zebra">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Food Name</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Order Status </th>
//                             <th>User Email</th>
//                             <th>Order Time</th>
//                             <th>User Address</th>
//                             <th>Payment Status</th>
//                             <th className='text-center'>Actions</th>


//                         </tr>
//                     </thead>
//                     <tbody className=''>
//                         {
//                             orders.map((order, index) => <tr key={order._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{order.foodName}</td>
//                                 <td>{order.price * order.quantity}</td>
//                                 <td>{order.quantity}</td>
//                                 <td> {order.deliveryStatus}
//                                 </td>
//                                 <td>{order.userEmail}</td>
//                                 <td>{order.orderTime}</td>
//                                 <td>{order.userAddress}</td>
//                                 <td>
//                                     {
//                                         order.paymentStatus
//                                     }
//                                 </td>

//                                 {/* actions button */}
//                                 <td className='flex'>
//                                      <button
//                   onClick={() => updateStatus(order._id, "accepted")}
//                   disabled={order.orderStatus !== "pending"}
//                   className="btn btn-sm btn-info text-white flex-1 rounded-xl disabled:opacity-40"
//                 >
//                   Accept
//                 </button>
//                 {/* <button onClick={() => handleApproval(request)} 
//               disabled={request.requestStatus === 'accepted'}
//              */}
//                                      <button
//                   onClick={() => updateStatus(order._id, "delivered")}
//                   disabled={order.orderStatus !== "accepted"}
//                   className="btn btn-sm btn-success text-white bg-amber-500 mx-1 flex-1 rounded-xl disabled:opacity-40"
//                 >
//                   Deliver
//                 </button>
                
                
//                  <button
//                   onClick={() => updateStatus(order._id, "cancelled")}
//                   disabled={order.orderStatus !== "pending"}
//                   className="btn btn-sm btn-error text-white flex-1 rounded-xl disabled:opacity-40"
//                 >
//                   Cancel
//                 </button>
//                                 </td>
                               

//                             </tr>)
//                         }



//                     </tbody>
//                 </table>
//             </div>
        
        
        
//         </div>
       

        
//     );
// };

// export default OrderRequests;


import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const OrderRequests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: orders = [], refetch } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-order-requests/${user?.email}`);
      return res.data;
    },
  });

  const updateStatus = async (id, orderStatus) => {
    try {
      await axiosSecure.put(`/manage-order-requests/${id}/status`, { status: orderStatus });
      toast.success(`Order ${orderStatus}!`);
      refetch();
    } catch {
      toast.error('Failed to update status');
    }
  };

  const statusBadge = (status) => {
    const map = {
      pending:   'bg-yellow-100 text-yellow-800',
      accepted:  'bg-blue-100 text-blue-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${map[status] ?? 'bg-gray-100 text-gray-600'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="px-3 sm:px-6 lg:px-10 py-6 max-w-screen-xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-4 sm:py-6">
        Order Requests
        <span className="ml-2 text-base sm:text-lg font-normal text-gray-500">({orders.length})</span>
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400 mt-16 text-lg">No order requests yet.</p>
      ) : (
        <>
          {/* ── MOBILE: card list (< sm) ── */}
          <div className="flex flex-col gap-4 sm:hidden">
            {orders.map((order, index) => (
              <div key={order._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-medium">#{index + 1}</span>
                  {statusBadge(order.deliveryStatus)}
                </div>

                <p className="font-semibold text-gray-800 text-base">{order.foodName}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                  <span className="text-gray-400">Price</span>
                  <span className="font-medium text-gray-800">${order.price * order.quantity}</span>

                  <span className="text-gray-400">Qty</span>
                  <span>{order.quantity}</span>

                  <span className="text-gray-400">Payment</span>
                  <span>{statusBadge(order.paymentStatus)}</span>

                  <span className="text-gray-400">Email</span>
                  <span className="truncate">{order.userEmail}</span>

                  <span className="text-gray-400">Time</span>
                  <span className="text-xs">{order.orderTime}</span>

                  <span className="text-gray-400">Address</span>
                  <span className="text-xs">{order.userAddress}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => updateStatus(order._id, 'accepted')}
                    disabled={order.orderStatus !== 'pending'}
                    className="flex-1 py-1.5 rounded-xl text-sm font-medium bg-blue-500 text-white disabled:opacity-40 active:scale-95 transition-transform"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => updateStatus(order._id, 'delivered')}
                    disabled={order.orderStatus !== 'accepted'}
                    className="flex-1 py-1.5 rounded-xl text-sm font-medium bg-amber-500 text-white disabled:opacity-40 active:scale-95 transition-transform"
                  >
                    Deliver
                  </button>
                  <button
                    onClick={() => updateStatus(order._id, 'cancelled')}
                    disabled={order.orderStatus !== 'pending'}
                    className="flex-1 py-1.5 rounded-xl text-sm font-medium bg-red-500 text-white disabled:opacity-40 active:scale-95 transition-transform"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── TABLET + LAPTOP: scrollable table (sm +) ── */}
          <div className="hidden sm:block overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Food Name</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">Order Status</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Email</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Order Time</th>
                  <th className="px-4 py-3 hidden xl:table-cell">Address</th>
                  <th className="px-4 py-3">Payment</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {orders.map((order, index) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-500">{index + 1}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{order.foodName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">${order.price * order.quantity}</td>
                    <td className="px-4 py-3">{order.quantity}</td>
                    <td className="px-4 py-3">{statusBadge(order.deliveryStatus)}</td>
                    <td className="px-4 py-3 hidden lg:table-cell max-w-[160px] truncate text-gray-500">{order.userEmail}</td>
                    <td className="px-4 py-3 hidden lg:table-cell whitespace-nowrap text-gray-500 text-xs">{order.orderTime}</td>
                    <td className="px-4 py-3 hidden xl:table-cell max-w-[160px] truncate text-gray-500 text-xs">{order.userAddress}</td>
                    <td className="px-4 py-3">{statusBadge(order.paymentStatus)}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1.5 justify-center">
                        <button
                          onClick={() => updateStatus(order._id, 'accepted')}
                          disabled={order.orderStatus !== 'pending'}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500 text-white disabled:opacity-40 hover:bg-blue-600 transition-colors whitespace-nowrap"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateStatus(order._id, 'delivered')}
                          disabled={order.orderStatus !== 'accepted'}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500 text-white disabled:opacity-40 hover:bg-amber-600 transition-colors whitespace-nowrap"
                        >
                          Deliver
                        </button>
                        <button
                          onClick={() => updateStatus(order._id, 'cancelled')}
                          disabled={order.orderStatus !== 'pending'}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500 text-white disabled:opacity-40 hover:bg-red-600 transition-colors whitespace-nowrap"
                        >
                          Cancel
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

export default OrderRequests;
