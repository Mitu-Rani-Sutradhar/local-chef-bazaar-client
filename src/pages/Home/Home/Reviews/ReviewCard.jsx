import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName, review: reviewMessage, ratings
} = review;
    return (
         <div className="flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">

        {/* Icon */}
        <FaQuoteLeft className="text-3xl text-primary mb-4" />

        {/* Description */}
        <p className="text-gray-600 mb-6">
          {}
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4">
             
          <div>
            
            <p className="text-sm text-gray-500">
              {reviewMessage}
            </p>
            <div className='flex justify-between p-5 items-center'>
                 <h4 className="font-bold text-xl">{userName}</h4>
            <p className='bg-amber-200 p-2 rounded-xl'>Retings:<span className='text-orange-900'> {ratings}</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
};

export default ReviewCard;