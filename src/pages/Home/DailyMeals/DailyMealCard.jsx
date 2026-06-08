import React from 'react';
import { Link } from 'react-router';

const DailyMealCard = ({meal}) => {
     const {_id, rating, 
foodIamge, 
chefName, price = "foodPrice", 
deliveryArea} = meal;
    return (
      
     <div className="card bg-base-100 w-75 h-100 shadow-sm mb-5">
  <figure className="p-4">
    <img
      src={
foodIamge}
      className="rounded-xl  w-[320px] h-[180px]" />
  </figure>
  <div className="card-body px-4 py-2">
    <div className=''>
        <p className="font-semibold"><span className='text-lg font-bold'>Chef Id:</span>{_id}</p>
        <p className='text-lg'><span className='font-bold'>Chef-Name:</span> {chefName}</p>
        <p className='text-lg'><span className='font-bold'>Delivery-Area:</span> {deliveryArea}</p>
    </div>
    <div className='flex justify-between'>
        <p className='text-lg font-bold'>Price: <span className='bg-amber-300 p-1 rounded-2xl'>{price}</span></p>
        <p className='text-lg font-bold'>Rating: <span className='text-red-500'>{rating}</span></p>
    </div>

  
    <div className="text-center">
       
      <Link to ={`/meals/${_id}`}><button className="btn btn-primary p-2">See Details</button></Link>
    </div>
  </div>
</div>
      
    );
};

export default DailyMealCard;