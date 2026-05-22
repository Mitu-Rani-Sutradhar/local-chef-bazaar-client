import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
   
    const {user} = useAuth();
    console.log(user)
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })
    console.log(payments)
   
   
   
    return (
        <div>
            <h2 className="text-5xl py-6 text-center font-bold">Payment History: {payments.length}</h2>


            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Amount</th>
        <th>Paid At</th>
        <th>Transaction ID</th>
      </tr>
    </thead>
    <tbody>
     {
        payments.map((payment, index) => (
          <tr key={payment._id}>
            <th>{index + 1}</th>
            <td>{payment.orderName}</td>
            <td>{payment.amount}</td>
            <td>{payment.paidAt}</td>
            <td>{payment.transactionId
}</td>
          </tr>
        ))
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;