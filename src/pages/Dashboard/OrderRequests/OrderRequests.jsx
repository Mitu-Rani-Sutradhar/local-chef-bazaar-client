
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
;

const OrderRequests = () => {
  const {user} = useAuth();
//   console.log(user.email);

 const axiosSecure = useAxiosSecure();

  const {data: orders = [],refetch} =useQuery({
    queryKey: ['orders', user?.email ],
    queryFn: async() =>{
         const res = await axiosSecure.get(`/manage-order-requests/${user?.email}`)
         return res.data;
    }
  })
console.log(orders)

const handleAccept = order =>{
    // console.log(order);
    const statusInfo = {
       deliveryStatus: 'accepted'}
       axiosSecure.patch(`/manage-order-requests/${order._id}/status`, statusInfo)
       .then(res =>{
        if(res.data.modifiedCount){
            refetch();
            alert('Order accepted successfully')
        }
       })}


    return (
        <div>
            <h2 className='text-4xl text-center font-bold py-5'>Order requests : {orders.length}</h2>
        
        <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Order Status </th>
                            <th>User Email</th>
                            <th>Order Time</th>
                            <th>User Address</th>
                            <th>Payment Status</th>
                            <th className='text-center'>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.foodName}</td>
                                <td>{order.price * order.quantity}</td>
                                <td>{order.quantity}</td>
                                <td> {order.deliveryStatus}
                                </td>
                                <td>{order.userEmail}</td>
                                <td>{order.orderTime}</td>
                                <td>{order.userAddress}</td>
                                <td>
                                    {
                                        order.paymentStatus
                                    }
                                </td>
                                <td className='flex'>
                                    <button onClick={() => handleAccept(order)} className="btn btn-primary">Accept</button>
                                    <button className="btn btn-primary mx-1">Deliver</button>
                                    <button className="btn btn-primary">Cancel</button>
                                </td>
                               

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        
        
        
        </div>
       

        
    );
};

export default OrderRequests;