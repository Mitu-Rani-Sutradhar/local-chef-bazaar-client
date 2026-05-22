import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div className='text-center'>
            <h2 className="text-4xl text-center py-5">Payment is cancelled. Please try again.</h2>
         <Link to="/dashboard/my-orders">
          <button className='btn btn-primary'>Try Again</button>
         </Link>
        </div>
    );
};

export default PaymentCancelled;