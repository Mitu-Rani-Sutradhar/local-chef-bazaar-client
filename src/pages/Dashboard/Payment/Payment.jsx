import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {

   const {orderId} = useParams();
   const axiosSecure = useAxiosSecure();

   const { isLoading, data: order } = useQuery({
    queryKey: ['orders', orderId],
    queryFn: async () => {
        const res = await axiosSecure.get(`/orders/${orderId}`);
        return res.data;
    }
   })
   console.log(orderId);



   const handlePayment = async() => {
        const paymentInfo = {
            price: order.price * order.quantity ,
            orderId: order._id,
            userEmail: order.email,
            orderName: order.foodName

        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
        console.log(res.data);
        window.location.href = res.data.url;
   }

   if(isLoading){
    return <span className="loading loading-spinner loading-xl"></span>
   }


    return (
        <div className='text-center'>
            <h2 className='font-bold text-2xl text-center py-6'>Please pay ${order.price * order.quantity} for   { order.foodName}</h2>

            <button onClick={handlePayment} className='btn btn-primary'>Pay</button>
        </div>
    );
};

export default Payment;