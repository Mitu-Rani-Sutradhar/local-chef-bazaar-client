import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiEdit } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyOrders = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: orders = [] } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders?email=${user.email}`);
            return res.data;
        }

    })

    
    // delete the order with refetch data
    // const handleOrderDelete = id => {
    //     // console.log(id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/orders/${id}`)
    //                 .then(res => {
    //                     console.log(res.data);

    //                     if (res.data.deletedCount) {
    //                         refetch();
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your order request has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })


    //         }
    //     });
    // }
      
    const  handlePayment = async(order) =>{
        const paymentInfo = {
            price: order.price * order.quantity ,
            orderId: order._id,
            userEmail: order.email,
            orderName: order.foodName

        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
        console.log(res.data.url);
        window.location.assign(res.data.url);
    }
   



    return (
        <div>
            <h2 className="text-4xl text-center font-bold">All of my Orders: {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name</th>
                            <th>Chef Name</th>
                            <th>Chef Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Order Status </th>
                            <th>Delivery Time</th>
                            <th>Payment Status</th>
                            {/* <th>Delivery Status</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.foodName}</td>
                                <td>{order.chefName}</td>
                                <td>{order.chefEmail}</td>
                                <td>{order.price * order.quantity}</td>
                                <td>{order.quantity}</td>
                                <td> {order.deliveryStatus}
                                    {/* <button className='btn btn-square'>
                                        <FiEdit></FiEdit>
                                    </button>
                                    <button className='btn btn-square mx-2'>
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button
                                        onClick={() => handleOrderDelete(order._id)}
                                        className='btn btn-square'>
                                        <FaRegTrashAlt />
                                    </button> */}
                                </td>
                                <td>{order.orderTime}</td>
                                <td>
                                    {
                                        order.paymentStatus === 'paid'? 
                                        <span className='text-gree-400'>Paid</span> :
                                        // <Link to={`/dashboard/payment/${order._id}`}>
                                        // <button className='btn btn-primary'>Pay</button></Link>
                                        <button onClick={() => handlePayment(order)} className='btn btn-primary'>Pay</button>
                                    }
                                </td>
                                {/* <td>
                                    {
                                        order.deliveryStatus === 'delivered' ? 
                                        <span className='text-green-400'>Delivered</span> :
                                        <span className='text-yellow-400'>Pending</span>
                                    }
                                </td> */}

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;