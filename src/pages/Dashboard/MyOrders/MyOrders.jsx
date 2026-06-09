// import { useQuery } from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: orders = [] } = useQuery({
    queryKey: ['myOrders', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user.email}`);
      return res.data;
    },
  });

  const handlePayment = async (order) => {
    const paymentInfo = {
      price: order.price * order.quantity,
      orderId: order._id,
      userEmail: order.email,
      orderName: order.foodName,
    };
    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    window.location.assign(res.data.url);
  };

  const deliveryBadge = (status) => {
    const styles = {
      delivered: 'bg-green-100 text-green-700',
      accepted: 'bg-blue-100 text-blue-700',
      pending: 'bg-yellow-100 text-yellow-700',
      cancelled: 'bg-red-100 text-red-600',
    };
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${styles[status] ?? 'bg-gray-100 text-gray-500'}`}>
        {status ?? 'Pending'}
      </span>
    );
  };

  return (
    <div className="px-3 sm:px-6 lg:px-10 py-6 max-w-screen-xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold py-4 sm:py-6">
        My Orders
        <span className="ml-2 text-base sm:text-lg font-normal text-gray-400">({orders.length})</span>
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400 mt-16 text-lg">You have no orders yet.</p>
      ) : (
        <>
          {/* ── MOBILE: card list (< sm) ── */}
          <div className="flex flex-col gap-4 sm:hidden">
            {orders.map((order, index) => (
              <div key={order._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-medium">#{index + 1}</span>
                  {deliveryBadge(order.deliveryStatus)}
                </div>

                <p className="font-semibold text-gray-800 text-base">{order.foodName}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                  <span className="text-gray-400">Chef</span>
                  <span className="text-gray-700 truncate">{order.chefName}</span>

                  <span className="text-gray-400">Chef Email</span>
                  <span className="text-gray-500 text-xs truncate">{order.chefEmail}</span>

                  <span className="text-gray-400">Price</span>
                  <span className="font-semibold text-gray-800">${order.price * order.quantity}</span>

                  <span className="text-gray-400">Quantity</span>
                  <span className="text-gray-700">{order.quantity}</span>

                  <span className="text-gray-400">Order Time</span>
                  <span className="text-gray-500 text-xs">{order.orderTime}</span>
                </div>

                <div className="pt-1">
                  {order.paymentStatus === 'paid' ? (
                    <span className="inline-block w-full text-center py-2 rounded-xl text-sm font-medium bg-green-100 text-green-700">
                      ✓ Paid
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePayment(order)}
                      className="w-full py-2 rounded-xl text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-600 active:scale-95 transition-all"
                    >
                      Pay Now
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
                  <th className="px-4 py-3">Food Name</th>
                  <th className="px-4 py-3 hidden md:table-cell">Chef</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Chef Email</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3 hidden md:table-cell">Qty</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Order Time</th>
                  <th className="px-4 py-3 text-center">Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {orders.map((order, index) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400 font-medium">{index + 1}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{order.foodName}</td>
                    <td className="px-4 py-3 hidden md:table-cell text-gray-600 whitespace-nowrap">{order.chefName}</td>
                    <td className="px-4 py-3 hidden lg:table-cell text-gray-400 max-w-[160px] truncate text-xs">{order.chefEmail}</td>
                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">${order.price * order.quantity}</td>
                    <td className="px-4 py-3 hidden md:table-cell text-gray-600">{order.quantity}</td>
                    <td className="px-4 py-3">{deliveryBadge(order.deliveryStatus)}</td>
                    <td className="px-4 py-3 hidden lg:table-cell text-gray-400 text-xs whitespace-nowrap">{order.orderTime}</td>
                    <td className="px-4 py-3 text-center">
                      {order.paymentStatus === 'paid' ? (
                        <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-100 text-green-700">
                          ✓ Paid
                        </span>
                      ) : (
                        <button
                          onClick={() => handlePayment(order)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors whitespace-nowrap"
                        >
                          Pay Now
                        </button>
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

export default MyOrders;
// import React from 'react';
// import useAuth from '../../../hooks/useAuth';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { FiEdit } from "react-icons/fi";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { FaRegTrashAlt } from "react-icons/fa";
// import Swal from 'sweetalert2';
// import { Link } from 'react-router';

// const MyOrders = () => {

//     const { user } = useAuth();

//     const axiosSecure = useAxiosSecure();

//     const { data: orders = [] } = useQuery({
//         queryKey: ['myOrders', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/orders?email=${user.email}`);
//             return res.data;
//         }

//     })

    
//     // delete the order with refetch data
//     // const handleOrderDelete = id => {
//     //     // console.log(id);
//     //     Swal.fire({
//     //         title: "Are you sure?",
//     //         text: "You won't be able to revert this!",
//     //         icon: "warning",
//     //         showCancelButton: true,
//     //         confirmButtonColor: "#3085d6",
//     //         cancelButtonColor: "#d33",
//     //         confirmButtonText: "Yes, delete it!"
//     //     }).then((result) => {
//     //         if (result.isConfirmed) {
//     //             axiosSecure.delete(`/orders/${id}`)
//     //                 .then(res => {
//     //                     console.log(res.data);

//     //                     if (res.data.deletedCount) {
//     //                         refetch();
//     //                         Swal.fire({
//     //                             title: "Deleted!",
//     //                             text: "Your order request has been deleted.",
//     //                             icon: "success"
//     //                         });
//     //                     }
//     //                 })


//     //         }
//     //     });
//     // }
      
//     const  handlePayment = async(order) =>{
//         const paymentInfo = {
//             price: order.price * order.quantity ,
//             orderId: order._id,
//             userEmail: order.email,
//             orderName: order.foodName

//         }
//         const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
//         console.log(res.data.url);
//         window.location.assign(res.data.url);
//     }
   



//     return (
//         <div>
//             <h2 className="text-4xl text-center font-bold">All of my Orders: {orders.length}</h2>

//             <div className="overflow-x-auto">
//                 <table className="table table-zebra">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Food Name</th>
//                             <th>Chef Name</th>
//                             <th>Chef Email</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Order Status </th>
//                             <th>Delivery Time</th>
//                             <th>Payment Status</th>
//                             {/* <th>Delivery Status</th> */}

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             orders.map((order, index) => <tr key={order._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{order.foodName}</td>
//                                 <td>{order.chefName}</td>
//                                 <td>{order.chefEmail}</td>
//                                 <td>{order.price * order.quantity}</td>
//                                 <td>{order.quantity}</td>
//                                 <td> {order.deliveryStatus}
//                                     {/* <button className='btn btn-square'>
//                                         <FiEdit></FiEdit>
//                                     </button>
//                                     <button className='btn btn-square mx-2'>
//                                         <FaMagnifyingGlass />
//                                     </button>
//                                     <button
//                                         onClick={() => handleOrderDelete(order._id)}
//                                         className='btn btn-square'>
//                                         <FaRegTrashAlt />
//                                     </button> */}
//                                 </td>
//                                 <td>{order.orderTime}</td>
//                                 <td>
//                                     {
//                                         order.paymentStatus === 'paid'? 
//                                         <span className='text-gree-400'>Paid</span> :
//                                         // <Link to={`/dashboard/payment/${order._id}`}>
//                                         // <button className='btn btn-primary'>Pay</button></Link>
//                                         <button onClick={() => handlePayment(order)} className='btn btn-primary'>Pay</button>
//                                     }
//                                 </td>
//                                 {/* <td>
//                                     {
//                                         order.deliveryStatus === 'delivered' ? 
//                                         <span className='text-green-400'>Delivered</span> :
//                                         <span className='text-yellow-400'>Pending</span>
//                                     }
//                                 </td> */}

//                             </tr>)
//                         }



//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyOrders;