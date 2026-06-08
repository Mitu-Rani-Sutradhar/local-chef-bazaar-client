import React from 'react';

const MyMealsCard = ({meal}) => {
    console.log(meal)
    const {foodName,foodIamge,price,rating,ingraedients,
deliveryTime,chefName,_id} = meal
    return (
    

              <div className="card bg-base-100 w-70 h-110 shadow-sm mb-5">
  <figure className="p-4">
    <img
      src={
foodIamge
}
      className="rounded-xl  w-[320px] h-[180px]" />
  </figure>
  <div className="card-body px-4 py-2">
    <div className=''>
        
        <p className='text-lg'><span className='font-bold'>Food-Name:</span> {foodName}</p>
        <p className='text-lg'><span className='font-bold'>Delivery-Time:</span> {deliveryTime}</p>
    </div>
    <div className='flex justify-between'>
        <p className='text-lg font-bold'>Price: <span className='bg-amber-300 p-1 rounded-2xl'>{price}</span></p>
        <p className='text-lg font-bold'>Rating: <span className='text-red-500'>{rating}</span></p>
    </div>
    <div className=''>
        <p className='text-sm font-bold'>chefName:{chefName}</p>
        <p className='text-sm font-bold'>ingraedients: <span className='text-yellow-500'>{ingraedients}</span></p>
    </div>

  </div>
</div>
    
    );
};

export default MyMealsCard;